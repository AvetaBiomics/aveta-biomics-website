"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  ["About", "/about"],
  ["Our Mission, Our Heroes", "/mission"],
  ["Our Science", "/science"],
  ["Pipeline", "/pipeline"],
  ["Publications", "/publications"],
  ["Newsroom", "/newsroom"],
  ["Expanded Access", "/expanded-access"],
] as const;

export function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Aveta Biomics home">
          <img src="/assets/aveta-biomics-logo.jpg" alt="Aveta Biomics" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <a key={href} className={active === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="mailto:betterhealth@avetabiomics.com">Contact</a>
          <a className={active === "/join-us" ? "nav-cta active" : "nav-cta"} href="/join-us">
            Join Us <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ active }: { active?: string }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Aveta Biomics home">
            <img src="/assets/aveta-biomics-logo.jpg" alt="Aveta Biomics" />
          </Link>
          <p>110 Great Road, Suite 302<br />Bedford, MA 01730</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {nav.map(([label, href]) => (
            <a key={href} className={active === href ? "active" : ""} href={href}>{label}</a>
          ))}
          <span className="footer-contact">Contact: betterhealth@avetabiomics.com</span>
          <a className={active === "/join-us" ? "active" : ""} href="/join-us">Join Us</a>
        </nav>
        <p className="copyright">© 2026 Aveta Biomics</p>
      </div>
    </footer>
  );
}

export function Shell({ active, children }: { active?: string; children: React.ReactNode }) {
  return <><Header active={active} />{children}<Footer active={active} /></>;
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return <a className={`arrow-link ${className}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children} <span aria-hidden="true">→</span></a>;
}
