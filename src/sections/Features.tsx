import { cn } from "@/lib/cn";

const FEATURES = [
  {
    title: "Built-in Reasoning",
    description:
      "Advanced thinking capabilities that break down complex problems and deliver expert-level answers with clarity.",
  },
  {
    title: "Faster Than Ever",
    description:
      "Optimized inference and architecture improvements make GPT-5.2 significantly faster and more responsive.",
  },
  {
    title: "Multimodal Intelligence",
    description:
      "Understand and generate text, images, and structured data seamlessly in a single model.",
  },
  {
    title: "Higher Reliability",
    description:
      "Improved factual accuracy, reduced hallucinations, and better alignment across domains.",
  },
  {
    title: "Developer-First API",
    description:
      "Consistent outputs, better tool use, and predictable behavior designed for production systems.",
  },
  {
    title: "Scales With You",
    description:
      "From quick prompts to enterprise workloads, GPT-5.2 adapts effortlessly to your needs.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium text-primary/80 mb-2">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Designed to Think. Built to Perform.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          GPT-5.2 combines speed, reasoning, and reliability to deliver
          intelligence you can trust.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={cn(
              "rounded-2xl border border-border p-6",
              "bg-background/60 backdrop-blur",
              "transition hover:shadow-lg hover:-translate-y-1"
            )}
          >
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
