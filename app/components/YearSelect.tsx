"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Chevron } from "./SiteChrome";

export type YearOption = { value: string; label: string };

/**
 * Custom dropdown following the ARIA listbox pattern, used instead of a native
 * <select> so the open panel can carry the site's own styling — browsers do not
 * allow the native option list to be styled.
 *
 * Keyboard: Enter/Space/Arrow opens; Arrow moves; Enter/Space selects; Escape
 * closes; Home/End jump. Focus moves to the list while open and returns to the
 * trigger on close. Selection state is exposed via aria-selected, and the active
 * option via aria-activedescendant, so screen readers announce it correctly.
 */
export function YearSelect({
  options,
  value,
  onChange,
  label,
}: {
  options: YearOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.findIndex((o) => o.value === value)));
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  const selected = options.find((o) => o.value === value) ?? options[0];

  // Close on outside click, so the panel behaves like a real menu.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Move focus into the list when it opens; the list owns the keyboard from there.
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  const openAt = (index: number) => {
    setActive(Math.max(0, index));
    setOpen(true);
  };

  const commit = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openAt(options.findIndex((o) => o.value === value));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      openAt(options.length - 1);
    }
  };

  const onListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => (i + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => (i - 1 + options.length) % options.length);
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        commit(active);
        break;
      case "Escape":
      case "Tab":
        setOpen(false);
        triggerRef.current?.focus();
        break;
    }
  };

  return (
    <div className="year-select" ref={rootRef}>
      <button
        type="button"
        ref={triggerRef}
        className="select-like"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}. Currently ${selected.label}`}
        onClick={() => (open ? setOpen(false) : openAt(options.findIndex((o) => o.value === value)))}
        onKeyDown={onTriggerKeyDown}
      >
        <span>{selected.label}</span>
        <Chevron className={open ? "is-open" : ""} />
      </button>

      {open && (
        <ul
          className="year-select__list"
          role="listbox"
          tabIndex={-1}
          ref={listRef}
          aria-label={label}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKeyDown}
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={o.value === value}
              className={`year-select__option${i === active ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => commit(i)}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
