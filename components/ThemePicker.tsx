"use client";

import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { themes } from "@/lib/themes";

export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-secondary transition-colors"
        aria-label="Choose theme"
        aria-expanded={open}
      >
        <Palette className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 py-2 px-3 rounded-lg bg-background border border-secondary shadow-lg min-w-[180px] z-50">
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2 px-2">
            Color theme
          </p>
          <div className="space-y-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  theme === t.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-secondary text-foreground/80"
                }`}
              >
                <span className={`w-4 h-4 rounded-full ${t.preview}`} />
                {t.name}
              </button>
            ))}
          </div>
          <div className="border-t border-secondary mt-2 pt-2 mt-2">
            <button
              onClick={toggleMode}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary text-foreground/80"
            >
              <span>{mode === "dark" ? "Dark" : "Light"} mode</span>
              <span className="text-xs text-foreground/60">Toggle</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
