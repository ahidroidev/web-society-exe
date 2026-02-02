"use client";
import { ThemeProvider } from "@material-tailwind/react";

// Exportación nombrada (para que coincida con lo que buscas)
export function MTProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
