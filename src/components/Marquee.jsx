import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.4' className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-zinc-700'>
        <div className="text border-t-2 border-b-2 border-zinc-600 flex overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed] uppercase -pt-10 pb-3  font-bold pr-20'>We are ochi</motion.h1>
            
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed] uppercase -pt-10 pb-1 font-bold pr-20'>We are ochi</motion.h1>
        </div>
    </div>
  )
}
export default Marquee