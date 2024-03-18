import Carousel from "./ImageCarousel";
import React from "react";

const CommercialRoofing1 = "/assets/CommercialRoofing1.webp";
const CommercialRoofing2 = "/assets/CommercialRoofing2.webp";
const CommercialRoofing3 = "/assets/CommercialRoofing3.webp";
const CommercialRoofing4 = "/assets/CommercialRoofing4.webp";
const CommercialRoofing5 = "/assets/CommercialRoofing5.webp";

const slides = [
  CommercialRoofing1,
  CommercialRoofing2,
  CommercialRoofing3,
  CommercialRoofing4,
  CommercialRoofing5,
];

function ServicePageCommercial() {
  return (
    <div className="h-[800px] md:min-h-[950px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem]">
      <div className="h-[400px] md:h-[300px] flex flex-col justify-around">
        <div className="flex w-[250px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
            COMMERCIAL ROOFING
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold ">Protecting Your Business</h1>
          <h2 className="text-3xl">
            Expertise in Large-Scale Roofing Solutions
          </h2>
        </div>
        <p className=" text-zinc-400">
          Start with a no-obligation consultation and comprehensive inspection
          to fully understand your commercial roofing requirements. Receive a
          clear, detailed estimate. Our seasoned team is committed to delivering
          your project with minimal disruption to your business, completing most
          projects swiftly to ensure your operations can continue unhindered. We
          guarantee superior quality and durability, tailored to meet the unique
          demands of commercial properties.
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

export default ServicePageCommercial;
