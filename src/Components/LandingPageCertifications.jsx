function LandingPageCertifications() {
  const GAF = "/assets/GAF.webp";
  const CertainTeed = "/assets/certainteed.webp";
  const OwensCorning = "/assets/owens.webp";
  const OCIB = "/assets/ocib.webp";
  return (
    <div className="h-[150svh] p-4">
      <div className="h-[400px] md:h-[300px] flex flex-col justify-around">
        <div className="flex w-[290px] justify-around items-end">
          <div className="text-red-500 font-bold">—</div>
          <div className="text-zinc-400 font-bold tracking-widest pt-10">
            OUR QUALIFICATIONS
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold ">Elevating Standards</div>
          <div className="text-3xl">Ensuring Excellence</div>
        </div>
        <div className=" text-zinc-400">
          Our team is expertly trained and holds top industry certifications,
          including the Oklahoma Roofing Contractor License, CertainTeed Shingle
          Master™, GAF Master Elite® Contractor, and Owens Corning Roofing
          Preferred Contractor status. Our NRCA membership underscores our
          commitment to excellence, safety, and professionalism. We guarantee
          quality service, honest pricing, and reliability.
        </div>
      </div>

      <div className="h-[400px] grid grid-cols-2 md:grid-cols-4 pt-10">
        <div
          className="h-[170px] md:h-[250px] "
          style={{
            backgroundImage: `url(${GAF})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[170px] md:h-[250px]"
          style={{
            backgroundImage: `url(${OwensCorning})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[170px] md:h-[250px]"
          style={{
            backgroundImage: `url(${OCIB})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[170px] md:h-[250px]"
          style={{
            backgroundImage: `url(${CertainTeed})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LandingPageCertifications;
