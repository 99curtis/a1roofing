export default function AboutMessage() {
    const CEOPortrait = "/assets/RoofingCEO.jpg"
  return (
    <div className="h-[1150px] md:h-[850px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem]">
      <div className="h-[600px] md:h-[350px] flex flex-col justify-around">
        <div className="flex w-[240px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
            MESSAGE FROM CEO
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold ">
            Building Trust, One Roof at a Time
          </h1>
          <h2 className="text-3xl">A Commitment to Quality and Integrity</h2>
        </div>
        <p className=" text-zinc-400">
          At A1 ROOFING, we believe in more than just providing a service; we
          believe in building lasting relationships with our clients through
          honesty, integrity, and exceptional workmanship. From the initial
          consultation to the final inspection, every step of our process is
          guided by our commitment to excellence and customer satisfaction. As
          CEO, I personally oversee our projects to ensure they meet our high
          standards and your expectations. Our team, comprised of industry
          veterans, shares a unified goal: to protect and enhance your home with
          minimal disruption to your daily life. Thank you for considering us as
          your roofing partner. We look forward to safeguarding your home for
          years to come.
        </p>
      </div>

      <div className="h-[500px] md:h-[400px] flex justify-center relative mt-4">
        <img
          className="h-[500px] md:h-full md:w-1/2 object-cover border-[10px] border-red-500 rounded-3xl absolute"
          src={CEOPortrait}
          alt="CEO Portrait"
        />
        <div className="absolute bottom-0 right-0 md:right-[25%] z-10 text-white text-4xl font-bold bg-red-500 rounded-tl-3xl rounded-br-3xl pb-2 pr-2 pl-2 pt-1">CEO</div>
      </div>
    </div>
  );
}
