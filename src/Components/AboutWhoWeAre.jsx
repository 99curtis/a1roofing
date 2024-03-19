import { FaHome } from "react-icons/fa";
import { IoIosThunderstorm } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineRoofing } from "react-icons/md";
import React, { useEffect, useState, useRef } from "react";

export default function AboutWhoWeAre() {
    // States for the counters
    const [newRoofs, setNewRoofs] = useState(0);
    const [businessesRoofed, setBusinessesRoofed] = useState(0);
    const [stormRepairs, setStormRepairs] = useState(0);
    const [copperRoofs, setCopperRoofs] = useState(0);
  
    // Ref for the stats section to observe
    const statsRef = useRef(null);
  
    const animateValue = (start, end, duration, onCount) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        onCount(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          onCount(end); // Ensure it ends on the exact target value
        }
      };
      window.requestAnimationFrame(step);
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateValue(0, 850, 2000, setNewRoofs);
              animateValue(0, 120, 2000, setBusinessesRoofed);
              animateValue(0, 240, 2000, setStormRepairs);
              animateValue(0, 70, 2000, setCopperRoofs);
              observer.unobserve(entry.target); // Stop observing once animation starts
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is in view
      );
  
      if (statsRef.current) {
        observer.observe(statsRef.current);
      }
  
      return () => observer.disconnect(); // Cleanup the observer on component unmount
    }, []);

  return (
    <div>
      <div className="bg-zinc-800 h-[860px] md:h-[500px] w-full px-4 flex flex-col overflow-hidden md:px-8 xl:px-[30rem]">
        <div className="h-[500px] md:h-[500px] flex flex-col justify-around">
          <div className="flex w-[180px] justify-around items-end">
            <div className="text-red-500 font-bold">—</div>
            <h3 className="text-zinc-400 font-bold tracking-widest pt-10">
              WHO WE ARE
            </h3>
          </div>
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold ">Crafting Quality Above All</h1>
            <h2 className="text-3xl">Where Expertise Meets Integrity</h2>
          </div>
          <p className=" text-zinc-400">
            Our journey begins with understanding your vision and needs through
            a free, in-depth consultation. We provide clear, honest quotes and a
            plan tailored to you. Our seasoned professionals prioritize seamless
            execution and rapid completion, minimizing disruption to your daily
            life. Above all, we are committed to unmatched craftsmanship and a
            dedication to customer satisfaction, ensuring every project reflects
            our standards of excellence.
          </p>
        </div>

        <div ref={statsRef} className="h-[300px] md:mt-4 w-full max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="bg-red-500 h-[150px] rounded-3xl flex flex-col items-center">
            <div className="h-[40%] text-5xl flex items-center">
              <FaHome></FaHome>
            </div>
            <h1 className="h-[20%] text-3xl font-bold">{newRoofs} +</h1>
            <p className="h-[40%] flex items-center text-sm">
              New Roofs Installed
            </p>
          </div>
          <div className="bg-red-500 h-[150px] rounded-3xl flex flex-col items-center">
            <div className="h-[40%] text-5xl flex items-center">
              <FaBuilding></FaBuilding>
            </div>
            <h1 className="h-[20%] text-3xl font-bold">{businessesRoofed} +</h1>
            <p className="h-[40%] flex items-center text-sm">
              Buisnesses Roofed
            </p>
          </div>
          <div className="bg-red-500 h-[150px] rounded-3xl flex flex-col items-center">
            <div className="h-[40%] text-5xl flex items-center">
              <IoIosThunderstorm></IoIosThunderstorm>
            </div>
            <h1 className="h-[20%] text-3xl font-bold">{stormRepairs} +</h1>
            <p className="h-[40%] flex items-center text-sm">
              Storm Damage Repairs
            </p>
          </div>
          <div className="bg-red-500 h-[150px] rounded-3xl flex flex-col items-center">
            <div className="h-[40%] text-5xl flex items-center">
              <MdOutlineRoofing></MdOutlineRoofing>
            </div>
            <h1 className="h-[20%] text-3xl font-bold">{copperRoofs} +</h1>
            <p className="h-[40%] flex items-center text-sm">
              Copper Roofs Installed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
