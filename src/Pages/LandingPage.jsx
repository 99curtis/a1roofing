import NavBar from "../Components/NavBar"
import LandingPageHero from "../Components/LandingPageHero"
import LandingPageOurProcess from "../Components/LandingPageOurProcess"
import LandingPageWhatWeDo from "../Components/LandingPageWhatWeDo"
import LandingPageCertifications from "../Components/LandingPageCertifications"
import Footer from "../Components/Footer"

function LandingPage() {


  return (
    <>
    <div className="overflow-hidden w-screen">
    <NavBar />
    <LandingPageHero />
    <LandingPageOurProcess />
    <LandingPageWhatWeDo />
    <LandingPageCertifications />
    <Footer />

    </div>
    </>
  )
}

export default LandingPage
