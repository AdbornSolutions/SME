import { useState } from "react";
import logo from "../../assets/logo.png";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-20 grid min-h-[78px] w-full grid-cols-[1fr_auto_1fr] items-center rounded-[22px] bg-[#f7f7f5] px-9 py-4 text-[#06284a] max-[900px]:min-h-[68px] max-[900px]:grid-cols-[1fr_auto] max-[900px]:px-6">
      <a
        className="justify-self-start"
        href="#home"
        aria-label="SME Infra home"
        onClick={closeMenu}
      >
        <img
          className="h-auto w-[clamp(52px,5vw,78px)] object-contain"
          src={logo}
          alt="SME Infra"
        />
      </a>

      <button
        className="hidden cursor-pointer border-0 bg-transparent p-2 max-[900px]:block"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="my-1 block h-0.5 w-5 bg-[#06284a]" />
        <span className="my-1 block h-0.5 w-5 bg-[#06284a]" />
        <span className="my-1 block h-0.5 w-5 bg-[#06284a]" />
      </button>

      <nav
        className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col rounded-b-[20px] bg-[#f7f7f5] px-6 pb-4 pt-2 shadow-lg shadow-[#06284a]/10 min-[901px]:static min-[901px]:flex min-[901px]:flex-row min-[901px]:items-center min-[901px]:justify-center min-[901px]:gap-[clamp(24px,2.35vw,42px)] min-[901px]:bg-transparent min-[901px]:p-0 min-[901px]:shadow-none`}
        aria-label="Primary navigation"
      >
        {navigationItems.map(({ label, href }) => (
          <a
            className="py-2 font-['Arial_Narrow',Arial,sans-serif] text-[14px] font-extrabold uppercase tracking-[-.55px] no-underline transition-colors duration-200 hover:text-[#ff4d2d] focus-visible:text-[#ff4d2d] focus-visible:outline-none min-[901px]:py-0"
            key={label}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="justify-self-end rounded-full bg-[#ff4d2d] px-4 pb-[11px] pt-[10px] font-['Arial_Narrow',Arial,sans-serif] text-[13px] font-extrabold uppercase tracking-[-.35px] text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#e93e20] focus-visible:bg-[#e93e20] focus-visible:outline-none max-[900px]:hidden"
        href="#contact"
        onClick={closeMenu}
      >
        Get a quote
      </a>
    </header>
  );
}
