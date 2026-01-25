import brainstrom from "@/assets/Brainstorm.jpg";
import summarize from "@/assets/Summarize.jpg";
import generate from "@/assets/Generate.jpg";

import { cn } from "@/lib/cn";
import BentoGrid from "@/components/layout/BentoGrid";

const features = [
  {
    description: "Writes, brainstorms, edits, and explores ideas with you",
    img: brainstrom,
  },
  {
    description:
      "Summarize meetings. Find new insights. Increase productivity.",
    img: summarize,
  },
  {
    description:
      "Generate and debug code. Automate repetitive tasks. Learn new APIs.",
    img: generate,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl py-6">
      {/* Section header */}
      <div className="mb-12 text-center">
        <p className="max-w-xl mx-auto text-muted-foreground text-lg">
          Here's how we make it effortless.
        </p>
      </div>
      <div className="py-10">
      {/* Features grid */}
      {features.map((item, index) => (
        <div
          key={index}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-16 p-10",
            "md:[&:nth-child(even)>img]:order-2",
          )}
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.description}
            className="w-full rounded-xl shadow-md"
          />
          {/* Text */}
          <div>
            <p className="text-muted-foreground text-center text-lg">
              {item.description
                .split(".")
                .filter(Boolean)
                .map((line, i) => (
                  <p key={i}>{line.trim()}.</p>
                ))}
            </p>
          </div>
        </div>
      ))}
      </div>
      <div className="mb-12 text-center">
        <p className="max-w-xl mx-auto text-muted-foreground text-lg">
          And there's more to explore.
        </p>
      </div>
      <BentoGrid/>
    </section>
  );
}
