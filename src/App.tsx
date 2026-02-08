import { Navbar } from "@/components/layout/Navbar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import UseCases from "./sections/UseCases"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases/>
      </main>
    </>
  )
}

export default App
