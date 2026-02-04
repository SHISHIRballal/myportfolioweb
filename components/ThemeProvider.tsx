"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeName } from "@/lib/themes";

type Mode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeName;
  mode: Mode;
  setTheme: (theme: ThemeName) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("forest");
  const [mode, setMode] = useState<Mode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("colorTheme") as ThemeName | null;
    const savedMode = localStorage.getItem("themeMode") as Mode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeState(savedTheme || "forest");
    setMode(savedMode || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [theme, mode, mounted]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem("colorTheme", newTheme);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return {
      theme: "forest" as ThemeName,
      mode: "light" as Mode,
      setTheme: () => {},
      toggleMode: () => {},
    };
  }
  return context;
}
