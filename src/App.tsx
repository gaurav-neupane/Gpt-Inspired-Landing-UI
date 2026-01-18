import { Navbar } from "@/components/layout/Navbar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features/>
      </main>
    </>
  )
}

export default App
