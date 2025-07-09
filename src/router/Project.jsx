import React, { useState } from 'react';
import Layout from '../com/Layout';
import teamimg1 from '../img/teamProject1.png';
import teamimg2 from '../img/teamProject2.png';
import teamimg3 from '../img/teamProject3.png';
import img1 from '../img/poroject1.png';
import img3 from '../img/project3.png';
import { CgCloseR } from 'react-icons/cg';

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
            ppt: 'https://www.canva.com/design/DAGCcMc707o/WzC2n1-wJkT-yinrgsc9yQ/edit?utm_content=DAGCcMc707o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
            url: 'https://kidcare.netlify.app/',
        },
        {
            src: teamimg3,
            title: '대구 수목원 앱',
            intention: '대구의 수목원을 소개',
            effect: '대구 수목원 홍보,대구 지역 경제 활성화에 기여',
            role: '퍼블리셔',
            skills: 'React,express,MySQL,Photoshop,Figma,Android Studio',
            ppt: 'https://www.canva.com/design/DAGFWDgziEA/ZDHAVyoTebB7ZH14JLD1bg/edit?utm_content=DAGFWDgziEA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
            url: 'https://daegusumokwon.netlify.app/',
        },
        {
            src: img1,
            title: 'Cocar',
            intention: '렌트카 홈페이지',
            effect: '이용자 수 증가',
            skills: 'JavaScript, CSS, HTML',
            url: 'https://mellow-yeot-2bd0b6.netlify.app/',
        },
        {
            src: img3,
            title: 'TMDB 클론',
            intention: '영화 데이터베이스 제공',
            effect: '정보 제공 효율화',
            skills: 'React',
            url: 'https://polite-moxie-f47304.netlify.app/',
        },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupImage, setPopupImage] = useState({});

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
                <div className="w-full lg:max-w-5xl lg:h-[800px] bg-white py-10 flex flex-col items-center md:max-w-3xl lg:ml-[300px] md:ml-0 lg:mt-0 mt-[260px]">
                    {/* 전체 프로젝트 이미지 목록 */}
                    <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center">
                        {images.map((image) => (
                            <img
                                key={image.src}
                                className="w-[300px] h-[180px] object-cover rounded-lg cursor-pointer shadow-md border border-gray-400"
                                src={image.src}
                                alt={image.title}
                                onClick={() => openPopup(image)}
                            />
                        ))}
                    </div>
                </div>

                {/* 팝업 창 */}
                {isPopupOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                        onClick={closePopup}
                    >
                        <div
                            className="relative bg-white w-[700px] h-[700px] p-5 rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={closePopup}
                            >
                                <CgCloseR className="text-xl" />
                            </button>
                            <div className="w-full h-full flex flex-col items-center">
                                <img
                                    src={popupImage.src}
                                    alt="팝업 이미지"
                                    className="w-[400px] h-[200px] object-cover rounded-lg"
                                />
                                <div className="w-full h-full mt-5 flex flex-col items-start gap-4 p-10">
                                    <span className="font-semibold text-xl">주제: {popupImage.title}</span>
                                    <span className="font-semibold text-xl">계획 의도: {popupImage.intention}</span>
                                    <span className="font-semibold text-xl">기대 효과: {popupImage.effect}</span>
                                    {popupImage.role && (
                                        <span className="font-semibold text-xl">담당 직무: {popupImage.role}</span>
                                    )}
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
                                    {popupImage.ppt && (
                                        <a
                                            href={popupImage.ppt}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            PPT
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
