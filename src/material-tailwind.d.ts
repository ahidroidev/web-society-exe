// material-tailwind.d.ts
import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface ButtonProps {
    placeholder?: string;
    onPointerEnterCapture?: (e: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  }
  // Puedes añadir otros componentes si te dan el mismo error (Card, Typography, etc.)
}
    export interface TypographyProps {
    placeholder?: string;
    onPointerEnterCapture?: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<HTMLElement>) => void;
  }