import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";
import PasswordGate from "./components/PasswordGate";
import { ACCESS_COOKIE, REVIEW_PASSWORD, accessTokenFor } from "./lib/review-access";
import { JsonLd, organizationJsonLd, ogImage, siteName, siteUrl } from "./lib/seo";

export const metadata: Metadata = {
  // Resolves the relative URLs used by canonical tags and Open Graph below.
  metadataBase: new URL(siteUrl),
  title: {
    // Pages set a bare title; this appends the company name. `default` covers
    // any route that does not set one of its own.
    default: "Aveta Biomics | Oral Immunotherapies for Hard-to-Treat Cancers",
    template: `%s | ${siteName}`,
  },
  description:
    "Aveta Biomics develops oral immunotherapies designed to reprogram the tumor immune microenvironment.",
  applicationName: siteName,
  robots: { index: true, follow: true },
  openGraph: {
    siteName,
    locale: "en_US",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const configuredPassword = REVIEW_PASSWORD;
  const cookieStore = await cookies();
  const suppliedToken = cookieStore.get(ACCESS_COOKIE)?.value;
  const expectedToken = configuredPassword
    ? await accessTokenFor(configuredPassword)
    : undefined;
  const hasAccess =
    process.env.NODE_ENV !== "production" ||
    !configuredPassword ||
    Boolean(expectedToken && suppliedToken === expectedToken);

  return (
    // suppressHydrationWarning: browser extensions (password managers, colour
    // pickers, translators) inject attributes onto <body> before React
    // hydrates, which React reports as a mismatch. This applies to <body>'s own
    // attributes only, not its children, so real mismatches still surface.
    <html lang="en">
      <body suppressHydrationWarning>
        {hasAccess ? children : <PasswordGate />}
        {hasAccess && <JsonLd data={organizationJsonLd} />}
      </body>
    </html>
  );
}
