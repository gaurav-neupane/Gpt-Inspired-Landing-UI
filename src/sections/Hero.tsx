import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
    >
      {/* Title */}
      <h1 className="inline-flex flex-col gap-2 text-6xl bg-linear-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent md:text-8xl tracking-tight">
        <span className="block">Introducing</span>
        <span className="block">ChatGPT 5.2</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Our smartest, fastest, most useful model yet, with built-in thinking that puts expert-level intelligence in everyone's hands.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-16">
        <a
          href="#features"
          className={cn(
            "px-6 py-3 rounded-xl border bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          )}
        >
          Get started
        </a>

        <a
          href="#pricing"
          className={cn(
            "px-6 py-3 rounded-xl border font-medium hover:bg-accent transition"
          )}
        >
          Learn more about GPT-5
        </a>
      </div>
    </section>
  );
}
