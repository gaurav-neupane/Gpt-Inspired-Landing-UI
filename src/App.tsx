import { Navbar } from "@/components/layout/Navbar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import UseCases from "./sections/UseCases"
import Cta from "./sections/Cta"
import Pricing from "./sections/Pricing"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing/>
        <Cta/>
      </main>
    </>
  )
}

export default App
