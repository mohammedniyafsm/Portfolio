"use client"
import { bricolage_grotesque } from '@/lib/font'
import Image from "next/image"

const experiences = [
    {
        logo: "/tvara.jpg",
        alt: "Tvara",
        role: "FullStack Developer",
        company: "Tvara",
        period: "Feb 2026 - May 2026",
    },
    {
        logo: "/b.png",
        alt: "Bridgeon logo",
        role: "FullStack Intern",
        company: "Bridgeon",
        period: "Aug 2025 - Feb 2026",
    },
    {
        logo: "/p.png",
        alt: "Phemesoftware logo",
        role: "Group Project",
        company: "Phemesoftware Pvt Ltd",
        period: "Sept 2024 - Nov 2024",
    },
    {
        logo: "/ibm.png",
        alt: "IBM logo",
        role: "Cybersecurity & Cloud Computing Trainee",
        company: "IBM Developer Training",
        period: "2022 – 2025",
    },
]

export default function Experience() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className={`${bricolage_grotesque} text-2xl sm:text-3xl font-medium text-center mb-4 sm:mb-6`}>
                Experience
            </h1>

            <div className="flex flex-col gap-2 sm:gap-0 items-center w-full max-w-3xl mx-auto">
                {experiences.map((exp) => (
                    <div
                        key={exp.company}
                        className="cursor-pointer flex items-center w-full min-h-[80px] p-4 sm:p-6 
                        hover:bg-gray-100/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
                    >
                        <div className="flex-shrink-0 mr-4">
                            <Image
                                src={exp.logo}
                                alt={exp.alt}
                                width={40}
                                height={40}
                                className="w-10 h-10 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>

                        <div className="flex flex-col flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-0">
                                <h2 className={`${bricolage_grotesque} text-base sm:text-xl font-medium leading-snug`}>
                                    {exp.role}
                                </h2>
                                <p className="text-xs text-gray-300 dark:text-gray-300 sm:ml-4 whitespace-nowrap">
                                    {exp.period}
                                </p>
                            </div>
                            <p className="text-xs text-gray-300 dark:text-gray-400 truncate mt-0.5">
                                {exp.company}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}