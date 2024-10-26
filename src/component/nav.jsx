import React from 'react';

function Nav() {
  return (
    <nav className="flex text-xl  justify-between text-white py-4 my-4">
    <div className=" font-bold">
      <a href="#home" className="portfolio-link">PAWAN</a>
    </div>
    <div className=" text-right font-bold">
      <ul className="flex items-center space-x-4">
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
  </nav>
  
  );
}
export default Nav;