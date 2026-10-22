"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { NewsList, type NewsItem } from "./NewsList";

const TABS = [
  { id: "press", label: "Press Releases", linkLabel: "Read Release" },
  { id: "media", label: "In the Media", linkLabel: "Read Article" },
] as const;

type TabId = (typeof TABS)[number]["id"];

/**
 * Press releases and media coverage as two tabs. The active tab lives in the
 * URL hash (/newsroom#media) so a tab can be linked to directly, without
 * useSearchParams forcing the statically rendered page to go dynamic.
 */
export function NewsTabs({ press, media }: { press: NewsItem[]; media: NewsItem[] }) {
  const [active, setActive] = useState<TabId>("press");

  useEffect(() => {
    const fromHash = () => setActive(location.hash === "#media" ? "media" : "press");
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (id: TabId) => {
    setActive(id);
    history.replaceState(null, "", id === "press" ? location.pathname : `#${id}`);
  };

  // WAI-ARIA tabs: arrow keys move between tabs and focus follows.
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = TABS[(TABS.findIndex((t) => t.id === active) + 1) % TABS.length].id;
    select(next);
    document.getElementById(`news-tab-${next}`)?.focus();
  };

  return (
    <>
      <div className="news-tabs" role="tablist" aria-label="Newsroom">
        {TABS.map((t) => (
          <button
            key={t.id}
            id={`news-tab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            aria-controls={`news-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => select(t.id)}
            onKeyDown={onKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>
      {TABS.map((t) => (
        <div
          key={t.id}
          id={`news-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`news-tab-${t.id}`}
          hidden={active !== t.id}
        >
          <NewsList items={t.id === "press" ? press : media} heading={t.label} linkLabel={t.linkLabel} />
        </div>
      ))}
    </>
  );
}
