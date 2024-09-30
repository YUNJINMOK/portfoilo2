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
                    <div className="w-full h-screen bg-gray-200 overflow-hidden">
                        <div className="w-full h-full ml-[300px] flex justify-center p-8">
                            <div className="max-w-4xl w-full h-full bg-white mr-[300px]  flex justify-center">
                                <div className="w-1/2 h-full bg-gray-600 "></div>
                                <div className="w-1/2 h-full "></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-screen bg-gray-200"></div>
                </div>
            </div>
        </Layout>
    );
}
