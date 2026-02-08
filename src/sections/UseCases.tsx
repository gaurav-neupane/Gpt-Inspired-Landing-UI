import Accordian from "@/components/ui/Accordian";
import { cn } from "@/lib/cn";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="flex flex-col justify-center relative mx-auto max-w-full py-6 px-10 "
    >
      <div className="mb-12 text-center">
        <p className="max-w-xl mx-auto text-lg">
          <span className="block">Packed with powerful capabilities…</span>
          <span className="block">…and used by millions every day in many ways.</span>
        </p>
      </div>

      <Accordian/>
    </section>
  );
}
