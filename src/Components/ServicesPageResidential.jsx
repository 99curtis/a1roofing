import Carousel from "./ImageCarousel";
import React from "react";

const ResidentialRoofing1 = "/assets/ResidentialRoofing1.webp";
const ResidentialRoofing2 = "/assets/ResidentialRoofing2.webp";
const ResidentialRoofing3 = "/assets/ResidentialRoofing3.webp";
const ResidentialRoofing4 = "/assets/ResidentialRoofing4.webp";
const ResidentialRoofing5 = "/assets/ResidentialRoofing5.webp";

const slides = [
  ResidentialRoofing1,
  ResidentialRoofing2,
  ResidentialRoofing3,
  ResidentialRoofing4,
  ResidentialRoofing5,
];

function ServicePageResidential() {
  return (
    <div className="h-[800px] md:min-h-[950px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem] bg-zinc-800">
      <div className="h-[400px] md:h-[300px] flex flex-col justify-around">
        <div className="flex w-[250px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
            RESIDENTIAL ROOFING
          </h3>
        </div>
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-3xl font-bold ">Your Home, Our Priority</h1>
          <h2 className="text-3xl">Dedicated to Excellence in Every Shingle</h2>
        </div>
        <p className=" text-zinc-400">
          Begin with a complimentary consultation and thorough inspection to
          ensure every aspect of your roofing needs is understood. Expect a
          straightforward, transparent quote. Our expert team is dedicated to
          executing your project efficiently, completing most jobs within a
          single day to minimize inconvenience, all while adhering to the
          highest standards of craftsmanship and customer care.
        </p>
      </div>
      <div className="h-[300px] max-w-screen-xl mx-auto pt-10">
        <Carousel>
          {slides.map((slide, index) => (
            <img className="h-[300px] md:h-[550px]"
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

export default ServicePageResidential;
