"use client"; // Este sí es cliente

import { ThemeProvider } from "@material-tailwind/react";

export function MaterialThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
