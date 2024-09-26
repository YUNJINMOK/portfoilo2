import React from 'react';
import Navbar from './Navbar';
import '../CSS/Scroll.css';

export default function Layout({ children }) {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-grow overflow-y-auto scrollbar-hide">{children}</div>
            <Navbar />
        </div>
    );
}
