import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import ProofOfWoork from '@/components/ProofOfWoork'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
    <div className = "bg-background w-screen h-screen flex justify-center " >
        <div className="w-[900px] h-screen border-[#ffffff1f]">
            <Navbar />
          
            <ProofOfWoork />
             <div className="py-10 px-24">
                <Link href={"https://x.com/n1yaf_/"}>designed and developed by <span className='text-[#70a2ef] cursor-pointer hover:underline'>Niyaf</span></Link>
            </div>
        </div>
        
        </div >
        
  )
}

export default page
