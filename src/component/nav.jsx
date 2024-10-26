

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-4/5  mx-4">
      <div className="flex items-center justify-between text-white py-2 my-4">
        <div className="text-xl font-bold">
          <a href="#home" className="portfolio-link">PAWAN</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center text-white space-x-4 text-xl font-bold">
            <li>
              <a href="#home" className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out">
                Skills
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link  text-white hover:text-gray-600 transition duration-300 ease-in-out">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 text-xl font-bold bg-black/90 py-4 absolute w-full">
          <li>
            <a 
              href="#home" 
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Project
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;