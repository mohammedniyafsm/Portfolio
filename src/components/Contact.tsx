"use client"
import { bricolage_grotesque } from '@/lib/font'
import React from 'react'
import { MessagesSquare, Twitter } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';


function Contact() {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async () => {
        if (!email || !message) {
            alert('Please fill in both fields');
            return;
        }

        setLoading(true);
        setStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className='scroll-mt-28 flex-col pt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full'>
            <div className={`text-xl sm:text-2xl sm:px-0 px-6 font-semibold ${bricolage_grotesque} flex  text-center`}>
                Lets Connect
            </div>

            <div className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-8 sm:py-10 items-center px-4 sm:px-0">
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

            <h1 className={`${bricolage_grotesque} py-4 px-4 sm:px-0 sm:py-2 text-lg text-left max-w-2xl mx-auto`}>
                you can mail also
            </h1>

            <div className="pt-4 px-4 sm:px-0 sm:pt-6 flex flex-col gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className={`${bricolage_grotesque} text-sm `}>Your Email</label>
                    <Input
                        id="email"
                        placeholder='name@xyz.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className={`${bricolage_grotesque} text-sm `}>Your message</label>
                    <Textarea
                        id="message"
                        placeholder='Type your message here.'
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="py-3 sm:py-4">
                    <Button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full ${bricolage_grotesque} cursor-pointer disabled:opacity-50`}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                    {status === 'success' && (
                        <p className="text-green-500 text-sm mt-2 text-center">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-2 text-center">Failed to send message. Please try again.</p>
                    )}
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