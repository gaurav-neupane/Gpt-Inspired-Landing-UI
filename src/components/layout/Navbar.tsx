import { cn } from "@/lib/cn";
import Logo from "@/assets/openai.svg?react";
import { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";

const Nav_Items = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-gray-100 shadow-sm h-14 bg-white">
      <nav className="flex justify-between px-8 items-center h-full">
        <Logo className="h-6 w-auto" />
        <ul className="hidden lg:flex gap-16">
          {Nav_Items.map((items) => (
            <li key={items.href}>
              <a href={items.href}>{items.label}</a>
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
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800/40"
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
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-8 px-4 py-4">
          {Nav_Items.map((items) => (
            <li key={items.href}>
            <a href={items.href} onClick={()=>setOpen(false)}  className="block text-muted-foreground hover:text-foreground" >{items.label}</a>
            </li>
          ))}
          <li>
            <a
              href="/signup"
              className="block rounded-md text-black"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
