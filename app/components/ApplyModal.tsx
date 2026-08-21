"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "./SiteChrome";

type Status = "idle" | "sending" | "sent";

/**
 * Application form for a single role, opened from the role page.
 *
 * Only the slug is submitted — the recipient is resolved server-side, so the
 * hiring manager's address never reaches the browser.
 */
export function ApplyModal({ slug, title, fallbackHref }: { slug: string; title: string; fallbackHref: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  /**
   * Stable across renders so the escape-key effect below does not resubscribe
   * on every keystroke. The panel unmounts when closed, so the inputs reset on
   * their own; this resets the surrounding state to match.
   */
  const close = useCallback(() => {
    setOpen(false);
    // Returning focus to the trigger keeps keyboard users where they were.
    openerRef.current?.focus();
    setStatus("idle");
    setErrors({});
    setMessage("");
    setFileName("");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    // The page behind a modal should not scroll with it.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Skip the hidden slug input — it cannot take focus, and matching it first
    // left focus on <body>, stranding keyboard and screen-reader users outside
    // the dialog they had just opened.
    dialogRef.current
      ?.querySelector<HTMLInputElement>('input:not([type="hidden"]), textarea')
      ?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const response = await fetch("/api/apply", { method: "POST", body: new FormData(form) });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setStatus("idle");
      setErrors(result.errors ?? {});
      if (result.message) setMessage(result.message);
      else if (!result.errors) setMessage("Something went wrong. Please try again.");
    } catch {
      setStatus("idle");
      setMessage("We could not reach the server. Please check your connection and try again.");
    }
  }

  const labelledBy = `apply-${slug}`;

  return <>
    <button ref={openerRef} type="button" className="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
      Apply for this role <Arrow />
    </button>

    {open && <div className="modal-backdrop" role="presentation" onMouseDown={close}>
      <div
        ref={dialogRef}
        className="apply-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={close} aria-label="Close application form">×</button>

        {status === "sent" ? (
          <div className="apply-sent">
            <p className="eyebrow green">APPLICATION SENT</p>
            <h2 id={labelledBy}>Thank you.</h2>
            <p className="body-copy">
              Your application for {title} is with our team. If it looks like a fit, someone will be in touch.
            </p>
            <button type="button" className="button" onClick={close}>Close</button>
          </div>
        ) : (
          <>
            <p className="eyebrow">APPLY</p>
            <h2 id={labelledBy}>{title}</h2>

            <form className="apply-form" onSubmit={onSubmit} noValidate>
              <input type="hidden" name="slug" value={slug} />

              <label className="apply-field">
                <span>Full name <i aria-hidden="true">*</i></span>
                <input name="name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.name)} />
                {errors.name && <em>{errors.name}</em>}
              </label>

              <label className="apply-field">
                <span>Email <i aria-hidden="true">*</i></span>
                <input name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} />
                {errors.email && <em>{errors.email}</em>}
              </label>

              <label className="apply-field">
                <span>LinkedIn profile</span>
                <input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" aria-invalid={Boolean(errors.linkedin)} />
                {errors.linkedin && <em>{errors.linkedin}</em>}
              </label>

              <div className="apply-field">
                <span>Resume <i aria-hidden="true">*</i></span>
                <label className="apply-file">
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    aria-invalid={Boolean(errors.resume)}
                    onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name ?? "")}
                  />
                  <span className="apply-file-button">Choose file</span>
                  <span className="apply-file-name">{fileName || "PDF or Word, up to 5MB"}</span>
                </label>
                {errors.resume && <em>{errors.resume}</em>}
              </div>

              <label className="apply-field">
                <span>Cover letter</span>
                <textarea name="coverLetter" rows={5} placeholder="What draws you to this role?" />
              </label>

              {message && <p className="apply-error" role="alert">
                {message} <a className="text-link" href={fallbackHref}>Email us instead</a>
              </p>}

              <div className="apply-actions">
                <button type="submit" className="button" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : <>Send application <Arrow /></>}
                </button>
                <p className="apply-note">Fields marked * are required.</p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>}
  </>;
}
