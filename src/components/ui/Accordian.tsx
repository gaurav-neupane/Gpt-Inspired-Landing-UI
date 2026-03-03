import { cn } from "@/lib/cn";
import { LuMinus, LuPlus } from "react-icons/lu";

type AccordianProps = {
  title: string,
  content: string,
  isExpanded: boolean,
  onToggle : () => void,
}

export default function Accordian({title,content,isExpanded,onToggle}:AccordianProps) {

  return (
    <div className="max-w-full py-4">
      <button onClick={onToggle} className="flex justify-between items-center w-full cursor-pointer">
        <h2 className="text-lg">{title}</h2>
        <div className="relative flex items-center justify-center w-6 h-6">
          <LuPlus 
            size={24} 
            className={cn(
              "absolute transition-all duration-300 ease-in-out",
              isExpanded ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            )} 
          />
          <LuMinus 
            size={24} 
            className={cn(
              "absolute transition-all duration-300 ease-in-out",
              isExpanded ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            )} 
          />
        </div>
      </button>
      <div className={cn("grid transition-all duration-300 ease-in-out",
        isExpanded ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <p className="overflow-hidden text-base">{content}</p>
      </div>
    </div>
  );
}
