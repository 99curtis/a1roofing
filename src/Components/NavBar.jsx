import React, { useState, useEffect } from "react";
import { TbMenuDeep } from 'react-icons/tb';
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavBar() {
  const imageUrl = "/assets/RoofingCompanyLogo.webp";

  const [menuOpen, setMenuOpen] = useState(false);
  const [containerStyles, setContainerStyles] = useState({
    transform: 'translateY(-100%)'
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
      setContainerStyles({ transform: 'translateY(0)' }); 

      setTimeout(() => {
        setLinkStyles({ transform: 'translateY(0)', opacity: 1 });
      }, 200); 
    } else {
      setContainerStyles({ transform: 'translateY(-100%)' });
      setLinkStyles({ transform: 'translateY(-50px)', opacity: 0 });
    }
  }, [menuOpen]);

  return (
    <div className="relative overflow-hidden">
      <div className="h-[10vh] w-full overflow-hidden flex items-center">
        <div className="w-1/2 md:w-1/3 h-full">
          <Link to="/">
          <img src={imageUrl} alt="Roofing Company Logo" className="h-[15vh] mt-[-3vh] ml-[-3vw] md:ml-0 " />
          </Link>
        </div>
        <div className="w-1/2 md:w-2/3 justify-around hidden md:flex">
          <Link to="/about" className="text-2xl font-bold">About</Link>
          <Link to="/contact" className="text-2xl font-bold">Contact</Link>
          <Link to="/services" className="text-2xl font-bold">Services</Link>
        </div>
        <div className="md:hidden w-1/2 flex justify-end items-center">
          <button className="mr-6" onClick={toggleMenu}>
            {menuOpen ? <RiCloseFill size={36} /> : <TbMenuDeep size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center h-[25svh] w-full bg-white border-b-2 border-black fixed top-[10vh] left-0 z-50 justify-center transition-transform duration-500 overflow-hidden"
             style={containerStyles}> 
          <Link to="/about" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '0ms' }}
             className="h-1/3 border-t-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            About
          </Link>
          <Link to="/contact" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '50ms' }}
             className="h-1/3 border-t-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            Contact
          </Link>
          <Link to="/services" 
             style={{ ...linkStyles, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', transitionDelay: '100ms' }}
             className="h-1/3 border-t-2 border-black w-full text-2xl font-bold flex items-center justify-center">
            Services
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;