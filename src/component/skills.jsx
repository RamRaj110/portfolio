import React from 'react'

function Skills({skills}) {
  return (
    <div id='skills' className='bg-slate-900 '>
       <section className="py-20  px-4" id="skills">
        <h2 className="text-4xl font-bold border-white border-t-2 pt-4 text-white text-center mx-20 mb-16">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-gray-800 rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative space-y-4">
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="text-xl text-white font-semibold">{skill.name}</h3>
                <p className="text-gray-400">
               {skill.description}
                </p> 
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills;
