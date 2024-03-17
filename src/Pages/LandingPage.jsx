import NavBar from "../Components/NavBar"
import LandingPageHero from "../Components/LandingPageHero"
import LandingPageOurProcess from "../Components/LandingPageOurProcess"
import LandingPageWhatWeDo from "../Components/LandingPageWhatWeDo"
import LandingPageCertifications from "../Components/LandingPageCertifications"

function LandingPage() {


  return (
    <>
    <div className="overflow-hidden w-[100svw]">
    <NavBar />
    <LandingPageHero />
    <LandingPageOurProcess />
    <LandingPageWhatWeDo />
    <LandingPageCertifications />

    </div>
    </>
  )
}

export default LandingPage
