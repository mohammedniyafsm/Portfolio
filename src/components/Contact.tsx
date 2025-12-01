import { bricolage_grotesque } from '@/lib/font'
import React from 'react'
import { MessagesSquare } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';


function Contact() {
    return (
        <div className=' flex-col pt-8 px-32'>
            <div className={`text-2xl font-semibold ${bricolage_grotesque} flex justify-center`}>Lets Connect</div>

            <div className="">
                <div className="flex gap-2 py-10">
                    <Link href={"https://cal.com/mohammed-niyaf-s.m-v01mfl/15min"} ><button className={`cursor-pointer bg-[#4ade80] items-center text-sm ${bricolage_grotesque} rounded-md px-3 py-2 flex gap-2 text-black`}><MessagesSquare className='text-black' />book a meet</button></Link>
                    <Link href={"https://x.com/n1yaf_"}><button className={`cursor-pointer bg-[#1d9bf0] items-center text-sm ${bricolage_grotesque} rounded-md  px-3 py-2 flex gap-2`}><Twitter /> dm on x</button></Link>
                </div>
            </div>

            <h1 className={`${bricolage_grotesque} py-2 text-lg `}>you can mail also</h1>
            <div className="pt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                   <label htmlFor="" className={`${bricolage_grotesque} text-sm `}>Your Email</label>
                   <Input placeholder='name@xyz.com' />
                </div>
                <div className="flex flex-col gap-1">
                   <label htmlFor="" className={`${bricolage_grotesque} text-sm `}>Your message</label>
                   <Textarea placeholder='Type your message here.'/>
                </div>
                <div className="py-4">
                  <Button className={`w-full ${bricolage_grotesque} cursor-pointer`}>Send Message</Button>
                </div>
            </div>

            <div className="py-10">
                <Link href={"https://x.com/n1yaf_/"}>designed and developed by <span className='text-[#70a2ef] cursor-pointer hover:underline'>Niyaf</span></Link>
            </div>
        </div>
    )
}

export default Contact
