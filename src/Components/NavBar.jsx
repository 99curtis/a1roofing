import React, { useState, useEffect } from "react";
import { TbMenuDeep } from 'react-icons/tb';
import { RiCloseFill } from "react-icons/ri";

function NavBar() {
  const imageUrl = "/assets/RoofingCompanyLogo.webp";

  const [menuOpen, setMenuOpen] = useState(false);
  const [containerStyles, setContainerStyles] = useState({
    transform: 'translateY(-100%)' // Initially positioned above viewport
  });
  const [linkStyles, setLinkStyles] = useState({
    transform: 'translateY(-50px)',
    opacity: 0
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      // Slide down the container first
      setContainerStyles({ transform: 'translateY(0)' }); 

      // After a slight delay, animate the links
      setTimeout(() => {
        setLinkStyles({ transform: 'translateY(0)', opacity: 1 });
      }, 200); // Adjust this delay if needed
    } else {
       // Reset styles
      setContainerStyles({ transform: 'translateY(-100%)' });
      setLinkStyles({ transform: 'translateY(-50px)', opacity: 0 });
    }
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="h-[10vh] w-screen overflow-hidden flex items-center">
        <div className="w-1/3 h-full">
          <img src={imageUrl} alt="Roofing Company Logo" className="h-[15vh] mt-[-2vh] ml-[-2vw]" />
        </div>
        <div className="w-2/3 justify-between hidden md:flex">
          <a href="/about" className="text-2xl font-bold">About</a>
          <a href="/contact" className="text-2xl font-bold">Contact</a>
          <a href="/services" className="text-2xl font-bold">Services</a>
        </div>
        <div className="md:hidden w-2/3 flex justify-end items-center">
          <button className="mr-6" onClick={toggleMenu}>
            {menuOpen ? <RiCloseFill size={36} /> : <TbMenuDeep size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center h-[25svh] w-screen bg-white fixed top-[10vh] left-0 z-50 justify-center transition-transform duration-500"
             style={containerStyles}> 
          <a href="/about" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '0ms' }}
             className="h-1/3 border-b-2 border-t-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            About
          </a>
          <a href="/contact" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '100ms' }}
             className="h-1/3 border-b-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            Contact
          </a>
          <a href="/services" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '150ms' }}
             className="h-1/3 border-b-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            Services
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;