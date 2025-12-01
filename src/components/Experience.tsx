"use client"
import { bricolage_grotesque } from '@/lib/font'
import React from 'react'
import Image from "next/image"

function Experience() {
    return (
        <div>
            <h1 className={`${bricolage_grotesque} text-2xl font-semibold text-center`}>
                Experience
            </h1>

            <div className="flex flex-col gap-1 items-center mt-10">

                {/* Experience 1 */}
                <div className="cursor-pointer flex items-center justify-between w-[650px] min-h-[80px] px-6">
                    <div className="flex items-center gap-4 w-[420px]">
                        <Image src="/b.png" alt="" width={40} height={40} />
                        <div>
                            <div className=" flex justify-between gap-64">
                                <h2 className={`${bricolage_grotesque} text-xl font-semibold whitespace-nowrap`}>
                                    FullStack Intern
                                </h2>
                                <p className="text-sm text-gray-300 whitespace-nowrap">02 August - present</p>
                            </div>
                            <p className="text-sm text-gray-400">Bridgeon</p>
                        </div>
                    </div>
                </div>

                {/* Experience 2 */}
                <div className="cursor-pointer flex items-center justify-between w-[650px] min-h-[80px] px-6">
                    <div className="flex items-center gap-4 w-[420px]">
                        <Image src="/p.png" alt="" width={40} height={40} />
                        <div>
                            <div className="flex justify-between gap-60">
                                <h2 className={`${bricolage_grotesque} text-xl font-semibold whitespace-nowrap`}>
                                    Group Project
                                </h2>
                                <p className="text-sm text-gray-300 whitespace-nowrap">6th Sept - 16th Nov 2024</p>

                            </div>
                            <p className="text-sm text-gray-400">Phemesoftware Pvt Ltd</p>
                        </div>
                    </div>
                </div>

                {/* Experience 3 */}
                <div className="cursor-pointer flex items-center justify-between w-[650px] min-h-[80px] px-6">
                    <div className="flex items-center gap-4 w-[420px]">
                        <Image src="/ibm.png" alt="" width={40} height={40} />
                        <div>
                            <div className="flex justify-between gap-14">
                            <h2 className={`${bricolage_grotesque} text-xl font-semibold whitespace-nowrap`}>
                                Cybersecurity & Cloud Computing Trainee
                            </h2>
                                <p className="text-sm text-gray-300 whitespace-nowrap">2022 – 2025</p>

                            </div>
                            <p className="text-sm text-gray-400">IBM Developer Training</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
