import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="lg:w-[15%] lg:h-screen w-full h-[80px]  fixed top-0  flex lg:flex-col   items-center justify-center shadow-md bg-[#ffff] z-20">
            <Link to="/" className="py-8 mt-[50px]">
                <span className="font-semibold text-4xl hidden lg:block">Hello!</span>
            </Link>
            <div className="w-full lg:h-[600px]  flex lg:flex-col justify-around items-center lg:justify-center  lg:gap-12 mt-8 lg:mt-0">
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
