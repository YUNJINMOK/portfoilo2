import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="md:w-[14%] md:h-screen w-full h-[80px]  fixed top-0  flex md:flex-col   items-center shadow-md bg-[#ffff]">
            <Link to="/" className="py-8 mt-[50px]">
                <span className="font-semibold text-4xl hidden md:block">Hello!</span>
            </Link>
            <div className="w-full h-[600px]  flex md:flex-col justify-center items-center  gap-10">
                <Link to="/">
                    <div className="font-semibold lg:text-xl md:text-lg md:border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer ">
                        Home
                    </div>
                </Link>
                <Link to="/about">
                    <div className="font-semibold lg:text-xl md:text-lg md:border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer">
                        About
                    </div>
                </Link>
                <Link to="/project">
                    <div className="font-semibold lg:text-xl md:text-lg md:border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer">
                        Project
                    </div>
                </Link>
            </div>
        </div>
    );
}
