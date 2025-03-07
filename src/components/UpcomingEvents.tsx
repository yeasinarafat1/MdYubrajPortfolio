import PremiumCard from "./PremeumBookCard"
import UpcomingTravelBookCard from "./UpcomingTravelBookCard"

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="w-full md:container mx-auto min-h-screen flex flex-col items-center gap-12 mt-4">
        <h2 className="text-3xl font-bold"> Probable Travel & Books</h2>
        
        <div className="w-full flex flex-col items-center justify-center flex-wrap gap-20">
          <p className="text-3xl font-bold">Books</p>
            <div className="flex items-center justify-center flex-wrap gap-4 ">
            <PremiumCard img="/book/4.jpg" type="upcoming"/>
            <PremiumCard img="/book/5.jpg" type="upcoming"/>
            <PremiumCard img="/book/6.jpg" type="upcoming"/>
            </div>
          <p className="text-3xl font-bold">Travels</p>
            <div className="flex flex-wrap items-center justify-center gap-4 ">
            <UpcomingTravelBookCard image="/Coral_Castle.jpg" title="Coral Castle" date="Coming Soon" location="USA" type="travel"/>
            <UpcomingTravelBookCard image="/rockymountain.jpg" title="Rocky Mountains" date="Coming Soon" location="USA" type="travel"/>
            
            </div>

        </div>
    </section>
  )
}

export default UpcomingEvents