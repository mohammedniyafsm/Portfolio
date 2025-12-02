import { bricolage_grotesque } from '@/lib/font'
import React from 'react'
import { MessagesSquare, Twitter } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';


function Contact() {
    return (
        <div className='flex-col pt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full'>
            <div className={`text-xl sm:text-2xl sm:px-0 px-6 font-semibold ${bricolage_grotesque} flex  text-center`}>
                Lets Connect
            </div>

            <div className="w-full">
                <div className="flex flex-row sm:pr-0 pr-25 pl-6 sm:pl-0 sm:flex-row gap-3 sm:gap-4 py-8 sm:py-10  items-center">
                    <Link href={"https://cal.com/mohammed-niyaf-s.m-v01mfl/15min"} className="w-full sm:w-auto">
                        <button className={`cursor-pointer bg-[#4ade80] items-center text-sm ${bricolage_grotesque} rounded-md px-4 py-2.5 flex gap-2 text-black justify-center w-full sm:w-auto hover:bg-[#3bc96e] transition-colors`}>
                            <MessagesSquare className='text-black w-4 h-4 sm:w-5 sm:h-5' /> 
                            book a meet
                        </button>
                    </Link>
                    <Link href={"https://x.com/n1yaf_"} className="w-full sm:w-auto">
                        <button className={`cursor-pointer bg-[#1d9bf0] items-center text-sm ${bricolage_grotesque} rounded-md px-4 py-2.5 flex gap-2 justify-center w-full sm:w-auto hover:bg-[#1a8cd8] transition-colors`}>
                            <Twitter className='w-4 h-4 sm:w-5 sm:h-5' /> 
                            dm on x
                        </button>
                    </Link>
                </div>
            </div>

            <h1 className={`${bricolage_grotesque} py-4 px-6 sm:px-0 sm:py-2 text-lg  sm:text-left`}>
                you can mail also
            </h1>
            
            <div className="pt-4 px-6 sm:px-0 sm:pt-6 flex flex-col gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col gap-1">
                   <label htmlFor="" className={`${bricolage_grotesque} text-sm `}>Your Email</label>
                   <Input placeholder='name@xyz.com' />
                </div>
                <div className="flex flex-col gap-1">
                   <label htmlFor="" className={`${bricolage_grotesque} text-sm `}>Your message</label>
                   <Textarea placeholder='Type your message here.' rows={4} />
                </div>
                <div className="py-3 sm:py-4">
                  <Button className={`w-full ${bricolage_grotesque} cursor-pointer`}>
                    Send Message
                  </Button>
                </div>
            </div>

            <div className="py-8 sm:py-10 text-center">
                <Link href={"https://x.com/n1yaf_/"} className="text-sm sm:text-base">
                    designed and developed by <span className='text-[#70a2ef] cursor-pointer hover:underline'>Niyaf</span>
                </Link>
            </div>
        </div>
    )
}

export default Contact