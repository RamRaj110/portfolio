// import React from 'react';

// function Nav() {
//   return (
//     <nav className="flex text-xl  justify-between text-white py-4 my-4">
//     <div className=" font-bold">
//       <a href="#home" className="portfolio-link">PAWAN</a>
//     </div>
//     <div className=" text-right font-bold">
//       <ul className="flex items-center space-x-4">
//         <li>
//           <a href="#home" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#skills" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#skills" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
//             Project
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
  
//   );
// }
// export default Nav;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-transparent">
      <div className="flex items-center justify-between text-white py-4 my-4">
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
          <ul className="flex items-center space-x-4 text-xl font-bold">
            <li>
              <a href="#home" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
                Skills
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link hover:text-gray-900 transition duration-300 ease-in-out">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[88px] left-0 right-0 bg-black/90">
          <ul className="flex flex-col items-center space-y-4 text-xl font-bold py-4">
            <li>
              <a 
                href="#home" 
                className="nav-link hover:text-gray-900 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="nav-link hover:text-gray-900 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="nav-link hover:text-gray-900 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="nav-link hover:text-gray-900 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Project
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-link hover:text-gray-900 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;