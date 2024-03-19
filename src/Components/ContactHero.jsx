import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactHero() {
  const AreaWeService = "/assets/AreaWeService.webp";
  return (
    <div className="h-[1050px] md:h-[650px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
        <div className="h-[150px] flex flex-col justify-around">
          <div className="flex w-[200px] justify-around items-end">
            <div className="text-red-500 font-bold">—</div>
            <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
              INFORMATION
            </h3>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold ">Get In Touch</h1>
          </div>
          <p className=" text-zinc-400">
            We are always just a quick call or email away.
          </p>
        </div>

        <div className="h-[350px] pt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=1234+W+Main+St+Tulsa+OK+74012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <div className="text-4xl px-4 text-white bg-red-500 rounded-2xl border-2 flex items-center justify-center">
                <FaLocationDot></FaLocationDot>
              </div>
              <div className="flex flex-col pl-4">
                <div className="font-bold">Head Office Address</div>
                <div className="text-zinc-400">
                  <div>1234 W Main St</div> <div>Tulsa, OK 74012</div>
                </div>
              </div>
            </div>
          </a>
          <a href="mailto:buisness@a1roofing.com">
            <div className="flex pt-8">
              <div className="text-4xl p-4 text-white bg-red-500 rounded-2xl border-2 flex items-center justify-center">
                <MdEmail></MdEmail>
              </div>
              <div className="flex flex-col pl-4">
                <div className="font-bold">Email Us</div>
                <div className="text-zinc-400">
                  <div>buisness@a1roofing.com</div>
                </div>
              </div>
            </div>
          </a>
          <a href="tel:999-999-9999">
            <div className="flex pt-8">
              <div className="text-4xl p-4 text-white bg-red-500 rounded-2xl border-2 flex items-center justify-center">
                <BsFillTelephoneFill></BsFillTelephoneFill>
              </div>
              <div className="flex flex-col pl-4">
                <div className="font-bold">Call Us</div>
                <div className="text-zinc-400">
                  <div>999-999-9999</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        </div>

        <div className="h-[500px]">
          <div className="h-[100px] flex">
            <div className="flex w-[220px] justify-around items-end pb-6 md:pb-8">
              <div className="text-red-500 font-bold">—</div>
              <h3 className="text-zinc-400 font-bold tracking-widest pt-10 md:pt-0">
                AREA WE SERVICE
              </h3>
            </div>
          </div>
          <div>
            <img
              src={AreaWeService}
              alt="Area We Service"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
