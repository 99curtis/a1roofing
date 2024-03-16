import { BsFillTelephoneFill } from "react-icons/bs";

function LandingPageHero() {
  const ImageURL = "/assets/LandingPageHeroImage.jpg";
  return (
    <div
      className="h-[60svh] relative w-screen"
      style={{
        backgroundImage: `url(${ImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>

      <div className="relative flex flex-col h-full w-full">
        <h2 className="flex justify-center h-1/5 items-end text-white font-bold text-xl">
          A1 ROOFING
        </h2>
        <h1 className="flex justify-center h-[25%] items-center text-white font-bold text-4xl text-center">
          The best Roofing Services & Consulting
        </h1>
        <h3 className="flex justify-center h-[25%] text-white fold-bold text-xl text-center">
          Highest quality service for over 30 years, competitive pricing with
          reliable consulting
        </h3>

        <div className="flex justify-center h-1/5 w-screen text-white">
            <a href="tel:999-999-9999">
                <button className="w-56 h-2/3 bg-red-500 flex justify-between items-center px-2 rounded-xl">
                    <div className="text-2xl"><BsFillTelephoneFill/></div>
                    <div className="text-xl font-bold">Free Consultation</div>
                </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;
