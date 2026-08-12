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
            Join Us <Arrow />
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

/**
 * Arrow and chevron icons.
 *
 * These replace the "→", "↗" and "⌄" characters used previously. Inter contains
 * none of them, so each fell back to a different installed font — on macOS "→"
 * resolved to Lucida Grande and "↗" to PingFang SC, a CJK face. That made the
 * arrows render at the wrong weight and baseline, and differently on every
 * operating system. Drawn as SVG they are identical everywhere.
 *
 * All inherit colour via currentColor and are sized in em, so they track the
 * font-size and colour of whatever link or button contains them.
 */
type IconProps = { className?: string };

function Icon({ d, className = "" }: { d: string } & IconProps) {
  return (
    <svg className={`icon-arrow ${className}`.trim()} viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Forward / call-to-action arrow. */
export function Arrow(props: IconProps) {
  return <Icon d="M2.25 6h7.5M6.75 3l3 3-3 3" {...props} />;
}

/** Outbound link, opens in a new tab. */
export function ExternalArrow(props: IconProps) {
  return <Icon d="M3.25 8.75 8.75 3.25M4.75 3.25h4v4" {...props} />;
}

/** File download. */
export function DownloadArrow(props: IconProps) {
  return <Icon d="M6 2.25v7.5M3 6.75l3 3 3-3" {...props} />;
}

/** Disclosure chevron for select-style controls. */
export function Chevron(props: IconProps) {
  return <Icon d="M3.25 4.75 6 7.5l2.75-2.75" {...props} />;
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return <a className={`arrow-link ${className}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children} {external ? <ExternalArrow /> : <Arrow />}</a>;
}
