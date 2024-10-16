import React, { useState } from 'react';
import Layout from '../com/Layout';
import teamimg1 from '../img/teamProject1.png';
import teamimg2 from '../img/teamProject2.png';
import teamimg3 from '../img/teamProject3.png';
import img1 from '../img/poroject1.png';
import img2 from '../img/project2.png';
import img3 from '../img/project3.png';

export default function Project() {
    const images = [
        {
            src: teamimg1,
            title: '동성로',
            intention: '대구 동성로 홍보',
            effect: '대구 동성로 상권 강화',
            role: '프론트 엔드',
            skills: 'JavaScript, CSS, HTML, PHP, MySQL, jQuery, Photoshop',
            url: 'http://dongseong.dothome.co.kr/',
        },
        {
            src: teamimg2,
            title: '케어키즈',
            intention: '음식 알레르기가 있는 아이들을 위한 알림톡 서비스',
            effect: '음식 알레르가 있는 아이들의 위험성 감소',
            role: 'UI/UX 디자인',
            skills: 'React,express,MySQL,Photoshop,Figma',
            ppt: 'https://www.canva.com/design/DAGCcMc707o/WzC2n1-wJkT-yinrgsc9yQ/edit',
            url: 'https://kidcare.netlify.app/',
        },
        {
            src: teamimg3,
            title: '대구 수목원 앱',
            intention: '대구의 수목원을 소개',
            effect: '대구 수목원 홍보,대구 지역 경제 활성화에 기여',
            role: '퍼블리셔',
            skills: 'React,express,MySQL,Photoshop,Figma,Android Studio',
            ppt: 'https://www.canva.com/design/DAGFWDgziEA/ZDHAVyoTebB7ZH14JLD1bg/edit',
            url: 'https://daegusumokwon.netlify.app/',
        },
        {
            src: img1,
            title: 'Cocar',
            intention: '커뮤니티 플랫폼 홍보',
            effect: '이용자 수 증가',
            role: '프론트 엔드',
            skills: 'JavaScript, CSS, HTML',
            url: '',
        },
        {
            src: img2,
            title: '마블',
            intention: '영화 정보 제공',
            effect: '이용자 만족도 증가',
            role: '프론트 엔드',
            skills: 'JavaScript, CSS, HTML',
            url: '',
        },
        {
            src: img3,
            title: 'TMDB',
            intention: '영화 데이터베이스 제공',
            effect: '정보 제공 효율화',
            role: '프론트 엔드',
            skills: 'JavaScript, CSS, HTML',
            url: '',
        },
    ];

    const ProjectToggle = () => {
        const [selectedCategory, setSelectedCategory] = useState('All');
        const [isPopupOpen, setIsPopupOpen] = useState(false);
        const [popupImage, setPopupImage] = useState({});

        const handleCategoryClick = (category) => {
            setSelectedCategory(category);
        };

        const openPopup = (image) => {
            setPopupImage(image);
            setIsPopupOpen(true);
        };

        const closePopup = () => {
            setIsPopupOpen(false);
            setPopupImage({});
        };

        return (
            <Layout>
                <div className="w-full h-screen flex justify-center items-center bg-gray-200">
                    <div className="w-full max-w-5xl h-[800px] bg-white py-10 flex flex-col items-center">
                        {/* 카테고리 버튼들 */}
                        <div className="w-full max-w-2xl h-[50px] bg-gray-200 rounded-full flex justify-center">
                            <div className="w-full max-w-xl h-full flex">
                                <div
                                    className={`w-1/3 h-full flex justify-center items-center text-xl font-semibold cursor-pointer rounded-xl ${
                                        selectedCategory === 'All' ? 'bg-red-300' : ''
                                    }`}
                                    onClick={() => handleCategoryClick('All')}
                                >
                                    All
                                </div>
                                <div
                                    className={`w-1/3 h-full flex justify-center items-center text-xl font-semibold cursor-pointer rounded-xl ${
                                        selectedCategory === '개인 프로젝트' ? 'bg-red-300' : ''
                                    }`}
                                    onClick={() => handleCategoryClick('개인 프로젝트')}
                                >
                                    개인 프로젝트
                                </div>
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
                                    {images.map((image) => (
                                        <img
                                            key={image.src}
                                            className="w-[250px] h-[150px] object-cover rounded-lg cursor-pointer shadow-md"
                                            src={image.src}
                                            alt={image.title}
                                            onClick={() => openPopup(image)} // 클릭 시 팝업 열기
                                        />
                                    ))}
                                </div>
                            )}
                            {selectedCategory === '개인 프로젝트' && (
                                <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                                    {images.slice(3).map((image) => (
                                        <img
                                            key={image.src}
                                            className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer shadow-md"
                                            src={image.src}
                                            alt={image.title}
                                            onClick={() => openPopup(image)}
                                        />
                                    ))}
                                </div>
                            )}
                            {selectedCategory === '팀 프로젝트' && (
                                <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                                    {images.slice(0, 3).map((image) => (
                                        <img
                                            key={image.src}
                                            className="w-[350px] h-[200px] object-cover rounded-lg cursor-pointer shadow-md"
                                            src={image.src}
                                            alt={image.title}
                                            onClick={() => openPopup(image)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 팝업 창 */}
                    {isPopupOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                            onClick={closePopup} // 배경 클릭 시 팝업 닫기
                        >
                            <div
                                className="relative bg-white w-[700px] h-[700px] p-5 rounded-lg shadow-lg"
                                onClick={(e) => e.stopPropagation()} // 팝업 클릭 시 닫히지 않도록 설정
                            >
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                    onClick={closePopup}
                                >
                                    닫기
                                </button>
                                <div className="w-full h-full flex flex-col items-center">
                                    <img
                                        src={popupImage.src} // 팝업에 보여줄 이미지
                                        alt="팝업 이미지"
                                        className="w-[400px] h-[200px] object-cover rounded-lg"
                                    />
                                    <div className="w-full h-full mt-5 flex flex-col items-start gap-4 p-10">
                                        <span className="font-semibold text-xl">주제: {popupImage.title}</span>
                                        <span className="font-semibold text-xl">계획 의도: {popupImage.intention}</span>
                                        <span className="font-semibold text-xl">기대 효과: {popupImage.effect}</span>
                                        <span className="font-semibold text-xl">담당 직무: {popupImage.role}</span>
                                        <span className="font-semibold text-xl">사용 스킬: {popupImage.skills}</span>

                                        <span className="font-semibold text-xl">
                                            주소:{' '}
                                            <a
                                                href={popupImage.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {popupImage.url}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>
        );
    };

    return <ProjectToggle />; // ProjectToggle 컴포넌트를 반환
}
