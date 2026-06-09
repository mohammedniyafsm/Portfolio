"use client"
import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import { bricolage_grotesque, inter } from '@/lib/font'
import Link from 'next/link'
import Navbar from '@/components/NavbarNew'

const cardClass = `cursor-pointer flex flex-col gap-3 
  border border-[#1e2d45] 
  bg-[#0d1829]/80 
  backdrop-blur-sm
  hover:border-[#2a4a7f] 
  hover:bg-[#0f1f35]/90
  transition-all duration-300
  min-h-[300px] w-[340px] rounded-xl px-6 py-6`

const badgeClass = (font: string) =>
    `flex items-center border border-[#edeef0] text-[#edeef0] rounded-[3.8px] px-1 py-0.5 text-[10px] hover:bg-[#edeef0] hover:text-background ${font}`

function page() {

    const timeRef = useRef<HTMLSpanElement>(null);
    

    useEffect(() => {
        const updateClock = () => {
            if (!timeRef.current) return;

            timeRef.current.textContent =
                new Date().toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                }) + " IST";
        };

        updateClock();

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='py-20 md:py-8 relative z-10'>
            <Navbar/>
            <div className='mt-20'>
                <h1 style={{ color: '#f1f5f9' }} className="text-center text-3xl font-bold">
                    Proof of Work
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:px-0 px-14 justify-center py-12 max-w-[700px] mx-auto">

                {/* Nuvée Perfume Ecommerce */}
                <div className={cardClass}>
                    <div>
                        <Image src="/logo1.png" alt="proof" width={28} height={28} className="object-contain" />
                    </div>
                    <div>
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Nuvée Perfume Ecommerce</h1>
                    </div>
                    <div>
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            Nuvée is a perfume ecommerce platform featuring product browsing, filtering, cart, wishlist, Razorpay payments, and an admin dashboard.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {['React', 'Typescript', 'Razorpay', 'Redux', 'Nodemailer', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map(t => (
                            <span key={t} className={badgeClass(bricolage_grotesque)}>{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href="https://nuvee-perfume.niyaf.xyz/">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/global.png" alt="website" width={10} height={10} className="object-contain" />
                                Website
                            </button>
                        </Link>
                        <Link href="https://github.com/mohammedniyafsm/Nuv-e">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/github.png" alt="github" width={10} height={10} className="object-contain" />
                                Source
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Echo Space */}
                <div className={cardClass}>
                    <div>
                        <Image src="/echospace.png" alt="proof" width={28} height={28} className="object-contain" />
                    </div>
                    <div>
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Echo Space</h1>
                    </div>
                    <div>
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            Echo Space is a feedback platform to explore events, leave public or anonymous feedback, and engage by liking events and feedback.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {['Next.js', 'Typescript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'].map(t => (
                            <span key={t} className={badgeClass(bricolage_grotesque)}>{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href="https://echospace.niyaf.xyz/">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/global.png" alt="website" width={10} height={10} className="object-contain" />
                                Website
                            </button>
                        </Link>
                        <Link href="https://github.com/mohammedniyafsm/EchoSpace">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/github.png" alt="github" width={10} height={10} className="object-contain" />
                                Source
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Hush Hub */}
                <div className={cardClass}>
                    <div>
                        <Image src="/hushhub.png" alt="proof" width={40} height={40} className="object-contain" />
                    </div>
                    <div>
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Hush Hub</h1>
                    </div>
                    <div>
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            The Hush Hub is a chat application that allows users to create & join room and send & receive messages in real-time.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {['Next.js', 'Typescript', 'WebSockets', 'Express.js', 'Shadcn', 'Tailwind CSS'].map(t => (
                            <span key={t} className={badgeClass(bricolage_grotesque)}>{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href="https://hushhub.niyaf.xyz/">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/global.png" alt="website" width={10} height={10} className="object-contain" />
                                Website
                            </button>
                        </Link>
                        <Link href="https://github.com/mohammedniyafsm/hushhub">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/github.png" alt="github" width={10} height={10} className="object-contain" />
                                Source
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Card Rush */}
                <div className={cardClass}>
                    <div>
                        <Image src="/cardRush.png" alt="proof" width={40} height={40} className="object-contain" />
                    </div>
                    <div>
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Card Rush</h1>
                    </div>
                    <div>
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            Card Rush is a real-time card game that allows users to claim cards and earn points with cooldown rules in a competitive arena.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {['React js', 'Typescript', 'Node js', 'WebSockets', 'Express.js', 'MongoDB', 'Tailwind CSS'].map(t => (
                            <span key={t} className={badgeClass(bricolage_grotesque)}>{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href="https://cardhunt.niyaf.xyz/">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/global.png" alt="website" width={10} height={10} className="object-contain" />
                                Website
                            </button>
                        </Link>
                        <Link href="https://github.com/mohammedniyafsm/Inboxkit">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/github.png" alt="github" width={10} height={10} className="object-contain" />
                                Source
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Townify */}
                <div className={cardClass}>
                    <div>
                        <h1 className={`${bricolage_grotesque} font-bold text-lg`}>Townify ( 2D metaverse )</h1>
                    </div>
                    <div>
                        <p className={`${inter} text-sm font-medium leading-4.5 text-[#D1D5DB]`}>
                            Townify is a 2D metaverse platform that allows users to explore virtual spaces, interact with others, and engage in real-time social experiences.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {['React js', 'Typescript', 'Phaser', 'Node js', 'Express.js', 'WebSockets', 'WebRTC', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Docker', 'Oauth', 'Pub/Sub', 'Nodemailer', 'Tailwind CSS', 'TurboRepo'].map(t => (
                            <span key={t} className={badgeClass(bricolage_grotesque)}>{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-1 pt-4">
                        <Link href="https://github.com/mohammedniyafsm/Townify">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/global.png" alt="website" width={10} height={10} className="object-contain" />
                                Coming Soon
                            </button>
                        </Link>
                        <Link href="https://github.com/mohammedniyafsm/Townify">
                            <button className={`bg-foreground text-background rounded-[3px] text-[10px] px-2 py-1 flex gap-2 ${inter}`}>
                                <Image src="/github.png" alt="github" width={10} height={10} className="object-contain" />
                                Source
                            </button>
                        </Link>
                    </div>
                </div>

            </div>


            <div className="home-footer flex justify-center  gap-2">
                <span>📍 Bengaluru, India</span>
                <span className="footer-dot mt-2" />
                <span ref={timeRef} className="footer-time" />
            </div>

        </div>
    )
}

export default page