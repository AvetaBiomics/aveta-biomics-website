import { NextResponse } from "next/server";
import { Resend } from "resend";
import { findRole } from "../../careers/roles";
import { careersEmail } from "../../careers/roles";

/**
 * Applications for a role.
 *
 * The recipient is looked up server-side from the slug rather than accepted
 * from the request — otherwise the endpoint would forward attachments to any
 * address a caller supplied, which is an open relay.
 */

/** Resend caps a message at 40MB; a resume well under that keeps us clear. */
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/** Deliberately loose — real addresses vary far more than most patterns allow. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Provisioning has not happened yet. Fail loudly rather than silently
    // accepting an application nobody will ever receive.
    return NextResponse.json(
      { ok: false, message: "Applications are not accepting submissions yet. Please email us directly." },
      { status: 503 },
    );
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Could not read the form." }, { status: 400 });
  }

  const role = findRole(field(data, "slug"));
  if (!role) {
    return NextResponse.json({ ok: false, message: "Unknown role." }, { status: 404 });
  }

  const name = field(data, "name");
  const email = field(data, "email");
  const linkedin = field(data, "linkedin");
  const coverLetter = field(data, "coverLetter");
  const resume = data.get("resume");

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Please check your email address.";
  if (linkedin && !/^https?:\/\/(www\.)?linkedin\.com\//i.test(linkedin)) {
    errors.linkedin = "Please enter a full LinkedIn profile URL.";
  }
  if (!(resume instanceof File) || resume.size === 0) {
    errors.resume = "Please attach your resume.";
  } else if (resume.size > MAX_RESUME_BYTES) {
    errors.resume = "That file is larger than 5MB.";
  } else if (resume.type && !ACCEPTED_RESUME_TYPES.includes(resume.type)) {
    errors.resume = "Please attach a PDF or Word document.";
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const file = resume as File;
  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["LinkedIn", linkedin || "—"],
    ["Role", role.title],
    ["Location", role.location],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#10205c;line-height:1.6">
      <h2 style="margin:0 0 4px">New application</h2>
      <p style="margin:0 0 20px;color:#58698f">${escapeHtml(role.title)}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 24px 4px 0;color:#58698f">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      ${
        coverLetter
          ? `<h3 style="margin:24px 0 6px">Cover letter</h3><p style="white-space:pre-wrap;margin:0">${escapeHtml(coverLetter)}</p>`
          : ""
      }
      <p style="margin:24px 0 0;color:#58698f;font-size:13px">Resume attached: ${escapeHtml(file.name)}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Must be a domain verified in Resend. Set APPLICATIONS_FROM_EMAIL once
      // the sending domain is verified; the onboarding sender only reaches the
      // account owner, so a wrong value here fails silently for everyone else.
      from: process.env.APPLICATIONS_FROM_EMAIL ?? "Aveta Careers <onboarding@resend.dev>",
      to: [role.hiringManagerEmail],
      // The hiring manager replies straight to the candidate.
      replyTo: email,
      subject: `Application — ${role.title} — ${name}`,
      html,
      attachments: [
        { filename: file.name, content: Buffer.from(await file.arrayBuffer()) },
      ],
    });
    if (error) {
      console.error("Resend rejected the application email", error);
      return NextResponse.json(
        { ok: false, message: `We could not send your application. Please email ${careersEmail}.` },
        { status: 502 },
      );
    }
  } catch (cause) {
    console.error("Application email failed", cause);
    return NextResponse.json(
      { ok: false, message: `We could not send your application. Please email ${careersEmail}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
