export type ThemeName = "ocean" | "sunset" | "forest" | "midnight" | "rose";

export const themes: { id: ThemeName; name: string; preview: string }[] = [
  { id: "ocean", name: "Ocean", preview: "bg-blue-500" },
  { id: "sunset", name: "Sunset", preview: "bg-orange-500" },
  { id: "forest", name: "Forest", preview: "bg-emerald-600" },
  { id: "midnight", name: "Midnight", preview: "bg-blue-600" },
  { id: "rose", name: "Rose", preview: "bg-rose-500" },
];
