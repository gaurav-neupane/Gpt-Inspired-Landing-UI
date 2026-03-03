import { cn } from "@/lib/cn";

export default function Cta() {
  return (
    <section
      id="cta"
      className="flex flex-col justify-center items-center gap-5 relative w-full py-6 px-10"
    >
      <h1 className="inline-flex flex-col gap-2 text-3xl bg-linear-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent tracking-wide">Work Smarter. Learn Faster. Create More</h1>
      <p className="inline-flex flex-col gap-2 text-lg bg-linear-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent tracking-wide">Experience the power of intelligent conversation with ChatGPT</p>
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
        Try Now
      </a>
    </section>
  );
}
