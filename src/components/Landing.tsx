"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/button";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import Link from "next/link";

export default function Landing() {
    useGSAP(() => {
        gsap.from("#name > *", {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.2,
        });
    }, []);

    return (
        <div className="relative top-0  md:top-0 flex  md:h-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
            {/* Grid background overlay */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                    "scale-125 md:scale-100"
                )}
            />

            {/* Spotlight - Responsive positioning */}
            <Spotlight
                className="-top-20 left-[-10%] md:-top-40 md:left-0 lg:-top-20 lg:left-60"
                fill="white"
            />

            {/* Content layer */}
            <div id="name" className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-6 md:pt-20 lg:pt-0">
                <h1 className="bg-opacity-50 bg-gradient-to-b md:pt-0 pt-32 from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                    Hi, I'm Mohammed Niyaf
                </h1>
                
                {/* Desktop version of paragraph */}
                <div className="hidden md:block">
                    <p className="mx-auto mt-8 max-w-3xl text-center text-lg font-normal text-neutral-300">
                        Passionate Full-Stack Developer building dynamic web apps. Curious by nature,  exploring <br /> new tech, 
                        DevOps, cloud, and ethical hacking. 
                        Always up for challenges and <br /> learning how things work.
                        Let's create something amazing!
                    </p>
                </div>

                {/* Tablet version of paragraph */}
                <div className="hidden sm:block md:hidden">
                    <p className="mx-auto mt-6 max-w-[90%] text-center text-base font-normal text-neutral-300">
                        Passionate Full-Stack Developer building dynamic web apps. Curious by nature, exploring new tech, 
                        DevOps, cloud, and ethical hacking. Always up for challenges and learning.
                    </p>
                </div>

                {/* Mobile version of paragraph */}
                <div className="block sm:hidden pt-">
                    <p className="mx-auto mt-4 max-w-[95%] text-center text-sm font-normal text-neutral-300 leading-relaxed">
                        Passionate Full-Stack Developer building dynamic web apps. 
                        Curious by nature, exploring new tech, DevOps, cloud & ethical hacking.
                    </p>
                    <p className="mx-auto mt-3 max-w-[95%] text-center text-sm font-normal text-neutral-400">
                        Always learning, always building. Let's create something great!
                    </p>
                </div>

                {/* Fixed Button Section */}
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:mt-12 md:gap-6">
                    <Link 
                        href="https://cal.com/mohammed-niyaf-s.m-v01mfl/15min" 
                        className="inline-flex w-full max-w-[200px] sm:w-auto sm:max-w-none"
                    >
                        <Button className="w-full cursor-pointer px-6 py-4 text-sm sm:px-8 sm:py-4 sm:text-base md:px-10">
                            Book a Meet
                        </Button>
                    </Link>
                    <Button className="w-full max-w-[200px] cursor-pointer px-6 py-4 text-sm sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-base md:px-10">
                        Get in Touch
                    </Button>
                </div>

                {/* Additional mobile-only content */}
                <div className="mt-8 flex justify-center sm:hidden">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex-col items-center hidden md:flex">
                <span className="mb-2 text-xs text-neutral-400">Scroll</span>
                <div className="h-6 w-px bg-neutral-400" />
            </div>
        </div>
    );
}