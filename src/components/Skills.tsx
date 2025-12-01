import { bricolage_grotesque } from '@/lib/font'
import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col items-center justify-center py-10'>
        <div className=""><h1 className={`text-2xl font-semibold ${bricolage_grotesque}`}>Skills</h1></div>


       <div className="flex flex-wrap py-4 gap-3 w-[690px] justify-center">
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque}  text-sm rounded-[3px] py-0.5 px-2`}>JavaScript</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque}  text-sm rounded-[3px] py-0.5 px-2`}>TypeScript</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Next.js</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>React</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Redux</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>TailwinCSS</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Figma</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>MongoDB</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>PostgreSQL</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Prisma</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Docker</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>AWS</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>WebSocket</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>Turborepo</button>
         <button className={`bg-foreground text-background hover:bg-gray-300 cursor-pointer ${bricolage_grotesque} text-sm rounded-[3px] py-0.5 px-2`}>GitHub</button>
       </div>
    </div>
  )
}

export default Skills
