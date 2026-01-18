import { cn } from "@/lib/cn"
import Logo from "@/assets/openai.svg?react";

const Nav_Items = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
] as const;

export const Navbar = () => {
    return (
      <header className="fixed top-0 z-40 w-full border-b border-gray-100 shadow-sm h-16">
      <nav className="flex justify-between px-8 items-center h-full">
                <Logo className="h-6 w-auto" />
                <ul className="hidden md:flex gap-18">
                    {Nav_Items.map(items => (
                        <li key={items.href}>
                            <a href={items.href}>{items.label}</a>
                        </li>
                    ))}
                </ul>
                <button className="border-2 border-gray-100 shadow-xs rounded-2xl p-2">Sign Up</button>
            </nav>
    </header>
  )
}
