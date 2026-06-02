"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/types";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "sr", label: "SR" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 border border-border px-3 py-2 text-[10px] uppercase tracking-[0.18em] sm:text-xs",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option, index) => (
        <span key={option.value} className="inline-flex items-center gap-2">
          {index > 0 ? <span className="text-black/20" aria-hidden="true">|</span> : null}
          <button
            type="button"
            onClick={() => setLocale(option.value)}
            className={cn(
              "transition-colors",
              locale === option.value ? "text-black" : "text-muted hover:text-black/70",
            )}
            aria-pressed={locale === option.value}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
