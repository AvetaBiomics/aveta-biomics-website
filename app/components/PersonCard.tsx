import Link from "next/link";
import { Arrow } from "./SiteChrome";
import { hasPage, type Person } from "../about/people";

/**
 * One person in a section of /about.
 *
 * The card used to open a modal, and so had to be a client component and a
 * <button>. It now links to the person's own page at /about/<slug>, which needs
 * no JavaScript — a plain link that prefetches, opens in a new tab on
 * middle-click and can be shared. Someone with no biography on file has no page
 * to link to, so their card renders as static markup.
 */
export function PersonCard({ person }: { person: Person }) {
  const { name, role, image, slug } = person;
  const inner = <>
    {image ? <img src={image} alt={name} /> : <span className="person-placeholder" aria-hidden="true">●</span>}
    <span className="person-copy"><strong>{name}</strong><span>{role}</span>{hasPage(person) && <small>View biography <Arrow /></small>}</span>
  </>;

  if (!hasPage(person)) return <div className="person-card">{inner}</div>;
  return <Link className="person-card" href={`/about/${slug}`}>{inner}</Link>;
}
