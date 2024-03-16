import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";

function LandingPageOurProcess() {
  return (
    <div className="h-[150svh] px-4">
      <div className="h-[400px]  flex flex-col justify-around">
        <div className="flex w-1/2 justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <div className="text-zinc-400 font-bold tracking-widest pt-10">
            OUR PROCESS
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold ">We're Commited to</div>
          <div className="text-3xl">Quality Service and Honest Pricing</div>
        </div>
        <div className=" text-zinc-400">
          We start with a free consultation and detailed inspection, followed by
          a transparent quote. Our team commits to completing all projects with
          precision within a day, ensuring minimal disruption and upholding the
          highest standards of service.
        </div>
      </div>

      <div className="h-[250px] flex">
        <div className="w-1/3 h-full flex justify-center pr-6 items-center pb-8">
          <div className="text-5xl bg-red-100 p-4 rounded-full">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col py-3">
          <div className="font-bold text-xl pb-4">Detailed Consultation</div>
          <div className="text-zinc-400">
            Our process begins with a comprehensive evaluation of your roof's
            condition, followed by providing a clear and detailed quotation. We
            ensure all your inquiries are addressed thoroughly.
          </div>
        </div>
      </div>
      <div className="h-[250px] flex">
        <div className="w-1/3 h-full flex justify-center pr-6 items-center pb-8">
          <div className="text-5xl bg-red-100 p-4 rounded-full">
            <FaPeopleRoof />
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col py-3">
          <div className="font-bold text-xl pb-4">Fast Quality Service</div>
          <div className="text-zinc-400">
            Leveraging our expertise and efficient practices, we commit to
            completing all necessary work within a single day, ensuring minimal
            disruption to your routine. Rest assured, we address all queries
            with the utmost attention to detail.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageOurProcess;