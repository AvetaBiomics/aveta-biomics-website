"use client";

import { FormEvent, useState } from "react";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        setMessage(result?.message ?? "Unable to open the site.");
        return;
      }
      window.location.reload();
    } catch {
      setMessage("Unable to open the site. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="review-gate">
      <section className="review-gate__panel" aria-labelledby="review-title">
        <img
          className="review-gate__logo"
          src="/assets/aveta-biomics-logo.jpg" width={2047} height={280}
          alt="Aveta Biomics"
        />
        <p className="review-gate__eyebrow">WEBSITE REVIEW</p>
        <h1 id="review-title">Welcome.</h1>
        <p className="review-gate__intro">
          Enter the review password to view the Aveta Biomics website.
        </p>
        <form onSubmit={unlock} className="review-gate__form">
          <label htmlFor="review-password">Password</label>
          <input
            id="review-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoFocus
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Opening…" : "Open website"}
          </button>
          <p className="review-gate__message" role="alert" aria-live="polite">
            {message}
          </p>
        </form>
      </section>
    </main>
  );
}
