// import React from 'react'

// function About() {
//   return (
//     <div>
//        <section className='bg-gray-900' >
//         <div className="max-w-6xl h-screen bg-gray-900 mx-auto border-white border-t-2">
//           <h2 className="text-4xl font-bold pt-6 text-white text-center mb-12">About Me</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-300">
//               Hello! I’m a passionate frontend developer and third-year Electronics and Communication Engineering student. 
//               With skills in HTML, CSS, React, and Tailwind, I focus on creating intuitive, 
//               responsive web applications that merge functionality with a great user experience.
//               </p>
//               <p className="text-lg text-gray-300">
//               As a developer, I’m always eager to learn, adapt, and find creative solutions. 
//               When I’m not coding, you can find me exploring new ways to improve my skills and grow as a software professional. Let’s connect!
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-semibold mb-2 text-white">Name:</h3>
//                   <p className="text-gray-400 ">Pawan Kumar</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2 text-white">Location:</h3>
//                   <p className="text-gray-400">Patna, Bihar</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2 text-white">Experience:</h3>
//                   <p className="text-gray-400">1+ Years</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2 text-white">Email:</h3>
//                   <p className="text-gray-400">pawansham578@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute  inset-0 bg-gradient-to-r rounded-lg blur opacity-70" />
//               <img
//                 src="#"
//                 alt="About Me"
//                 className="relative rounded-lg w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
        
//         </section>
   
//    </div>
//   )
// }

// export { About };

import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className='bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className="max-w-6xl w-full bg-gray-900 mx-auto border-white border-t-2 py-12 px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Image Container with Animation */}
          <motion.div 
            className="relative w-64 h-64 mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-70" />
            <img
              src="../public/heropic.png"
              alt="About Me"
              className="relative rounded-full w-full h-full object-cover border-4 border-white"
            />
          </motion.div>

          {/* Title with Animation */}
          <motion.h2 
            className="text-4xl font-bold text-white text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h2>

          {/* Text Content with Animation */}
          <motion.div 
            className="max-w-2xl space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg text-gray-300 text-center">
              Hello! I'm a passionate frontend developer and third-year Electronics and Communication Engineering student. 
              With skills in HTML, CSS, React, and Tailwind, I focus on creating intuitive, 
              responsive web applications that merge functionality with a great user experience.
            </p>
            <p className="text-lg text-gray-300 text-center">
              As a developer, I'm always eager to learn, adapt, and find creative solutions. 
              When I'm not coding, you can find me exploring new ways to improve my skills and grow as a software professional. Let's connect!
            </p>
          </motion.div>

          {/* Info Grid with Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Name:</h3>
              <p className="text-gray-400">Pawan Kumar</p>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Location:</h3>
              <p className="text-gray-400">Patna, Bihar</p>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Experience:</h3>
              <p className="text-gray-400">1+ Years</p>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Email:</h3>
              <p className="text-gray-400">pawansham578@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { About };