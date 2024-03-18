import Carousel from "./ImageCarousel";
import React from "react";

const StormDamage1 = "/assets/StormDamage1.webp";
const StormDamage2 = "/assets/StormDamage2.webp";
const StormDamage3 = "/assets/StormDamage3.webp";
const StormDamage4 = "/assets/StormDamage4.webp";
const StormDamage5 = "/assets/StormDamage5.webp";

const slides = [
    StormDamage1,
    StormDamage2,
    StormDamage3,
    StormDamage4,
    StormDamage5,
];

function ServicePageStormDamage() {
  return (
    <div className="h-[800px] md:min-h-[950px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem] bg-zinc-800">
      <div className="h-[400px] md:h-[300px] flex flex-col justify-around">
        <div className="flex w-[200px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
            STORM DAMAGE
          </h3>
        </div>
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-3xl font-bold ">Rapid Response & Restoration</h1>
          <h2 className="text-3xl">Expert Storm Damage Solutions</h2>
        </div>
        <p className=" text-zinc-400">
          Offering a free consultation and detailed inspection to assess storm
          damage accurately. Expect transparent, fair quotes. Our team
          prioritizes swift, efficient project completion to restore your peace
          of mind and property's integrity, ensuring minimal disruption with the
          highest standards of service and care.
        </p>
      </div>
      <div className="h-[300px] max-w-screen-xl mx-auto pt-10">
        <Carousel>
          {slides.map((slide, index) => (
            <img
              className="h-[300px] md:h-[550px]"
              key={index}
              src={slide}
              alt={`Residential Roofing ${index + 1}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ServicePageStormDamage;
