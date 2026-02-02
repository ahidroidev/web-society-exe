"use client";

import React from "react";
import { MTProvider } from "@/components/MTProvider";

export function Layout({ children }: { children: React.ReactNode }) {
  return <MTProvider>{children}</MTProvider>;
}

export default Layout;
