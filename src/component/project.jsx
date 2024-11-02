import React from 'react'
import {ExternalLink } from 'lucide-react'


function Project({projects}) {
  return (
    <div>
        <section  className="py-12 px-4 bg-slate-900 " id="projects">
        {/* <div className="max-w-6xl  border-white border-t-2 mx-auto"> */}
        <div className="max-w-6xl   mx-auto">
          <h2 className="text-4xl font-bold text-white text-center p-4 mb-16">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;
