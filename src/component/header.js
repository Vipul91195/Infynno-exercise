import React from "react";
import playstore from "../images/playstore.png";
import icon from "../images/iconappstore.png";
import profile from "../images/profile.png";
import fancode from "../images/fancode.svg";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="flex w-[100%] h-[60px] fixed top-0 items-center justify-center bg-[#001240] z-[9000]">
            <div className="flex  items-center justify-between w-[1024px]" >
                <div className="flex ">
                    <div>
                        <img className="w-[144px] text-start " src={fancode} alt="" />
                    </div>
                    <nav className=" flex items-center text-[14px] font-semibold ml-[50px] tracking-[1.4px]">
                        <Link to="/" className="mr-[24px] text-white  hover:text-orange-700">HOME</Link>
                        <a href="home" className="mr-[24px] text-white hover:text-orange-700">SCHEDULE</a>
                        <a href="home" className=" text-white hover:text-orange-700 ">SHOP</a>
                    </nav>
                    <a href="home" className=" text-white bg-[#ff5000] w-[32px] h-[14px] text-[11px]  text-center leading-[1.27] tracking-[0.22px] rounded-[2px]">NEW</a>
                </div>
                <div className="flex  items-center justify-center" >
                    <div className="flex  items-center justify-center  mr-[16px]">
                        <a href="l"><img src={playstore} alt="" className=" mr-[12px] h-[24px] w-[24px]" /></a>
                        <a href="l"><img src={icon} alt="" className=" mr-[12px] h-[24px] w-[24px]" /></a>
                        <a href="get the app" className=" text-white">Get The App</a>
                    </div>
                    <div className="flex  items-center justify-center">
                        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.688 17.17l-1.36-1.324v-5.128c0-3.149-1.73-5.785-4.746-6.482v-.698C13.582 2.688 12.875 2 12 2c-.875 0-1.582.687-1.582 1.538v.698c-3.026.697-4.745 3.323-4.745 6.482v5.128l-1.36 1.323c-.665.646-.2 1.754.738 1.754h13.888c.95 0 1.413-1.108.749-1.754zm-11.906-.298v-6.154c0-2.544 1.592-4.615 4.218-4.615s4.218 2.071 4.218 4.615v6.154H7.782zm6.327 3.077C14.11 21.077 13.16 22 12 22c-1.17 0-2.109-.923-2.109-2.051h4.218z" fill="white">
                            </path>
                        </svg>
                        <a href="l"><img src={profile} alt="" className=" ml-[8px]  mr-[10px] h-[24px] w-[24px] " /></a>
                        <a href="login" className="text-white " >Login/Register</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
