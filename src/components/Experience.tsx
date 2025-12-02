"use client"
import { bricolage_grotesque } from '@/lib/font'
import React from 'react'
import Image from "next/image"

function Experience() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className={`${bricolage_grotesque} text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10`}>
                Experience
            </h1>

            <div className="flex flex-col  gap-4 sm:gap-5 items-center w-full max-w-4xl mx-auto">

                {/* Experience 1 */}
                <div className="cursor-pointer flex items-center justify-between w-full min-h-[80px] p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/b.png" 
                                alt="Bridgeon logo" 
                                width={40} 
                                height={40} 
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                        </div>
                        <div className="flex items-center justify-between flex-1 min-w-0">
                            <div className="flex flex-col min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                                    <h2 className={`${bricolage_grotesque} text-lg sm:text-xl font-semibold whitespace-nowrap`}>
                                        FullStack Intern
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap sm:ml-4">
                                        02 August - present
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    Bridgeon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience 2 */}
                <div className="cursor-pointer flex items-center justify-between w-full min-h-[80px] p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/p.png" 
                                alt="Phemesoftware logo" 
                                width={40} 
                                height={40} 
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                        </div>
                        <div className="flex items-center justify-between flex-1 min-w-0">
                            <div className="flex flex-col min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                                    <h2 className={`${bricolage_grotesque} text-lg sm:text-xl font-semibold whitespace-nowrap`}>
                                        Group Project
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap sm:ml-4">
                                        6th Sept - 16th Nov 2024
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    Phemesoftware Pvt Ltd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience 3 */}
                <div className="cursor-pointer flex items-center justify-between w-full min-h-[80px] p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/ibm.png" 
                                alt="IBM logo" 
                                width={40} 
                                height={40} 
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                        </div>
                        <div className="flex items-center justify-between flex-1 min-w-0">
                            <div className="flex flex-col min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                                    <h2 className={`${bricolage_grotesque} text-lg sm:text-xl font-semibold whitespace-nowrap`}>
                                        Cybersecurity & Cloud Computing Trainee
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap sm:ml-4">
                                        2022 – 2025
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    IBM Developer Training
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience