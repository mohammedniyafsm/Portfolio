import { bricolage_grotesque } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function Education() {
    return (
        <div className='pt-10 py-8'>
            <h1 className={`${bricolage_grotesque} text-2xl font-semibold text-center`}>
                Education
            </h1>

            <div className="flex flex-col items-center mt-4">
                <div className="cursor-pointer flex items-center justify-between w-full max-w-2xl sm:max-w-3xl md:w-[650px] min-h-[80px] px-4 sm:px-6">
                    <div className="flex items-center gap-4 w-full md:px-0 px-6">
                        <Image 
                            src="/Yenepoya_University_logo.png" 
                            alt="Yenepoya University logo" 
                            width={50} 
                            height={50} 
                            className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                        />
                        <div className="flex items-center justify-between flex-1 min-w-0">
                            <div className="flex items-center gap-4 min-w-0">
                                <div className="min-w-0">
                                    <h2 className={`${bricolage_grotesque} text-lg sm:text-xl font-semibold whitespace-nowrap truncate`}>
                                        Bachelors of Computer Application
                                    </h2>
                                    <p className="text-sm text-gray-400 whitespace-nowrap truncate">
                                        Yenepoya University
                                    </p>
                                    <p className={`md:hidden block text-sm text-gray-300 whitespace-nowrap ${bricolage_grotesque}  flex-shrink-0`}>2022 - 2025</p>
                                </div>
                            </div>
                            <p  className={`md:block hidden text-sm text-foreground   whitespace-nowrap ml-4 flex-shrink-0 ${bricolage_grotesque}`}>
                                2022 - 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education