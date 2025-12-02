import { bricolage_grotesque } from '@/lib/font'
import React from 'react'

function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "Next.js", "React", "Redux", 
    "TailwindCSS", "Figma", "MongoDB", "PostgreSQL", "Prisma", 
    "Docker", "AWS", "WebSocket", "Turborepo", "GitHub"
  ];

  return (
    <div className='flex flex-col items-center justify-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6'>
      <div className="mb-6 sm:mb-8">
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${bricolage_grotesque} text-center`}>
          Skills
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <button
            key={index}
            className={`
              bg-foreground text-background hover:bg-gray-300 
              cursor-pointer ${bricolage_grotesque} 
              text-xs sm:text-sm rounded-[3px] 
              py-1 sm:py-0.5 px-2 sm:px-3
              transition-colors duration-200
              whitespace-nowrap
            `}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Skills