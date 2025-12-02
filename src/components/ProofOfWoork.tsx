"use client"
import React from 'react'
import Image from "next/image"
import { bricolage_grotesque, inter } from '@/lib/font'
import Link from 'next/link'


function ProofOfWoork() {
    return (
        <div className='py-20 md:py-26'>
            <div>
                <h1 className={`text-center text-3xl font-bold ${bricolage_grotesque}`}>Proof of Work</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:px-0 px-14  justify-center py-12 max-w-[700px] mx-auto ">
                <div className="cursor-pointer flex flex-col gap-3 border border-[#262626] min-h-[300px] w-[340px] rounded-xl px-6 py-6">
                    <div className="">
                        <Image
                            src="/logo1.png"     // ← correct path
                            alt="proof"
                            width={28}
                            height={28}
                            className="object-contain "
                        />
                    </div>
                    <div className="">
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Nuvée Perfume Ecommerce </h1>
                    </div>
                    <div className="">
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>Nuvée is a perfume ecommerce platform featuring product browsing, filtering, cart, wishlist, Razorpay payments, and an admin dashboard.</p>
                    </div>
                    <div className="flex flex-wrap gap-1  ">
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>React</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Typescript</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Razorpay</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Redux</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Nodemailer</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Node.js</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Express.js</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>MongoDB</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Tailwind CSS</span>
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href={"https://nuvee-perfume.niyaf.xyz/"}>
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/global.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Website</button>
                        </Link>
                        <Link href={"https://github.com/mohammedniyafsm/Nuv-e"}>
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/github.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Source</button></Link>
                    </div>
                </div>
                <div className="cursor-pointer flex flex-col gap-3 border border-[#262626] min-h-[300px] w-[340px] rounded-xl px-6 py-6">
                    <div className="">
                        <Image
                            src="/echospace.png"     // ← correct path
                            alt="proof"
                            width={28}
                            height={28}
                            className="object-contain "
                        />
                    </div>
                    <div className="">
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Echo Space </h1>
                    </div>
                    <div className="">
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            Echo Space is a feedback platform to explore events, leave public or anonymous feedback, and engage by liking events and feedback </p>                   </div>
                    <div className="flex flex-wrap gap-1  ">
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Next.js</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Typescript</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Prisma</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>PostgreSQL</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>NextAuth</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Tailwind CSS</span>
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href={"https://echospace.niyaf.xyz/"}>
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/global.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Website</button>
                        </Link>
                        <Link href={"https://github.com/mohammedniyafsm/EchoSpace"}>
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/github.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Source</button></Link>
                    </div>
                </div>
                <div className="cursor-pointer flex flex-col gap-3 border border-[#262626] min-h-[300px] w-[340px] rounded-xl px-6 py-6">
                    <div className="">
                        <Image
                            src="/hushhub.png"     // ← correct path
                            alt="proof"
                            width={40}
                            height={40}
                            className="object-contain "
                        />
                    </div>
                    <div className="">
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Hush Hub </h1>
                    </div>
                    <div className="">
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            The Hush Hub is a chat application that allows users to create & join room and send & receive messages in real-time.                             </p>                   </div>
                    <div className="flex flex-wrap gap-1  ">
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Next.js</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Typescript</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>WebSockets</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Express.js</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Shadcn</span>
                        <span className={`flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${bricolage_grotesque}`}>Tailwind CSS</span>
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href={"https://hushhub.niyaf.xyz/"} >
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/global.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Website</button></Link>
                        <Link href={"https://github.com/mohammedniyafsm/hushhub"}>
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image
                                    src="/github.png"     // ← correct path
                                    alt="proof"
                                    width={10}
                                    height={10}
                                    className="object-contain "
                                />
                                Source</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProofOfWoork
