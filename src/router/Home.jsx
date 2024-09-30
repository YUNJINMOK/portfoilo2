import React from 'react';
import Layout from '../com/Layout';
import { Typewriter } from 'react-simple-typewriter';

import img1 from '../img/teamProject1.png';
import img2 from '../img/teamProject2.png';
import img3 from '../img/teamProject3.png';

export default function Home() {
    return (
        <Layout>
            <div className="w-full h-screen flex justify-center items-center bg-gray-200">
                <div className="w-full max-w-[1100px] h-[600px] flex py-16">
                    <div className="w-2/3 h-full flex flex-col justify-center gap-6">
                        <span className="font-semibold text-4xl">반갑습니다.</span>
                        <span className="font-semibold text-4xl">
                            <span className="text-red-500 pr-2">Web Creator</span>
                            윤진목 입니다.
                        </span>
                        <span className="font-semibold text-4xl">저는 이러한 일을 합니다.</span>
                        <span className="font-semibold text-4xl text-red-500">
                            <span className="text-black">Web</span>
                            <Typewriter
                                words={[' Programmer', ' Publisher', ' Designer']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </span>
                        <span className="mt-6 py-10 font-semibold">
                            새로운 도전을 두려워하지 않으며,
                            <br />
                            맡은 일은 책임감을 갖고 끝까지 해냅니다.
                        </span>
                    </div>
                    {/* 이미지 */}
                    <div className=" relative w-1/3 h-full">
                        <div className=" absolute -left-[10%] top-[10%] w-[400px] h-[200px]">
                            <img className="w-full h-full object-cover" src={img3} alt="img3" />
                        </div>
                        <div className="absolute left-[10%] top-[20%] w-[400px] h-[200px] ">
                            <img className="  w-full h-full object-contain" src={img2} alt="img2" />
                        </div>
                        <div className="absolute left-[30%] top-[30%] w-[400px] h-[200px]">
                            <img className="w-full h-full object-contain" src={img1} alt="img1" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
