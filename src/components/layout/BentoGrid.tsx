
const adv_features = [
  {
    title: "Deep Reasoning Engine",
    description:
      "Breaks down complex problems with multi-step logic, generating solutions grounded in structured reasoning.",
    img: "/assets/reasoning.png",
  },
  {
    title: "Real-Time Knowledge Integration",
    description:
      "Seamlessly synthesizes recent information, adapting to fast-changing contexts with higher factual accuracy.",
    img: "/assets/realtime.png",
  },
  {
    title: "Adaptive Learning Responses",
    description:
      "Modifies tone, depth, and complexity dynamically based on conversation flow and user intent.",
    img: "/assets/adaptive.png",
  },
  {
    title: "Multimodal Understanding",
    description:
      "Understands images, text, audio, and structured data simultaneously for richer context awareness.",
    img: "/assets/multimodal.png",
  },
  {
    title: "Autonomous Task Planning",
    description:
      "Generates actionable plans, executes multi-step tasks, and organizes workflows without manual guidance.",
    img: "/assets/planning.png",
  },
  {
    title: "Ultra-Low Latency Generation",
    description:
      "Optimized architecture delivers significantly faster inference with smoother conversational flow.",
    img: "/assets/latency.png",
  },
  {
    title: "Code Intelligence v3",
    description:
      "Understands codebases, writes modular functions, explains architecture, and fixes bugs autonomously.",
    img: "/assets/code.png",
  },
  {
    title: "Robust Safety Alignment",
    description:
      "Improved safety layers ensure more reliable outputs with reduced hallucinations and better content filtering.",
    img: "/assets/safety.png",
  },
];


export default function BentoGrid(){
  return (
      <div className= "grid grid-cols-1 md:grid-cols-5 grid-rows-8 items-center justify-center gap-10 p-10">
        <div className="col-span-3 row-span-2 bg-black/10 h-95 w-full"></div>
        <div className="col-span-2 row-span-3 bg-black/10 h-full w-full"></div>
        <div className="col-span-3 row-span-2 bg-black/10 h-full w-full"></div>
        <div className="col-span-2 row-span-2 bg-black/10 h-full w-full"></div>
        <div className="col-span-3 row-span-1 bg-black/10 h-full w-full"></div>
        <div className="col-span-3 row-span-3 bg-black/10 h-full w-full"></div>
        <div className="col-span-2 bg-black/10 h-full w-full"></div>
        <div className="col-span-2 row-span-2 bg-black/10 h-full w-full"></div>
      </div>
  )
}
