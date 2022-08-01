import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { apitoken } from "../utils"
import { Link } from "react-router-dom";
import Slider from "react-slick";



// qUPaeSRlmY7IL4ZkNZeTeEqIZMmMIWwEyGstYQohf2I4PLy4m2wxZ2HE1zy8 - token


export default function Section() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const [apidata, setApiData] = useState([])

    useEffect(() => {
        crickapi();
    }, [])

    const crickapi = async () => {
        const api = await axios.get(`https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=${apitoken}&include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman,scoreboards`)

        setApiData(api.data.data.splice(2, 9));

    }
    if (apidata.length === 0) {
        return <div className="flex justify-center items-center mt-[260px]"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        </div>
    }
    // console.log(apidata);

    return (
        <div>
            <div
                className="w-[100%] h-[168px] absolute top-[50px] left-0 bg-[#001240]">
            </div>
            <div className="flex justify-center  h-[300px] top-[90px]  relative ">
                <div className="flex flex-col">
                    <div className="mb-[26px]">
                        <h1
                            className="text-white text-[20px] font-semibold leading-[1.6px] tracking-[0.2px]">Featured Matches
                        </h1>
                    </div>
                    <div className="w-[1024px]">
                        <Slider {...settings}>
                            {apidata?.map((cri, i) => {
                                return (
                                    <div className="group   ">
                                        <div className="w-[100%]   relative ">
                                            <div className="w-full h-[100px]  rounded-t-xl flex items-center justify-center " >
                                                {/* <div className="relative "> */}
                                                <img className="rounded-t-xl h-[100px] w-full"
                                                    src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MjAwLjAwMDAwMzE3ODkxNDIsIndpZHRoIjo2NTYuMDAwMDEwNDI2ODM4NiwicG9zaXRpb24iOiJ0b3AifX19" alt="" />
                                                <div className="flex flex-row items-center absolute top-[12px] left-[12px] w-[100%] justify-start ">
                                                    <div className="flex flex-row justify-center items-center h-[16px] leading-[16px] py-[1px] px-[4px] rounded-sm bg-[#ffdccc] mr-[8px] text-[11px] tracking-[0.22px] text-[#ff5000]">
                                                        LIVE
                                                    </div>
                                                    <img className="h-[24px] w-[24px]" src="https://www.fancode.com/34c5a8f6bbb5d0f26564fc0537e56630.svg" alt="" />
                                                    <div className="  text-white uppercase text-[10px] leading-[1.6] tracking-[1.4px] text-ellipsis overflow-hidden w-[90%] absolute whitespace-nowrap">
                                                        <p className="mt-[100px]">3rd Place Play-off ..ICC T20 World Cup Europe Qualifier A</p>
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </div>
                                            <div className="flex flex-col justify-center items-center h-[49%] rounded-b-xl border-[1px] bg-white group">
                                                <div className="flex flex-row  items-center mt-[22px] px-[0px]">
                                                    <div className="flex items-center  justify-start py-0 pl-0 pr-[50px]">
                                                        <div className="flex flex-col items-center justify-center">
                                                            <img className="h-[32px] w-[32px]"
                                                                src=
                                                                {cri.localteam?.image_path}
                                                                alt="" />
                                                            <label className="py-0 px-[5px] text-[10px] tracking-[1.4px] text-black max-w-full">
                                                                {cri.localteam?.code}
                                                            </label>
                                                        </div>
                                                        <div className="flex flex-col flex-grow flex-shrink basis-0 justify-center mt-[2px] items-start ml-[10px]">
                                                            <label className="flex font-semibold text-[#666666] text-[14px]">
                                                                {cri.runs[1]?.score}/{cri.runs[1]?.wickets}
                                                            </label>
                                                            <label className="whitespace-nowrap text-[12px] font-normal text-[#999999] my-0 mx-0">
                                                                {cri.runs[1]?.overs}    overs
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="w-[24px] h-[40px] overflow-hidden items-center flex justify-center">
                                                        <div className="w-[24px] ml-3 flex items-center justify-center">
                                                            <div className="h-[60px] w-[1px] bg-[#e6e7ec]"></div>
                                                            <div className="w-[16px] h-[16px] leading-[24px] text-[10px] rounded-[50%] bg-[#e6e7ec] flex items-center  justify-center absolute font-semibold text-black">V</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center py-0 pr-0 pl-[50px] ">
                                                        <div className="flex flex-col mr-[10px] mt-[2px]">
                                                            <label className="flex font-semibold text-[#666666] text-[14px] justify-end">
                                                                {cri.runs[0]?.score}/{cri.runs[0]?.wickets}
                                                            </label>
                                                            <label className="whitespace-nowrap text-[12px] font-normal text-[#999999] my-0 mx-0">
                                                                {cri.runs[0]?.overs} overs
                                                            </label>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center">
                                                            <img className="h-[32px] w-[32px]" src=
                                                                {cri.visitorteam?.image_path}
                                                                alt="" />
                                                            <label className="py-0 px-[5px] text-[10px] tracking-[1.4px] text-black max-w-full">
                                                                {cri.visitorteam?.code}
                                                            </label>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className='flex justify-center mt-[10px]'>
                                                    <p className="text-[12px] leading-[1.33px] tracking-[0.24px] text-black p-[4px] pb-[15px]">
                                                        {cri.note}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-[#ff5000] absolute top-[84px] rounded-[30px] h-[32px] w-fit flex justify-center items-center ml-[100px] py-0 px-[12px]" >
                                                <div
                                                    className="h-[16px] w-[16px] flex justify-center items-center ">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm8.8-3.9a.5.5 0 00-.8.4v7c0 .41.47.65.8.4l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1z" fill="white">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <Link exact to={`/scorboard/${cri.id}`} className="flex text-[13px] font-semibold leading-[1] tracking-[1.4px] whitespace-nowrap pl-[6px] text-white">
                                                        WATCH LIVE
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invisible rounded-b-xl border-[1px] text-black flex  flex-row justify-between items-center w-[100%]  h-[38px] py-0 px-[12px] bg-[#f0f1f4] mt-[-10px] group-hover:visible">
                                            <div className="flex justify-center items-center pt-[10px]">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff9666" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V6.4c0-.77.63-1.4 1.4-1.4zM6.4 9.2h.2c.77 0 1.4.63 1.4 1.4v7c0 .77-.63 1.4-1.4 1.4h-.2c-.77 0-1.4-.63-1.4-1.4v-7c0-.77.63-1.4 1.4-1.4zM19 14.4c0-.77-.63-1.4-1.4-1.4-.77 0-1.4.63-1.4 1.4v3.2c0 .77.63 1.4 1.4 1.4.77 0 1.4-.63 1.4-1.4v-3.2z" fill="#ff9666"></path></svg>
                                                <h1 className="ml-[4px] text-black h-[16px] w-[16px] whitespace-nowrap text-[11px] leading-[1.27] tracking-[0.22px]">Points Table</h1>
                                            </div>
                                            <div className="flex justify-center items-center pt-[10px]">
                                                <h1 className="text-black text-[11px] leading-[1.27] tracking-[0.22px]">More Cricket</h1>
                                                <svg className="ml-[8px] bg-[#ff9666] rounded-[50%]" width="12" height="12" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 6.71a.996.996 0 000 1.41L13.88 12 10 15.88a.996.996 0 101.41 1.41L16 12.7a.996.996 0 000-1.41L11.41 6.7c-.38-.38-1.02-.38-1.41.01z" fill="#fff">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
