import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Carousel({ children }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr => curr === 0 ? children.length - 1 : curr - 1);
  const next = () => setCurr(curr => curr === children.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurr(curr => (curr === children.length - 1 ? 0 : curr + 1));
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [children.length]); // Dependency array, effect runs when the number of slides changes

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all duration-300"
        >
          <BsChevronLeft size={32} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all duration-300"
        >
          <BsChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
            {children.map((_, index) => (
                <div key={index} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === index ? "p-2" : "bg-opacity-50"}`}>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
