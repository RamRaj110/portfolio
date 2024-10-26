import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 w-4/5 mx-4">
      <div className="flex items-center justify-between text-white py-2 my-4">
        <div className="text-xl font-bold">
          <button 
            onClick={() => scrollToSection('home')} 
            className="portfolio-link"
          >
            PAWAN
          </button>
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
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('project')}
                className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              >
                Project
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 text-xl font-bold bg-black/90 py-4 absolute w-full">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('project')}
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Project
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;