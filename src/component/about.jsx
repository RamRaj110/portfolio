import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="/about.jpg"
              alt="About Me"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto md:mx-0 hidden md:block"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 text-gray-300"
          >
            <p className="mb-4">
              Hello! I'm Pawan, a passionate frontend developer with a keen eye
              for creating beautiful and functional web experiences. My journey
              in web development started with a curiosity for how things work on
              the internet, and it has evolved into a full-fledged career that I
              absolutely love.
            </p>
            <p className="mb-4">
              I specialize in building responsive and intuitive user interfaces
              using modern web technologies. My toolkit includes HTML5, CSS3,
              JavaScript, and React, along with various other libraries and
              frameworks that help bring ideas to life on the web.
            </p>
            <p>
              When I'm not coding, you can find me exploring new web design
              trends, contributing to open-source projects, or sharing my
              knowledge with the developer community. I believe in continuous
              learning and always strive to improve my skills to deliver the
              best possible solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};