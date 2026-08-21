import type { Metadata } from "next";

/**
 * Canonical origin for the site.
 *
 * Absolute URLs are required for canonical tags, Open Graph and the sitemap.
 * The apex is the real production host — it is the only domain on the Vercel
 * project, and the www subdomain does not resolve, so pointing canonicals at
 * www would send crawlers to a dead hostname. Override with
 * NEXT_PUBLIC_SITE_URL if that ever changes; every absolute URL the site emits
 * derives from this one value.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://avetabiomics.com"
).replace(/\/$/, "");

export const siteName = "Aveta Biomics";
export const contactEmail = "betterhealth@avetabiomics.com";
export const ogImage = "/assets/og-default.jpg";

/**
 * Per-page metadata. Titles are written without the company name — the
 * `title.template` in the root layout appends it — and stay under the ~60
 * characters search results show before truncating.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /**
   * `title.template` in the root layout only decorates *child* route segments,
   * and app/page.tsx shares the root segment with app/layout.tsx — so the home
   * page never receives the suffix and has to carry the brand itself.
   */
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
  };
}

/** Sitewide Organization node, emitted once from the root layout. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/assets/aveta-biomics-logo.jpg`,
  email: contactEmail,
  description:
    "Aveta Biomics develops oral immunotherapies designed to reprogram the tumor immune microenvironment in hard-to-treat cancers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "110 Great Road, Suite 302",
    addressLocality: "Bedford",
    addressRegion: "MA",
    postalCode: "01730",
    addressCountry: "US",
  },
};

/** Renders a JSON-LD block. Kept in one place so escaping stays consistent. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
