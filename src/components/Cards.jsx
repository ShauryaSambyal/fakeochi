import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-700 px-14 py-14 flex gap-5'>
        <div className="cardcontainer w-1/2">
            <div className="card w-full h-[350px] rounded-2xl bg-[#004D43] relative">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='absolute top-[40%] left-[40%] w-[140px]'/>
                <span className='absolute top-[85%] left-[6%] border-[1px] border-[#cdea68] rounded-full px-2 py-1 text-[#cdea68] tracking-tighter'>©2019-2022</span>
            </div>
        </div>
        <div className="cardcontainer w-1/2 flex gap-5">
            <div className="w-1/2 h-[350px] bg-[#212121] rounded-2xl relative">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='absolute top-[40%] left-[27%] w-[140px]'/>
                <span className='absolute top-[85%] left-[7%] border-[1px] border-white rounded-full px-2 py-1 tracking-tighter '>RATING 5.0 ON CLUTCH</span>
            </div>
            <div className="w-1/2 h-[350px] bg-[#212121] rounded-2xl relative">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-[100px] absolute top-[35%] left-[34%] ' />
                <span className='absolute top-[85%] left-[8%] border-[1px] border-white rounded-full px-2 py-1 tracking-tighter '>BUSINESS BOOTCAMP ALUMINI</span>
            </div>
        </div>
    </div>
  )
}

export default Cards