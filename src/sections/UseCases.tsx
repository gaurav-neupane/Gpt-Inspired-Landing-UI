import Accordian from "@/components/ui/Accordian";
import Card from "@/components/ui/Card";
import { useState } from "react";
// import { cn } from "@/lib/cn";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: "1",
    title: "Full-Stack Development Architecture",
    content:
      "An intermediate approach to full-stack development involves mastering the bridge between client-side responsiveness and server-side scalability. This includes deep dives into state management, RESTful APIs, and efficient database indexing.",
  },
  {
    id: "2",
    title: "The Role of DevOps in Modern Scaling",
    content:
      "DevOps is the backbone of rapid deployment. By utilizing Docker containers and automated CI/CD pipelines, developers can ensure that their 'Smart Farmer' applications or business tools remain resilient under heavy user loads.",
  },
  {
    id: "3",
    title: "Market Strategy & Business Growth",
    content:
      "Growing a business requires more than just code. It involves analyzing market trends, understanding customer pain points (like those of small marginal farmers), and implementing data-driven strategies to achieve sustainable growth.",
  },
  {
    id: "4",
    title: "Emerging Technologies: Web3 and AI",
    content:
      "The future of the web lies in decentralization and intelligence. Integrating AI into agricultural advisory apps or exploring Web3 for transparent supply chains represents the next major learning curve for modern developers.",
  },
  {
    id: "5",
    title: "System Efficiency and IoT",
    content:
      "Optimizing systems through TinyML and IoT allows for real-time monitoring of environments. Using ultrasonic sensors and microcontrollers enables precise data collection, which is vital for smart infrastructure projects.",
  },
];

export default function UseCases() {
  const [expandedId, setExpanded] = useState<null | string>(null);

  function toggleExpand(id: string) {
    setExpanded(expandedId === id ? null : id);
  }

  return (
    <section
      id="use-cases"
      className="flex flex-col justify-center relative mx-auto max-w-full py-6 px-10 "
    >
      <div className="mb-12 text-center">
        <p className="max-w-xl mx-auto text-lg">
          <span className="block">Packed with powerful capabilities…</span>
          <span className="block">
            …and used by millions every day in many ways.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-14 max-w-full my-6 px-8">
        <div>
          <h1 className="py-4 text-2xl">For Studying</h1>
          {accordionData.map((item) => (
            <Accordian
              key={item.id}
              title={item.title}
              content={item.content}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
        <div>
          <Card className="max-w-full h-100" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 my-6 w-full">
        <h1 className="text-2xl">Image Generation</h1>
        <div className="flex gap-20">
          <Card className="h-100 w-60"></Card>
          <Card className="h-100 w-60"></Card>
          <Card className="h-100 w-60"></Card>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14 max-w-full my-6 px-8">
        <div>
          <Card className="max-w-full h-100"/>
        </div>
        <div>
          <h1 className="py-4 text-2xl">For Studying</h1>
          {accordionData.map((item) => (
            <Accordian
              key={item.id}
              title={item.title}
              content={item.content}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
