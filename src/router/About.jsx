import Layout from '../com/Layout';
import '../CSS/Scroll.css';
import myimg from '../img/myimg.jpg';

export default function About() {
    // 스크롤 한 번에 이동할 높이

    return (
        <Layout>
            <div className="w-full bg-gray-200  mt-[60px] lg:mt-0">
                <div className="w-full lg:h-screen ">
                    <div className=" w-full lg:h-screen h-[900px] bg-gray-200 overflow-hidden">
                        <div className="w-full h-full lg:ml-[300px] lg:flex justify-center p-8">
                            <div className="lg:max-w-4xl w-full h-full bg-white mr-[300px]  flex justify-center rounded-xl shadow-lg">
                                <div className="w-1/3 h-full bg-blue-100 md:flex md:flex-col items-center py-10 hidden ">
                                    <div className="w-[160px] h-[160px] bg-blue-500 rounded-full flex justify-center items-center z-10">
                                        <div className="w-[150px] h-[150px] bg-white rounded-full z-10 overflow-hidden">
                                            <img className="object-cover" src={myimg} alt="myimg" />
                                        </div>
                                    </div>
                                    <div className="w-full h-2/3  flex justify-center mt-4">
                                        <div className="lg:max-w-[250px] w-full h-full">
                                            <div className="w-full h-[60px] flex items-center">
                                                <span className="lg:text-xl text-lg font-semibold text-blue-600 p-2">
                                                    개인 정보
                                                </span>
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
                                                <span className="lg:text-xl text-lg font-semibold text-blue-600 p-2">
                                                    자격증
                                                </span>
                                                <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                            </div>
                                            <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                <div className=" flex items-end gap-3">
                                                    <span className="text-sm font-semibold">2017.07</span>
                                                    <span className="lg:text-lg text-sm font-semibold">
                                                        GTQ포토샵2급
                                                    </span>
                                                </div>
                                                <div className=" flex items-end gap-3">
                                                    <span className="text-sm font-semibold">2018.10</span>
                                                    <span className="lg:text-lg text-sm font-semibold">
                                                        1종보통운전면허
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3 h-full flex flex-col items-center py-5 ">
                                    <div className="max-w-lg w-full h-full ">
                                        <div className="w-full h-[200px] flex flex-col gap-4 justify-center ">
                                            <span className="lg:text-xl text-lg font-semibold p-2 ">
                                                성실하고 <span className="text-blue-600">열정</span> 넘치는
                                            </span>
                                            <span className="lg:text-4xl text-2xl font-semibold p-2">
                                                <span className="text-blue-600">윤진목</span> 입니다
                                            </span>
                                        </div>
                                        <div className="w-full h-full">
                                            <div className="w-full h-[200px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="lg:text-xl text-lg font-semibold text-blue-600 p-2">
                                                        학력사항
                                                    </span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex flex-col justify-center items-start">
                                                        <span className="text-sm font-semibold">2015.03 ~ 2018.02</span>
                                                        <span className="lg:text-lg text-sm font-semibold p-2">
                                                            경산 고등학교(졸업)
                                                        </span>
                                                    </div>
                                                    <div className=" flex flex-col justify-center items-start">
                                                        <span className="text-sm font-semibold">2018.04 ~ 2019.02</span>
                                                        <span className="lg:text-lg text-sm font-semibold p-2">
                                                            계명문화대학교(건축인테리어과)중퇴
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-[200px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="lg:text-xl text-lg font-semibold text-blue-600 p-2">
                                                        교육
                                                    </span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex flex-col justify-center items-start">
                                                        <span className="text-sm font-semibold p-2">
                                                            2023.11 ~ 2024.06
                                                        </span>
                                                        <span className="lg:text-lg text-sm font-semibold p-2">
                                                            영진직업전문학교 [K-Digital Training] OpenAPI를 활용한
                                                            스마트웹&앱(프론트엔드) 개발자 양성과정
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-[150px]">
                                                <div className="w-full h-[60px] flex items-center">
                                                    <span className="lg:text-xl text-lg font-semibold text-blue-600 lg:p-0 p-2">
                                                        수상
                                                    </span>
                                                    <div className="flex-grow border-t border-blue-600 ml-4"></div>
                                                </div>
                                                <div className="w-full h-[200px] ml-2 flex flex-col items-start gap-3">
                                                    <div className=" flex flex-col justify-center items-start">
                                                        <span className="text-sm font-semibold p-2">2024.06.03</span>
                                                        <span className="lg:text-lg text-sm font-semibold p-2">
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
                </div>
            </div>
        </Layout>
    );
}
