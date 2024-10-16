import React, { useState } from 'react';
import Layout from '../com/Layout';
import teamimg1 from '../img/teamProject1.png';
import teamimg2 from '../img/teamProject2.png';
import teamimg3 from '../img/teamProject3.png';
import img1 from '../img/poroject1.png';
import img2 from '../img/project2.png';
import img3 from '../img/project3.png';

export default function Project() {
    const ProjectToggle = () => {
        // 선택된 카테고리를 저장할 상태 변수
        const [selectedCategory, setSelectedCategory] = useState('All');

        // 카테고리 클릭 핸들러
        const handleCategoryClick = (category) => {
            setSelectedCategory(category);
        };

        return (
            <Layout>
                <div className="w-full h-screen flex justify-center items-center bg-gray-200">
                    <div className="w-full max-w-5xl h-[800px] bg-white ml-[300px] py-10 flex flex-col items-center">
                        {/* 카테고리 버튼들 */}
                        <div className="w-full max-w-2xl h-[50px] bg-gray-200 rounded-full flex justify-center">
                            <div className="w-full max-w-xl h-full flex">
                                {/* 'All' 버튼 */}
                                <div
                                    className={`w-1/3 h-full flex justify-center items-center text-xl font-semibold cursor-pointer rounded-xl ${
                                        selectedCategory === 'All' ? 'bg-red-300' : ''
                                    }`}
                                    onClick={() => handleCategoryClick('All')}
                                >
                                    All
                                </div>
                                {/* '개인 프로젝트' 버튼 */}
                                <div
                                    className={`w-1/3 h-full flex justify-center items-center text-xl font-semibold cursor-pointer rounded-xl ${
                                        selectedCategory === '개인 프로젝트' ? 'bg-red-300' : ''
                                    }`}
                                    onClick={() => handleCategoryClick('개인 프로젝트')}
                                >
                                    개인 프로젝트
                                </div>
                                {/* '팀 프로젝트' 버튼 */}
                                <div
                                    className={`w-1/3 h-full flex justify-center items-center text-xl font-semibold cursor-pointer rounded-xl ${
                                        selectedCategory === '팀 프로젝트' ? 'bg-red-300' : ''
                                    }`}
                                    onClick={() => handleCategoryClick('팀 프로젝트')}
                                >
                                    팀 프로젝트
                                </div>
                            </div>
                        </div>

                        {/* 선택된 카테고리에 따른 콘텐츠 */}
                        <div className="mt-10 w-full h-full flex justify-center items-center">
                            {selectedCategory === 'All' && (
                                <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer shadow-md"
                                        src={teamimg1}
                                        alt="동성로"
                                    />
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
                                        src={teamimg2}
                                        alt="케어키즈"
                                    />
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
                                        src={teamimg3}
                                        alt="대구 수목원"
                                    />
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
                                        src={img1}
                                        alt="cocar"
                                    />
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
                                        src={img2}
                                        alt="마블"
                                    />
                                    <img
                                        className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
                                        src={img3}
                                        alt="tmdb"
                                    />
                                </div>
                            )}
                            {selectedCategory === '개인 프로젝트' && (
                                <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                                    {' '}
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={img1}
                                        alt="cocar"
                                    />
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={img2}
                                        alt="마블"
                                    />
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={img3}
                                        alt="tmdb"
                                    />
                                </div>
                            )}
                            {selectedCategory === '팀 프로젝트' && (
                                <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={teamimg1}
                                        alt="동성로"
                                    />
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={teamimg2}
                                        alt="케어키즈"
                                    />
                                    <img
                                        className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer"
                                        src={teamimg3}
                                        alt="대구 수목원"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    };

    return <ProjectToggle />;
}
