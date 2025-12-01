import { bricolage_grotesque } from '@/lib/font'
import Image from 'next/image'
import React from 'react'

function Education() {
    return (
        <div className='pt-10 py-8'>
            <h1 className={`${bricolage_grotesque} text-2xl font-semibold text-center`}>
                Education
            </h1>

            <div className="flex flex-col gap- items-center mt-4">

                <div className="cursor-pointer flex items-center justify-between w-[650px] min-h-[80px] px-6">
                    <div className="flex items-center gap-4 w-[420px]">
                        <Image src="/Yenepoya_University_logo.png" alt="" width={50} height={50} />
                        <div>
                            <div className=" flex justify-between gap-64">
                                <h2 className={`${bricolage_grotesque} text-xl font-semibold whitespace-nowrap`}>

                                    Bachelors of Computer Application
                                </h2>
                                <p className="text-sm text-gray-300 whitespace-nowrap">2022 -2025</p>
                            </div>
                            <p className="text-sm text-gray-400">Yenepoya University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
