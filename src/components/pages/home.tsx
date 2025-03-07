import articles from "@/constant"
import Hero from "../Hero"
import NavBar from "../NavBar"
import ArticleComponent from "../ArticleComponent"
import UpcomingEvents from "../UpcomingEvents"
import Footer from "../Footer"
import AboutUs from '../AboutUs'



function Home() {


  return (
    <main className='min-h-screen w-screen overflow-x-hidden scroll-smooth'>
      <NavBar />
      <Hero/>
      <div id='articles' className='flex flex-col gap-3'>
      {articles.map((article, index) => (
        <ArticleComponent key={index} {...article} />
      ))}
      </div>
      
      <UpcomingEvents/>
      <AboutUs/>
      <Footer/>
      
    </main>
  )
}

export default Home