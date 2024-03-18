import Carousel from "./ImageCarousel";
import React from "react";

const CopperRoof1 = "/assets/CopperRoof1.webp";
const CopperRoof2 = "/assets/CopperRoof2.webp";
const CopperRoof3 = "/assets/CopperRoof3.webp";
const CopperRoof4 = "/assets/CopperRoof4.webp";
const CopperRoof5 = "/assets/CopperRoof5.webp";

const slides = [
  CopperRoof1,
  CopperRoof2,
  CopperRoof3,
  CopperRoof4,
  CopperRoof5,
];

function ServicePageCopper() {
  return (
    <div className="h-[800px] md:min-h-[950px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem]">
      <div className="h-[400px] md:h-[300px] flex flex-col justify-around">
        <div className="flex w-[210px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
            COPPER ROOFING
          </h3>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="text-3xl font-bold ">Elegance & Durability</h1>
          <h2 className="text-3xl">Crafting Timeless Copper Roofs</h2>
        </div>
        <p className=" text-zinc-400">
          Begin your journey with a free consultation and detailed inspection to
          fully grasp your vision for a copper roof. Receive a clear,
          transparent quote. Our team is skilled in the art of copper roofing,
          ensuring your project is completed with precision and care, enhancing
          your home’s beauty and value with minimal disruption.
        </p>
      </div>
      <div className="h-[300px] md:h-[550px] max-w-screen-xl mx-auto pt-10">
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

export default ServicePageCopper;
