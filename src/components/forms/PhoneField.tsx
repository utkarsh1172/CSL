"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";

import { countryDialCodes, type CountryDialCode } from "@/content/shared/countries.generated";

/** Shown first while the search is empty: CSL's main markets. */
const suggestedCodes = ["CA", "US", "IN", "GB", "AE", "AU"];
const pageStep = 8;

const countriesByCode = new Map(countryDialCodes.map((country) => [country.code, country]));
const suggestedCountries = suggestedCodes.flatMap((code) => countriesByCode.get(code) ?? []);

// Accent-insensitive, so "aland" finds "Åland Islands" and "cote" finds "Côte d’Ivoire".
const normalize = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

const searchIndex = new Map(countryDialCodes.map((country) => [country.code, normalize(country.name)]));

function matchCountries(query: string) {
  const term = normalize(query);
  const digits = term.replace(/^\+/, "");

  if (/^\d+$/.test(digits)) {
    return countryDialCodes.filter((country) => country.dialCode.slice(1).startsWith(digits));
  }

  const matches = countryDialCodes.filter(
    (country) => searchIndex.get(country.code)?.includes(term) || country.code.toLowerCase() === term,
  );
  // Names that start with the query rank above names that merely contain it.
  return matches.sort(
    (a, b) =>
      Number(!searchIndex.get(a.code)?.startsWith(term)) - Number(!searchIndex.get(b.code)?.startsWith(term)),
  );
}

type Option = { key: string; country: CountryDialCode };
type Section = { label: string; options: Option[] };

function Flag({ code }: { code: string }) {
  return (
    // Plain <img>: tiny static SVGs that next/image would not optimise anyway.
    <img
      alt=""
      className="phone-field__flag"
      decoding="async"
      height={15}
      loading="lazy"
      src={`/images/flags/${code.toLowerCase()}.svg`}
      width={22}
    />
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="phone-field__chevron" viewBox="0 0 12 8">
      <path d="M1 1.25 6 6.25l5-5" />
    </svg>
  );
}

type PhoneFieldProps = {
  /** Prefix for element ids, so several phone fields can share a page. */
  idPrefix: string;
  defaultCountry?: string;
  required?: boolean;
};

/**
 * Country dial-code picker plus phone number input. Submits `countryCode` (e.g. "+1"),
 * `country` (ISO code) and `phone`.
 */
