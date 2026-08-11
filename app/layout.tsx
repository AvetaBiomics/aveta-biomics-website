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

export const metadata: Metadata = {
  title: "Aveta Biomics | Oral Immunotherapies for Hard-to-Treat Cancers",
  description:
    "Aveta Biomics develops oral immunotherapies designed to reprogram the tumor immune microenvironment.",
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
      <body suppressHydrationWarning>{hasAccess ? children : <PasswordGate />}</body>
    </html>
  );
}
