"use client";

import { useMemo, useState } from "react";
import { Arrow } from "./SiteChrome";
import { YearSelect } from "./YearSelect";

export type NewsItem = {
  year: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  href: string;
};

const ALL = "all";

/**
 * Press-release list with a working year filter.
 *
 * The filter is a native <select> rather than a styled span: it gets keyboard
 * support, screen-reader semantics and the platform picker on mobile for free.
 * Only this list is a client component — the page around it stays server
 * rendered.
 */
export function NewsList({ items }: { items: NewsItem[] }) {
  const years = useMemo(
    () => [...new Set(items.map((i) => i.year))].sort((a, b) => b.localeCompare(a)),
    [items],
  );
  const [year, setYear] = useState(ALL);
  const shownYears = year === ALL ? years : years.filter((y) => y === year);

  return (
    <>
      <div className="news-toolbar">
        <div><h2>Press release/Aveta in news</h2></div>
        <YearSelect
          label="Filter press releases by year"
          value={year}
          onChange={setYear}
          options={[{ value: ALL, label: "All years" }, ...years.map((y) => ({ value: y, label: y }))]}
        />
      </div>

      {shownYears.map((y) => (
        <div key={y}>
          <h3 className="year-title">{y}</h3>
          {items
            .filter((item) => item.year === y)
            .map((item) => (
              <article className="news-row" key={item.title}>
                <time className="news-date">{item.date}</time>
                <div className="news-copy">
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                  Read Release <Arrow />
                </a>
              </article>
            ))}
        </div>
      ))}
    </>
  );
}
