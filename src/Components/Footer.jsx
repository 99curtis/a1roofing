import { BsFillTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="md:h-[900px] h-[1200px] bg-zinc-800 lg:px-20 xl:px-[38rem]">
      <div className="h-[25%] md:h-[35%] w-full flex flex-col items-center justify-center">
        <div className="h-1/2 w-full flex flex-col justify-center">
          <div className="flex justify-center pt-20">
            <div className="text-white p-4 text-2xl bg-red-500 rounded-full">
              <BsFillTelephoneFill />
            </div>
            <div className="flex flex-col px-2 text-start">
              <div className="text-white text-xl h-1/2">
                Need any Roofing Help?
              </div>
              <a
                href="tel:999-999-9999"
                className="text-white text-2xl h-1/2 font-bold"
              >
                Call Us: 999-999-9999
              </a>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex items-center text-4xl gap-3 text-white border-b-[1px] border-zinc-700">
          <a
            href="http://www.twitter.com"
            target="_blank"
            className="bg-zinc-600 p-3 rounded-md hover:scale-110 hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="http://www.facebook.com"
            target="_blank"
            className="bg-zinc-600 p-3 rounded-md hover:scale-110 hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            className="bg-zinc-600 p-3 rounded-md hover:scale-110 hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="http://www.pintrest.com"
            target="_blank"
            className="bg-zinc-600 p-3 rounded-md hover:scale-110 hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            <FaPinterest />
          </a>
          <a
            href="http://www.youtube.com"
            target="_blank"
            className="bg-zinc-600 p-3 rounded-md hover:scale-110 hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 pt-20 md:px-20 text-white">
        <div className="h-[300px] flex flex-col justify-around">
          <div className="font-bold text-2xl">Our Services</div>
          <div className="h-1 bg-red-500 w-[50px]"></div>
          <div className="flex items-center text-xl text-zinc-400">
            <MdKeyboardArrowRight /> Residential Roofing
          </div>
          <div className="flex items-center text-xl text-zinc-400">
            <MdKeyboardArrowRight /> Commercial Roofing
          </div>
          <div className="flex items-center text-xl text-zinc-400">
            <MdKeyboardArrowRight /> Storm Damage
          </div>
          <div className="flex items-center text-xl text-zinc-400">
            <MdKeyboardArrowRight /> Copper Roofing
          </div>
        </div>
        <div className="pt-20 md:pt-0 h-[450px] flex flex-col justify-around">
          <div className="font-bold text-2xl">Working Hours</div>
          <div className="h-1 bg-red-500 w-[50px]"></div>
          <div className="flex items-center text-xl">
            <div className="">Monday:&nbsp; </div> <div className="text-zinc-400">8:00am - 5:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Tuesday:&nbsp; </div> <div className="text-zinc-400">8:00am - 5:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Wednesday:&nbsp; </div> <div className="text-zinc-400">8:00am - 5:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Thursday:&nbsp; </div> <div className="text-zinc-400">8:00am - 5:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Friday:&nbsp; </div> <div className="text-zinc-400">8:00am - 5:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Saturday:&nbsp; </div> <div className="text-zinc-400">8:00am - 12:00pm</div>
          </div>
          <div className="flex items-center text-xl">
            <div className="">Sunday:&nbsp; </div> <div className="text-zinc-400">Closed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
