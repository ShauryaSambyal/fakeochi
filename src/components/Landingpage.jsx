import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpRightDots } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className=' w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-32 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                return <div className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && ( 
                        <motion.div 
                            initial={{width: 0}} 
                            animate={{width: "9vw"}} 
                            transition={{ease: [0.76,0,0.24,1], duration: 1}}  
                            className=' mr-[1vw] rounded-md w-[9vw] h-[5.79vw] relative mt-[14px] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover'></motion.div> )}
                        <h1 className='flex items-center uppercase text-[9vw] h-full font-["Test_Founders_Grotesk_X-Condensed"] leading-[7vw] '>{item}</h1>
                    </div>
                    
            </div>
            })}

        </div>
        <div className="border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p> )}
            <div className="start flex items-center gap-5">
                <div className='px-2 font-light text-md uppercase tracking-wide  py-1 border-2 border-zinc-700 rounded-full'>start the project</div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full ">
                    <FaArrowUpRightDots/>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Landingpage