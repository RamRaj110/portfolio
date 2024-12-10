"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Send, Download } from "lucide-react";
import Nav from "./Component/Nav";
import Animation from "./Component/Animation";
import { About } from "./Component/about";
import Project from "./Component/project";
import Contact from "./Component/contact";
import ScrollAnimation from './Component/ScrollAnimation';
import "./index.css";
import Skills from "./component/Skills";

// Constellation Background Component
const ConstellationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Set actual pixel size
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;

      // Set display size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = 200;
    let mouse = { x: 0, y: 0 };

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    function drawStar(star) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawConstellation() {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function connectMouseToStars() {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        const dx = mouse.x - stars[i].x;
        const dy = mouse.y - stars[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(stars[i].x, stars[i].y);
          ctx.stroke();
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        drawStar(star);
      });

      drawConstellation();
      connectMouseToStars();

      requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

// Move the handleResumeDownload function outside the component
const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "Resume.pdf";
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Main Portfolio Component
const Portfolio = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["React Developer", "Web Developer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const skills = [
    {
      name: "React",
      icon: "⚛️",
      description:
        "Experienced in building dynamic and interactive UIs using React. Familiar with hooks, component-based architecture, and state management for creating efficient and responsive web applications.",
    },
    {
      name: "JavaScript",
      icon: "📜",
      description:
        "Solid foundation in JavaScript, focusing on logic building, DOM manipulation, and working with modern ES6+ syntax. Continuously enhancing my skills in core programming concepts and problem-solving.",
    },
    {
      name: "HTML5",
      icon: "🌐",
      description:
        "Skilled in writing clean, semantic HTML5 code for creating structured, accessible web pages. I ensure a strong foundation for all my projects through organized markup.",
    },
    {
      name: "CSS3",
      icon: "🎨",
      description:
        "Proficient in CSS3 for styling and layout design, including flexbox, grid, and animations. I pay attention to detail in creating visually appealing and responsive interfaces.",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      description:
        "Experienced with Tailwind CSS for quickly building custom designs. It allows me to efficiently style projects with a utility-first approach and focus on a clean, responsive layout.",
    },
    {
      name: "Git",
      icon: "📊",
      description:
        "Comfortable with Git for version control, ensuring smooth collaboration and maintaining project history. I use it to manage code changes and track progress effectively.",
    },
    {
      name: "Responsive Design",
      icon: "📱",
      description:
        "Focused on building mobile-friendly applications that look and work well across all devices. Proficient in using media queries and flexible layouts to create seamless experiences on any screen size.",
    },
    {
      name: "RESTful APIs",
      icon: "🔌",
      description:
        "Able to integrate and work with RESTful APIs to fetch, send, and display data dynamically. I’m familiar with handling asynchronous operations and managing data with APIs in frontend applications.",
    },
  ];

  const projects = [
    {
      title: "Portfolio",
      description:
        "A dynamic and engaging portfolio showcasing my journey as a frontend developer, highlighting my skills in React, responsive design, and interactive web applications.",
      tech: ["React", "TaiwindCSS"],
      image: "/portfolio.png",
      link: "#home",
    },
    {
      title: "Currency Converter",
      description:
      "Build a modern currency conversion application using React and Tailwind CSS. The app dynamically putlls real-time exchange rate data through an API , allowing users to accurately convert currencies between multiple options.Design an interface that is responsive, clean, and easy to use. Optimized for usability and accessibility.",
      tech: ["VanilaJs", "Python", "Flask", "CSS"],
      image: "/Currency_Converter.png",
      link: "https://gitlab.com/edubot3/Chatbot",
    },
    {
      title: "WeatherApp",
      description:
        "Responsive weather app displaying real-time forecasts using API integration, with a sleek and intuitive interface.",
      tech: ["VanilaJs", "OpenWeather API", "CSS"],
      image: "/weather.png",
      link: "https://ramraj110.github.io/Weather-App/",
    },
  ];

  return (
    <div>
      <ConstellationBackground />
      <Animation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center px-4 py-16 sm:py-20 md:py-0">
        <div className="container mx-auto z-10">
          <Nav />
          <div className="flex flex-col md:flex-row items-center justify-between mt-16 md:mt-4">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
              >
                Hi,
                <br />
                I'm <span className="text-blue-600">Developer</span>
                <br />
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  {roles[roleIndex]}
                </motion.span>
              </motion.h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mt-6 sm:mt-8">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Hire Me</span>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full sm:w-auto bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Resume</span>
                </motion.button>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center md:justify-start space-x-6 text-blue-500 mt-6 px-4 md:mt-8"
              >
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/in/pawan-kumar-b1427a244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-4 first:ml-0"
                  >
                    <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://github.com/RamRaj110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
            >
              <div className="relative w-40 h-40 xs:w-4~8 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping-slow" />
                <div className="absolute inset-2 rounded-full bg-purple-500/20 animate-spin-slow" />

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-lg animate-pulse" />

                <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-spin-slow" />

                <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full blur-sm animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full blur-sm animate-pulse" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30 p-1">
                  <img
                    src="/heropic.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <ScrollAnimation>
          <Skills skills={skills} />
        </ScrollAnimation>
      </section>

      {/* Projects Section */}
      <section id="project">
        <ScrollAnimation>
          <Project projects={projects} />
        </ScrollAnimation>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
      </section>
      {/* Footer */}
      <footer className="bg-gray-950 py-4 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              ©2024 PAWAN. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/pawan-kumar-b1427a244/"
                target="_blank"
                className="text-gray-400 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/RamRaj110"
                target="_blank"
                className="text-gray-400 hover:text-blue-900  transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;