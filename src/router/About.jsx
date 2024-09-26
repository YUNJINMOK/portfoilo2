import React, { useRef } from 'react';
import Layout from '../com/Layout';
import '../CSS/Scroll.css';

export default function About() {
    const scrollContainerRef = useRef(null);
    const scrollStep = window.innerHeight; // 스크롤 한 번에 이동할 높이

    const handleScroll = (event) => {
        event.preventDefault(); // 기본 스크롤 방지
        if (event.deltaY > 0) {
            // 아래로 스크롤
            scrollContainerRef.current.scrollBy({ top: scrollStep, behavior: 'smooth' });
        } else {
            // 위로 스크롤
            scrollContainerRef.current.scrollBy({ top: -scrollStep, behavior: 'smooth' });
        }
    };

    return (
        <Layout>
            <div className="w-full bg-gray-200 overflow-hidden">
                <div
                    ref={scrollContainerRef}
                    className="w-full h-screen overflow-y-scroll scrollbar-hide"
                    onWheel={handleScroll}
                >
                    <div className="w-full h-screen bg-red-300"></div>
                    <div className="w-full h-screen bg-slate-500"></div>
                </div>
            </div>
        </Layout>
    );
}
