import { BsFillTelephoneFill } from "react-icons/bs";

function LandingPageHero() {
  const ImageURL = "/assets/LandingPageHeroImage.jpg";
  return (
    <div
      className="h-[60svh] md:min-h-[700px] flex relative w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${ImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-35"></div>

      <div className="relative flex flex-col h-full md:h-3/5 w-full md:justify-between md:pt-32 md:pl-4 md:t-20 md:w-3/5">
        <h2 className="flex justify-center h-1/5 md:h-[10] items-end text-white font-bold text-xl md:justify-start">
          A1 ROOFING
        </h2>
        <h1 className="flex justify-center h-[25%] items-center md:text-start text-white font-bold text-4xl md:text-5xl text-center md:justify-start">
          The Best Roofing Services & Consulting
        </h1>
        <h3 className="flex justify-center h-[25%] md:h-[20%] text-white fold-bold md:text-start text-xl text-center md:justify-start">
          Highest quality service for over 30 years, competitive pricing with
          reliable consulting
        </h3>

        <div className="flex justify-center h-1/5 w-screen text-white md:justify-start">
          <a href="tel:999-999-9999">
            <button className="w-56 h-2/3 min-h-[60px] bg-red-500 flex justify-between items-center px-2 rounded-xl">
              <div className="text-2xl">
                <BsFillTelephoneFill />
              </div>
              <div className="text-xl font-bold">Free Consultation</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHero;
