import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const [isHovering,setHovering] = useState(false)
    const [isItHovering, setAgainHovering] = useState(false)
    return (
    <div className='w-full py-20'>
        <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-16'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className=" px-20">
            <div className="cards w-full flex gap-7 mt-10">
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="cardcontainer w-1/2 h-[75vh] relative">
                        <h1 className='textFYDE absolute flex z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-full text-8xl text-[#CDEA68] overflow-hidden '>{"FYDE".split("").map((item, index) => <motion.span 
                        
                        initial={{y: '100%'}} 
                        animate={isHovering ? ({y:'0'}) : ({y:'100%'})} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.06}} className='inline-block '>
                            {item}</motion.span>)}</h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className="w-full h-full bg-cover " />                            
                        </div>
                        <div className="absolute w-full">
                                <button className="mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100">AUDIT</button>
                                <button className="mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100 ">COPYWRITING</button>
                                <button className="mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100 ">SALES DECK</button>
                                <button className="mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100 ">SLIDES DESIGN</button>
                        </div>

                    </div>
                    <div onMouseEnter={() => setAgainHovering(true)} onMouseLeave={() => setAgainHovering(false)} className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className='textVISE absolute flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-full text-8xl text-[#CDEA68] '>{"VISE".split('').map((item, index) => <motion.span 
                        
                        initial={{y: '100%'}} 
                        animate={isItHovering ? ({y:'0'}) : ({y:'100%'})} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.06}} className='inline-block '>
                            {item}</motion.span>)}</h1>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className="w-full h-full bg-cover" />
                        </div>
                        <div className="w-full absolute">
                            <button className='mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100'>AGENCY</button>
                            <button className='mr-4 mt-4 border-[1px] tracking-tighter px-2 py-1 rounded-full border-red-100'>COMPANY PRESENTATION</button>
                        </div>
                    </div>
            </div>
            
        </div>
        
    </div>
  )
}
export default Featured
//? End Of Featured