import React from "react";
import fancode from "../images/fancode.svg";
import twitter from "../images/twitter.svg"
import insta from "../images/insta.svg"
import fb from "../images/fb.svg"

export default function Footer() {
    return (

        <div className="bg-[#001240] box-border w-[100%] static mt-[200px] ">
            <div className="bg-[#001240] w-[100%] flex justify-center box-border p-[32px]">
                <img className="w-[144px]" src={fancode} alt="" />
            </div>
            <div className="flex justify-center items-center p-[24px]">
                <div className="flex flex-col items-center font-[18px] tracking-[0.15px] text-[#c8c8c8]  leading-[1.22]">
                    <h1 className="mb-[23px]">Connect With Us </h1>
                    <div className="flex h-[48px] ">
                        <a className="py-0 pr-3 pl-3" href="twitter"><img src={twitter} alt="" /></a>
                        <a className="py-0 pr-3 pl-3" href="insta"><img src={insta} alt="" /></a>
                        <a className="py-0 pr-3 pl-3" href="fb"> <img src={fb} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="font-[14px] font-medium tracking-[1.25px] text-white text-center ">
                <a href="c" className="ml-[8px]">Careers |</a>
                <a href="c" className="ml-[8px]">Help Desk |</a>
                <a href="c" className="ml-[8px]">T&Cs |</a>
                <a href="c" className="ml-[8px]">Privacy Policy |</a>
                <a href="c" className="ml-[8px]">About Us |</a>
                <a href="c" className="ml-[8px]">IND vs WI</a>
            </div>
            <div className="text-center text-white mt-[10px]">
                <p>
                    Corporate Office: ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 & 1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra-400051
                </p>
            </div>
        </div>
    )
}