"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://t.me/devcrackpy" target="_blank" rel="noopener noreferrer">
      <Button
        placeholder="" // Fix para Material Tailwind en TS
        color="teal"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-2 pl-2 items-center border border-blue-gray-50 shadow-md" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Image
          width={20}
          height={20}
          alt="Dev Crack"
          src="/image/telegram.png" // Ruta corregida sin "/public"
        />
        Developed by DevCrack
      </Button>
    </a>
  );
}
