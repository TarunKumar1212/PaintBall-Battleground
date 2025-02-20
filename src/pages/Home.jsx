import AdvantagesSection from "../Component/AdvantagesSection "
import Carousel from "../Component/Crousal"
import Footer from "../Component/Footer"
import HeroSection from "../Component/HeroSection"

function Home() {
  return (
    <div>
        <Carousel/>
        <HeroSection/>
        <AdvantagesSection/>
        <Footer/>
    </div>
  )
}

export default Home
