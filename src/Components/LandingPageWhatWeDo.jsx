import { FaHome } from "react-icons/fa";
import { IoIosThunderstorm } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineRoofing } from "react-icons/md";

function LandingPageWhatWeDo() {
  const CommercialRoofing = "/assets/commercialroofing.webp";
  const ResidentialRoofing = "/assets/residentialroofing.webp";
  const StormDamage = "/assets/stormdamage.webp";
  const CooperRoofing = "/assets/copperroofing.webp";

  return (
    <div className="h-[250svh] md:h-[75svh] min-h-[1000px] bg-zinc-800 text-white px-4 md:px-8">
      <div className="pt-6 h-[450px] md:h-[300px] flex flex-col justify-between">
        <div className="flex w-[200px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <div className="text-zinc-400 font-bold tracking-widest pt-10">
            WHAT WE DO
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold ">
            Comprehensive Roofing Solutions
          </div>
          <div className="text-3xl">Expertise Across Every Aspect</div>
        </div>
        <div className=" text-zinc-400">
          Explore our wide array of services to discover how we can address your
          roofing requirements. With over three decades of industry presence,
          our expertise encompasses every facet of roofing projects, ensuring
          your needs are met with the highest standards of quality and
          professionalism.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
        <div className="h-[250px] flex bg-white hover:scale-105 md:hover:scale-110 transition duration-200 group">
          <div
            className="h-full w-3/5 bg-cover z-10 bg-center"
            style={{
              backgroundImage: `url(${ResidentialRoofing})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "ellipse(84% 90% at 15% 48%)",
            }}
          ></div>
          <div className="flex flex-col w-2/5 px-2 items-center justify-between ">
            <div className="text-2xl md:text-3xl font-bold text-end text-black z-0 pb-2">
              Residential Roofing
            </div>
            <div className="text-5xl bg-red-100 group-hover:bg-red-400 transition-colors duration-200 p-4 w-min rounded-full items-end">
              <FaHome className="text-black" />
            </div>
            <div className="text-black font-bold text-end w-full cursor-pointer">
              Read More{">>"}
            </div>
          </div>
        </div>

        <div className="h-[250px] flex group bg-white hover:scale-105 md:hover:scale-110  transition duration-200">
          <div className="flex flex-col w-2/5 px-2 items-center justify-between ">
            <div className="text-2xl md:text-3xl font-bold text-start text-black z-0 pb-2">
              Commercial Roofing
            </div>
            <div className="text-5xl bg-red-100 group-hover:bg-red-400 transition-colors duration-200 p-4 w-min rounded-full items-end">
              <FaBuilding className="text-black" />
            </div>
            <div className="text-black font-bold text-start w-full cursor-pointer">
              Read More{">>"}
            </div>
          </div>
          <div
            className="h-full w-3/5 bg-cover z-10 bg-center"
            style={{
              backgroundImage: `url(${CommercialRoofing})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "ellipse(84% 90% at 85% 48%)",
            }}
          ></div>
        </div>

        <div className="h-[250px] group flex bg-white hover:scale-105 md:hover:scale-110  transition duration-200">
          <div
            className="h-full w-3/5 bg-cover z-10 bg-center"
            style={{
              backgroundImage: `url(${StormDamage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "ellipse(84% 90% at 15% 48%)",
            }}
          ></div>
          <div className="flex flex-col w-2/5 px-2 items-center justify-between ">
            <div className="text-2xl md:text-3xl font-bold text-end text-black z-0 pb-2">
              Storm Damage
            </div>
            <div className="text-5xl bg-red-100 group-hover:bg-red-400 transition-colors duration-200 p-4 w-min rounded-full items-end">
              <IoIosThunderstorm className="text-black" />
            </div>
            <div className="text-black font-bold text-end w-full cursor-pointer">
              Read More{">>"}
            </div>
          </div>
        </div>
        <div className="h-[250px] flex group bg-white hover:scale-105 md:hover:scale-110 transition duration-200">
          <div className="flex flex-col w-2/5 px-2 items-center justify-between ">
            <div className="text-2xl md:text-3xl font-bold text-start text-black z-0 pb-2">
              Copper Roofing
            </div>
            <div className="text-5xl bg-red-100 group-hover:bg-red-400 transition-colors duration-200 p-4 w-min rounded-full items-end">
              <MdOutlineRoofing className="text-black" />
            </div>
            <div className="text-black font-bold text-start w-full cursor-pointer">
              Read More{">>"}
            </div>
          </div>
          <div
            className="h-full w-3/5 bg-cover z-10 bg-center"
            style={{
              backgroundImage: `url(${CooperRoofing})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "ellipse(84% 90% at 85% 48%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageWhatWeDo;
