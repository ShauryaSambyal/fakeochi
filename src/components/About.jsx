//? This is the About section

import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-zinc-800 rounded-tl-3xl rounded-tr-3xl text-white'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 border-zinc-600 mt-20">
            <div className="w-1/2 ">
                <h1 className='text-6xl text-[#ffb742]'>Our Approach:</h1>
                <button className='px-8 py-4 uppercase flex gap-7 items-center mt-10 bg-zinc-900 rounded-full text-[#ffb742]'>Read More
                    <div className="w-3 h-3 bg-[#ffb742] rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
        </div>
    </div>
  )
}

export default About