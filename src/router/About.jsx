import React, { useRef } from 'react';
import Layout from '../com/Layout';
import '../CSS/Scroll.css';
import { RiScrollToBottomFill } from 'react-icons/ri';

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
                    <div className="relative w-full h-screen bg-gray-200  overflow-hidden">
                        <div className="absolute w-[150px] h-[100px]  bottom-[5%] right-[5%] z-10 flex flex-col justify-center items-center gap-4">
                            <span className="text-2xl font-semibold text-blue-600 animate-shake ">Scroll</span>
                            <RiScrollToBottomFill className="text-4xl text-blue-600 animate-shake" />
                        </div>
                        <div className="w-full h-full ml-[300px] flex justify-center p-8">
                            <div className="max-w-4xl w-full h-full bg-white mr-[300px]  flex justify-center rounded-xl shadow-lg overflow-hidden">
                                <div className="w-1/3 h-full bg-blue-100 flex flex-col items-center py-10 ">
                                    <div className="w-[160px] h-[160px] bg-blue-500 rounded-full flex justify-center items-center z-10">
                                        <div className="w-[150px] h-[150px] bg-white rounded-full z-10"></div>
                                    </div>
                                    <div className="w-full h-2/3  flex justify-center mt-4  ">
                                        <div className="max-w-[250px] w-full h-full overflow-hidden ">
                                            <div className="w-full h-[60px] flex items-center">
                                                <span className="text-xl font-semibold text-blue-600">개인 정보</span>
                                                <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                            </div>
                                            <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                <span className="text-sm font-semibold">윤진목</span>
                                                <span className="text-sm font-semibold">1999년07월06일</span>
                                                <span className="text-sm font-semibold">010-2423-2601</span>
                                                <span className="text-sm font-semibold">aprnaprn114@naver.com</span>
                                                <span className="text-sm font-semibold">
                                                    경북 경산시 신대리 512
                                                    <br /> 천년사랑 502호
                                                </span>
                                            </div>
                                            <div className="w-full h-[60px] flex items-center">
                                                <span className="text-xl font-semibold text-blue-600">자격증</span>
                                                <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                            </div>
                                            <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                <div className=" flex items-end gap-3">
                                                    <span className="text-sm font-semibold">2017.07</span>
                                                    <span className="text-lg font-semibold">GTQ포토샵2급</span>
                                                </div>
                                                <div className=" flex items-end gap-3">
                                                    <span className="text-sm font-semibold">2018.10</span>
                                                    <span className="text-lg font-semibold">1종보통운전면허</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3 h-full flex flex-col items-center py-5 ">
                                    <div className="max-w-lg w-full h-full ">
                                        <div className="w-full h-[200px] flex flex-col gap-4 justify-center ">
                                            <span className="text-xl font-semibold ">
                                                성실하고 <span className="text-blue-600">열정</span> 넘치는
                                            </span>
                                            <span className="text-4xl font-semibold">
                                                <span className="text-blue-600">윤진목</span> 입니다
                                            </span>
                                        </div>
                                        <div className="w-full h-full">
                                            <div className="w-full h-[150px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="text-xl font-semibold text-blue-600">
                                                        학력사항
                                                    </span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex items-end gap-3">
                                                        <span className="text-sm font-semibold">2015.03 ~ 2018.02</span>
                                                        <span className="text-lg font-semibold">
                                                            경산 고등학교(졸업)
                                                        </span>
                                                    </div>
                                                    <div className=" flex items-end gap-3">
                                                        <span className="text-sm font-semibold">2018.04 ~ 2019.02</span>
                                                        <span className="text-lg font-semibold">
                                                            계명문화대학교(건축인테리어과)중퇴
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-[150px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="text-xl font-semibold text-blue-600">교육</span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex items-end gap-3">
                                                        <span className="text-sm font-semibold">2023.11 ~ 2024.06</span>
                                                        <span className="text-lg font-semibold">
                                                            영진직업전문학교 [K-Digital Training] OpenAPI를 활용한
                                                            스마트웹&앱(프론트엔드) 개발자 양성과정
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-[150px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="text-xl font-semibold text-blue-600">수상</span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex items-end gap-3">
                                                        <span className="text-sm font-semibold">2024.06.03</span>
                                                        <span className="text-lg font-semibold">
                                                            제14회 송암전 영진직업전문학교
                                                            <br /> 대구수목원 스탬프 투어 하이브리드 앱(최우수상)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 스크롤 2번쨰 페이지 */}
                    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
                        <div className="w-full max-w-4xl h-[500px] bg-white ml-[300px] rounded-lg overflow-hidden shadow-lg flex-col">
                            <div className="w-full h-[50px]  flex justify-center items-center border-b-2 border-blue-600">
                                <span className="font-bold text-2xl ">보유스킬</span>
                            </div>
                            <div className="w-full h-full flex">
                                <div className="w-1/3 h-full border-r-2 border-blue-600 flex-col justify-center items-center">
                                    <div className="w-full h-[30px] border-b-2 border-blue-600 text-center font-semibold text-lg ">
                                        Dev
                                    </div>
                                    <div className="w-full h-full flex flex-col items-center py-10 gap-4">
                                        <span className="font-medium text-lg">JavaScript</span>

                                        <span className="font-medium text-lg">Node</span>
                                        <span className="font-medium text-lg">php</span>
                                        <span className="font-medium text-lg">mysql</span>
                                    </div>
                                </div>
                                <div className="w-1/3 h-full border-r-2 border-blue-600">
                                    <div className="w-full h-[30px] border-b-2 border-blue-600 text-center font-semibold text-lg ">
                                        Design
                                    </div>
                                    <div className="w-full h-full flex flex-col items-center py-10 gap-4">
                                        <span className="font-medium text-lg">Figma</span>
                                        <span className="font-medium text-lg">Adobe XD</span>
                                        <span className="font-medium text-lg">photoshop</span>
                                        <span className="font-medium text-lg">Illustrator</span>
                                    </div>
                                </div>
                                <div className="w-1/3 h-full ">
                                    <div className="w-full h-[30px] border-b-2 border-blue-600 text-center font-semibold text-lg ">
                                        Publisher
                                    </div>
                                    <div className="w-full h-full flex flex-col items-center py-10 gap-4">
                                        <span className="font-medium text-lg">html</span>
                                        <span className="font-medium text-lg">css</span>
                                        <span className="font-medium text-lg">jquery</span>
                                        <span className="font-medium text-lg">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
