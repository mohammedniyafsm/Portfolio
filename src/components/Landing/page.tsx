"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Landing() {
    const container = useRef<HTMLDivElement>(null);
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

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(".avatar", {
                scale: 0.8,
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
            })
                .from(
                    ".hero-name",
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-aka",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-bio",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.12,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )
                .from(
                    ".hero-links a",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.2"
                )
                .from(
                    ".home-footer",
                    {
                        y: 15,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.2"
                );
        },
        { scope: container }
    );

    //     {
    //         label: "projects",
    //         href: "/proofofwork",
    //     },
    //     {
    //         label: "about",
    //         href: "/about",
    //     },
    //     {
    //         label: "github",
    //         href: "https://github.com/mohammedniyafsm",
    //         external: true,
    //     },
    //     {
    //         label: "twitter",
    //         href: "https://twitter.com/n1yaf_",
    //         external: true,
    //     },
    //     {
    //         label: "email",
    //         href: "mailto:mohammedniyafsm@gmail.com",
    //     },
    // ];

    return (
        <main
            ref={container}
            className="hero home-page mt-18"
        >
            <div className="hero-content">
                <img
                    src="/dp.png"
                    alt="Mohammed Niyaf"
                    className="avatar mx-auto"
                />

                <h1 className="hero-name">
                    Mohammed Niyaf
                </h1>

                <p className="hero-aka">
                    Fullstack Engineer | Web3 Developer 
                </p>

                <p className="hero-bio">
                    I'm a full-stack engineer who spends a disproportionate amount of time asking, "but how does this actually work?" and then following that question until I have a real answer.
                </p>

                <p className="hero-bio">
                    Most engineers stop at the API boundary. I tend to keep going. That usually means digging into networking, databases, distributed systems, authentication, infrastructure, security, and blockchain systems—not just using them, but understanding the decisions and trade-offs behind them.
                </p>
                <p className="hero-bio">
                    Rather than collecting frameworks and tools, I'm more interested in understanding why they exist in the first place and the problems they're trying to solve.
                </p>
                <p className="hero-bio">
                    Lately I've been exploring Web3 infrastructure, Solana, Rust, cryptography, wallet architecture, key management, and transaction signing. More often than not, a small question turns into a deep technical rabbit hole.
                </p>
                <p className="hero-bio">
                    I'm always building, experimenting, and learning. If you're interested in systems, infrastructure, security, blockchain, or difficult engineering problems, we'll probably get along.
                </p>

                <p className="hero-bio">
                    I'm open to new roles, collaborations, and
                    opportunities. Feel free to reach out at{" "}
                    <a href="mailto:mohammedniyafsm@gmail.com">
                        mohammedniyafsm@gmail.com
                    </a>
                    .
                </p>

                <p className="hero-bio">
                    If you're here, chances are I'd enjoy talking
                    to you — I get nerd-sniped easily, and a
                    message about something that recently
                    fascinated you would honestly make my day.
                </p>


            </div>

            <div className="home-footer flex justify-center py-2 gap-2">
                <span>📍 Bengaluru, India</span>
                <span className="footer-dot mt-2" />
                <span ref={timeRef} className="footer-time" />
            </div>
        </main>
    );
}