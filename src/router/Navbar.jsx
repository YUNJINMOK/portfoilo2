import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[300px] h-screen flex flex-col  items-center shadow-md bg-[#ffff]'>
        <span className='font-semibold text-4xl py-4 mt-10'>Hello!</span>
        <div className='w-full h-[600px]  flex flex-col justify-center items-center gap-10 mt-10'>
            <div className='font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer'>Home</div>
            <div className='font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer'>About</div>
            <div className='font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer'>Portfoilo</div>
            <div className='font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer'>Contact</div>
        </div>
    </div>
  )
}
