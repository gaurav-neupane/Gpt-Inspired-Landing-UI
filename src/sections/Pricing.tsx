import Card from "@/components/ui/Card";

export default function Pricing() {
    return (
        <section id="pricing" className="flex flex-col justify-center items-center gap-10 relative max-w-full py-6 px-10">
            <p>Flexible pricing designed for learners, professionals, and teams.</p>
            <div className="flex gap-10">
                <Card className="h-100 w-80"></Card>
                <Card className="h-100 w-80"></Card>
                <Card className="h-100 w-80"></Card>
            </div>    
            
      </section>
  )
}
