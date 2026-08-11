"use client";

import { useEffect, useState } from "react";

type BioModalProps = {
  name: string;
  role: string;
  image?: string;
  bio?: string[];
  section?: string;
};

export function BioModal({ name, role, image, bio, section = "LEADERSHIP" }: BioModalProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const canOpen = Boolean(bio?.length);
  return <>
    <button className="person-card" onClick={() => canOpen && setOpen(true)} aria-haspopup={canOpen ? "dialog" : undefined}>
      {image ? <img src={image} alt={name} /> : <span className="person-placeholder" aria-hidden="true">●</span>}
      <span className="person-copy"><strong>{name}</strong><span>{role}</span>{canOpen && <small>View biography →</small>}</span>
    </button>
    {open && bio && <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="bio-modal" role="dialog" aria-modal="true" aria-labelledby={`bio-${name.replace(/\W/g,"-")}`} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close biography">×</button>
        {image ? <img src={image} alt="" /> : <span className="person-placeholder large" aria-hidden="true">●</span>}
        <div><p className="eyebrow">{section}</p><h2 id={`bio-${name.replace(/\W/g,"-")}`}>{name}</h2><p className="role">{role}</p>{bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      </section>
    </div>}
  </>;
}
