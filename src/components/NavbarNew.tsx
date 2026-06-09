'use client';

import React from 'react';
import { Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, RowsIcon, LinkedInLogoIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPerson } from "react-icons/io5";
import { useDarkMode } from '@/hooks/useDarkMode';
import Link from 'next/link';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const pathname = usePathname();

    return (
        <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
            <div className="rounded-full w-[700px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-[#0d1117]/80 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                <div className='flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all'>

                    <Link href="/">
                        <Tooltip content="Home">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-white ${pathname == '/' ? '!text-[#FFC83D]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/proofofwork">
                        <Tooltip content="Projects">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <CodeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-white ${pathname == '/projects' ? '!text-[#FFC83D]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    {/* <Link href="/blogs">
                        <Tooltip content="Blog">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <RowsIcon className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-white ${pathname.startsWith('/blogs') ? '!text-[#FFC83D]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link> */}

                    <Link href="/about">
                        <Tooltip content="About">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <IoPerson className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-white ${pathname == '/about' ? '!text-[#FFC83D]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                        {/* <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='!bg-gray-400' /> */}

                    <Link href="https://drive.google.com/file/d/1Y5nHGs-37ymbGZ7QJEfUeH4tJGT9GJ05/view?usp=sharing" target='_blank'>
                        <Tooltip content="Resume">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <FileIcon className='w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://github.com/mohammedniyafsm" target='_blank'>
                        <Tooltip content="Github">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://twitter.com/n1yaf_" target='_blank'>
                        <Tooltip content="X">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://www.linkedin.com/in/mohammad-niyaf-s-m-692801259" target='_blank'>
                        <Tooltip content="Linkedin">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 hover:bg-[#262626] rounded-full transition-all duration-300'>
                                <LinkedInLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    {/* <Separator orientation='vertical' size={{ sm: '1', lg: '2', xl: '2' }} className='!bg-gray-400' />

                    <div className='hover:px-3 max-sm:hover:px-2 py-2.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-[#262626]' onClick={toggleDarkMode}>
                        <div className='flex items-center'>
                            <button>
                                {isDarkMode
                                    ? <MoonIcon className='w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px] text-white' />
                                    : <SunIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-white' />
                                }
                            </button>
                        </div>
                    </div> */}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;