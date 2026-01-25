import { cn } from "@/lib/cn";
import { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";
import Logo from "../ui/Logo";

const Nav_Items = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonial", href: "#testimonial" },
];

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
    <header className="fixed top-0 z-50 w-full">
      <nav className="flex justify-between px-6 items-center border-b border-gray-100 shadow-sm h-14 bg-white">
        <Logo />
        <ul className="hidden lg:flex gap-16">
          {Nav_Items.map((items) => (
            <li key={items.href}>
              <a href={items.href} className="hover:">{items.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <a
            href="https://chatgpt.com"
            className={cn(
              "inline-flex items-center rounded-2xl px-3 py-2 text-sm",
              "border border-gray-400 text-[#666666]",
              "transition-transform duration-200 ease-out",
              "hover:scale-105 hover:border-gray-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800/40",
            )}
          >
            Sign Up
          </a>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden p-2 hover:cursor-pointer"
        >
          {open ? <X /> : <TextAlignJustify />}
        </button>
      </nav>
    </header>
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 z-40 top-14 bg-white/30 backdrop-blur-xl",
          "h-full",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <ul className="flex h-full flex-col gap-8 px-6 py-8">
          {Nav_Items.map((items) => (
            <li key={items.href}>
              <a
                href={items.href}
                onClick={() => setOpen(false)}
                className="block text-xl"
              >
                {items.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/signup"
              className="block rounded-md text-black text-xl"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
      </>
  );
};
