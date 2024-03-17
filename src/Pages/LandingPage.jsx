import NavBar from "../Components/NavBar"
import LandingPageHero from "../Components/LandingPageHero"
import LandingPageOurProcess from "../Components/LandingPageOurProcess"
import LandingPageWhatWeDo from "../Components/LandingPageWhatWeDo"

function LandingPage() {


  return (
    <>
    <div className="overflow-hidden w-screen">
    <NavBar />
    <LandingPageHero />
    <LandingPageOurProcess />
    <LandingPageWhatWeDo />

    </div>
    </>
  )
}

export default LandingPage
