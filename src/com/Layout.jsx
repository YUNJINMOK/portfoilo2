import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="w-full h-full">{children}</div>
            <Navbar />
        </div>
    );
}
