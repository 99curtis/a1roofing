import NavBar from "../Components/NavBar"
import LandingPageHero from "../Components/LandingPageHero"
import LandingPageOurProcess from "../Components/LandingPageOurProcess"

function LandingPage() {


  return (
    <>
    <div className="overflow-hidden w-screen">
    <NavBar />
    <LandingPageHero />
    <LandingPageOurProcess />
    </div>
    </>
  )
}

export default LandingPage
