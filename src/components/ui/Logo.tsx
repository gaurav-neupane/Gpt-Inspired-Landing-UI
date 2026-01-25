import { PiOpenAiLogoLight } from "react-icons/pi";

export default function Logo(){
    return (
      <div className="flex gap-1 items-center justify-center">
            <PiOpenAiLogoLight size={32}/>
            <h1 className="font-semibold text-xl">OpenAI</h1>
      </div>
  )
}
