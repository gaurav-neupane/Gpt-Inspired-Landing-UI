import { cn } from "@/lib/cn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-28 text-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10" />

      {/* Tagline */}
      <p className="text-sm font-medium text-primary/80 mb-3">
        Introducing
      </p>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        ChatGPT <span className="text-primary">5.2</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Our smartest, fastest, and most capable model yet — built-in reasoning that
        brings expert-level intelligence to everyone.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4">
        <a
          href="#features"
          className={cn(
            "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          )}
        >
          Explore Features
        </a>

        <a
          href="#pricing"
          className={cn(
            "px-6 py-3 rounded-xl border border-border font-medium hover:bg-accent transition"
          )}
        >
          View Pricing
        </a>
      </div>
    </section>
  );
}
