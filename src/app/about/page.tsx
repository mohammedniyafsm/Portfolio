"use client"
import Experience from '@/components/Experience'
import Github from '@/components/Github'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import ProofOfWoork from '@/components/ProofOfWoork'
import { Dock, DockIcon } from '@/components/ui/dock'
import Link from 'next/link'
import { Home, User, Github as GithubIcon, Twitter, Mail } from 'lucide-react'
import Navbar from '@/components/NavbarNew'

const navItems = [
    { icon: Home, href: '/proofofwork', label: 'Home' },
    { icon: User, href: '/about', label: 'About' },
    { icon: GithubIcon, href: 'https://github.com/mohammedniyafsm', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/n1yaf_', label: 'Twitter' },
    { icon: Mail, href: 'mailto:mohammedniyafsm@gmail.com', label: 'Email' },
]

function page() {
    return (
        <div className='py-20 md:py-8 relative z-10'>

            <Navbar />

            <div className="flex justify-center items-center">
                <div className="">
                    {/* <ProofOfWoork /> */}
                    <div className="mt-20">
                        <Experience />
                    </div>
                    <div className="flex items-center">
                        <Github />
                    </div>
                    <Skills />
                    <Education />
                    <div className="flex justify-start">
                        <Contact />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page