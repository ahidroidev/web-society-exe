import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="https://web-society-exe.vercel.app/"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Society . E X E
        </Typography>
        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`}>
          <NavItem>Inicio</NavItem>
          <NavItem>Conocenos</NavItem>
          <NavItem>Contáctanos</NavItem>
          <NavItem href="#">Docs</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          
          <a href="https://www.github.com/ahidroidev" target="_blank" rel="noopener" aria-label="Repositorio GitHub">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-github text-base" />
          </IconButton>
          </a>
          <a href="https://t.me/devcrackpy" target="_blank" rel="noopener" aria-label="Telegram Profile">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-telegram text-base" />
          </IconButton>
          </a>
          <a href="https://www.instagram.com/programameste" target="_blank" rel="noopener" aria-label="Instagram Profile">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          </a>
          <a href="https://web-society-exe.vercel.app/status" target="_blank" rel="noopener">
            <Button color={isScrolling ? "gray" : "white"} size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Status
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Inicio</NavItem>
            <NavItem>Conocenos</NavItem>
            <NavItem>Contáctanos</NavItem>
            <NavItem href="#">Docs</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://www.github.com/ahidroidev" target="_blank" rel="noopener" aria-label="Repositorio GitHub">
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-github text-base" />
            </IconButton>
            </a>
            <a href="https://t.me/devcrackpy" target="_blank" rel="noopener" aria-label="Telegram Profile">
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-telegram text-base" />
            </IconButton>
            </a>
            <a href="https://www.instagram.com/programameste" target="_blank" rel="noopener" aria-label="Instagram Profile">
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            </a>
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://web-society-exe.vercel.app/status" target="_blank" rel="noopener">
              <Button color="gray" size="sm" className="ml-auto"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Status
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