export function PhoneField({ idPrefix, defaultCountry = "CA", required = false }: PhoneFieldProps) {
  const listId = useId();
  const [country, setCountry] = useState(
    () => countriesByCode.get(defaultCountry) ?? countryDialCodes[0],
  );
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const sections = useMemo<Section[]>(() => {
    const toOptions = (group: string, list: readonly CountryDialCode[]) =>
      list.map((item) => ({ key: `${group}-${item.code}`, country: item }));

    if (query.trim()) {
      return [{ label: "Results", options: toOptions("result", matchCountries(query)) }];
    }

    return [
      { label: "Suggested", options: toOptions("suggested", suggestedCountries) },
      { label: "All countries", options: toOptions("all", countryDialCodes) },
    ];
  }, [query]);

  const options = useMemo(() => sections.flatMap((section) => section.options), [sections]);
  const activeOption = options[activeIndex];

  const optionId = (key: string) => `${listId}-${key}`;

  const openPanel = () => {
    const selectedIndex = options.findIndex((option) => option.country.code === country.code);
    setActiveIndex(Math.max(selectedIndex, 0));
    setOpen(true);
  };

  const closePanel = (returnFocus = true) => {
    setOpen(false);
    setQuery("");
    if (returnFocus) triggerRef.current?.focus();
  };

  const choose = (next: CountryDialCode) => {
    setCountry(next);
    setOpen(false);
    setQuery("");
    // The next thing to fill in is the number itself.
    phoneRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    searchRef.current?.focus();

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [open]);

  // Keep the highlighted country visible while arrowing through the list.
  useEffect(() => {
    if (!open || !activeOption) return;
    document.getElementById(`${listId}-${activeOption.key}`)?.scrollIntoView({ block: "nearest" });
  }, [open, activeOption, listId]);

  const moveActive = (delta: number) => {
    if (options.length === 0) return;
    setActiveIndex((current) => (current + delta + options.length) % options.length);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveActive(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveActive(-1);
        break;
      case "PageDown":
        event.preventDefault();
        setActiveIndex((current) => Math.min(current + pageStep, options.length - 1));
        break;
      case "PageUp":
        event.preventDefault();
        setActiveIndex((current) => Math.max(current - pageStep, 0));
        break;
      case "Enter":
        // Never submit the surrounding form from the search box.
        event.preventDefault();
        if (activeOption) choose(activeOption.country);
        break;
      case "Escape":
        event.preventDefault();
        closePanel();
        break;
      case "Tab":
        closePanel(false);
        break;
    }
  };

  return (
    <div className="phone-field" data-open={open ? "" : undefined} ref={rootRef}>
      <button
        aria-controls={open ? listId : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Country code: ${country.name} ${country.dialCode}`}
        className="phone-field__country"
        onClick={() => (open ? closePanel() : openPanel())}
        onKeyDown={(event) => {
          if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
            event.preventDefault();
            openPanel();
          }
        }}
        ref={triggerRef}
        type="button"
      >
        <Flag code={country.code} />
        <span>{country.dialCode}</span>
        <ChevronIcon />
      </button>

      <input name="countryCode" type="hidden" value={country.dialCode} />
      <input name="country" type="hidden" value={country.code} />

      <label className="sr-only" htmlFor={`${idPrefix}-phone`}>
        Phone number ({country.name} {country.dialCode})
      </label>
      <input
        autoComplete="tel-national"
        className="phone-field__number"
        id={`${idPrefix}-phone`}
        inputMode="tel"
        name="phone"
        placeholder={country.example ?? "Phone Number"}
        ref={phoneRef}
        required={required}
        type="tel"
      />

      {open ? (
        <div className="phone-field__panel">
          <div className="phone-field__search">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="10.8" cy="10.8" r="6.2" />
              <path d="m15.4 15.4 4.2 4.2" />
            </svg>
            <input
              aria-activedescendant={activeOption ? optionId(activeOption.key) : undefined}
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded="true"
              aria-label="Search countries by name or dial code"
              autoComplete="off"
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search country or code"
              ref={searchRef}
              role="combobox"
              spellCheck={false}
              type="text"
              value={query}
            />
          </div>

          <ul aria-label="Countries" className="phone-field__list" id={listId} role="listbox">
            {options.length === 0 ? (
              <li className="phone-field__empty" role="presentation">
                No countries match “{query.trim()}”
              </li>
            ) : (
              sections.map((section) => (
                <li key={section.label} role="presentation">
                  <span aria-hidden="true" className="phone-field__group">
                    {section.label}
                  </span>
                  <ul aria-label={section.label} role="group">
                    {section.options.map((option) => {
                      const selected = option.country.code === country.code;

                      return (
                        <li
                          aria-selected={selected}
                          className="phone-field__option"
                          data-active={option === activeOption ? "" : undefined}
                          id={optionId(option.key)}
                          key={option.key}
                          onClick={() => choose(option.country)}
                          // Keep focus in the search box so the listbox stays open.
                          onMouseDown={(event) => event.preventDefault()}
                          onMouseMove={() => setActiveIndex(options.indexOf(option))}
                          role="option"
                        >
                          <Flag code={option.country.code} />
                          <span className="phone-field__name">{option.country.name}</span>
                          <span className="phone-field__dial">{option.country.dialCode}</span>
                          <svg aria-hidden="true" className="phone-field__check" viewBox="0 0 16 16">
                            {selected ? <path d="m3.5 8.4 2.9 2.9 6.1-6.6" /> : null}
                          </svg>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
