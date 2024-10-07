import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="w-[13%] h-screen fixed left-0 bottom-0 flex flex-col  items-center shadow-md bg-[#ffff]">
            <Link to="/" className="py-8 mt-[50px]">
                <span className="font-semibold text-4xl">Hello!</span>
            </Link>
            <div className="w-full h-[600px]  flex flex-col justify-center items-center gap-10 mt-">
                <Link to="/">
                    <div className="font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer">
                        Home
                    </div>
                </Link>
                <Link to="/about">
                    <div className="font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer">
                        About
                    </div>
                </Link>
                <Link to="/">
                    <div className="font-semibold text-xl border-b border-gray-300 w-[120px] text-center mb-4 pb-4 cursor-pointer">
                        Portfoilo
                    </div>
                </Link>
            </div>
        </div>
    );
}
