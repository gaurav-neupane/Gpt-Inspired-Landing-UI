import { cn } from "@/lib/cn";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function Accordian() {

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="max-w-md p-4 border-2 border-gray-400">
      <button onClick={()=>setOpen((prev)=>!prev)} className="flex justify-between items-center w-full cursor-pointer">
        <h2 className="text-xl">Study Mode</h2>
        {isOpen ? <LuMinus size={24}/> : <LuPlus size={24}/>}
      </button>
      <div className={cn("grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <p className="overflow-hidden">A new way to study in ChatGPT with step-by-step guidance instead of quick answers, helping you learn and retain knowledge better. You can even ask ChatGPT to make you flash cards and quizzes.</p>
      </div>
    </div>
  );
}
