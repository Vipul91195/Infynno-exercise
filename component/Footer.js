import React from 'react'
import Image from 'next/image'
import { WhatsappIcon, WhatsappShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";


const dataFromNextJS = {
    request: {
        path: "http://be.ch"
    }
};
const dataFromAEM = {
    pageproperties: {
        title: "content page"
    },
    email: {
        subject: "See this page: __WEBSITE_TITLE__",
        body: "Check out: "
    }
};



export default function Footer() {
    const subject = dataFromAEM.email.subject.replace(
        "__WEBSITE_TITLE__",
        dataFromAEM.pageproperties.title
    );
    const body = dataFromAEM.email.body;

    return (
        <div>

            <div className='w-full h-[232px] bg-[#28293D]'>
                <div className='flex justify-between px-[60px]'>
                    <div className='flex items-center justify-center mt-[64px] '>
                        <Image src='/a.png' alt='logo' width="132px" height="36px" />
                    </div>
                    <div className='mt-[70px] flex gap-[36px] items-center'>
                        <FacebookShareButton url={dataFromNextJS.request.path}>
                            <a href='#'> <Image src='/f.png' alt='logo' width="24px" height="24px" /></a>
                        </FacebookShareButton>
                        <TwitterShareButton url={dataFromNextJS.request.path}>
                            <a href='#'> <Image src='/t.png' alt='logo' width="24px" height="19.5px" /></a>
                        </TwitterShareButton>
                        {/* <a href='#'> <Image src='/i.png' alt='logo' width="24px" height="24px" /></a> */}
                        <WhatsappShareButton url={dataFromNextJS.request.path}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>
                <div className='flex justify-between px-[60px] '>
                    <div className='max-w-[424px]  mt-[24px] '>
                        <p className='font-normal text-[14px] leading-[24px] text-[#8F90A6] '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className='flex not-italic font-medium text-[14px] leading-[24px] text-white gap-[32px] mt-[78px]'>
                        <a href='#'>How it works</a>
                        <a href='#'>  Blog</a>
                        <a href='#'>Frequently asked questions</a>
                        <a href='#'>Are you a dealer?</a>
                        <a href='#'>Contact us</a>
                    </div>
                </div>
            </div>
            <div className=' h-[60px] bg-[#1C1C28] flex items-center justify-between px-[60px]'>
                <div className=' whitespace-nowrap font-normal text-[10px] leading-[12px text-[#8F90A6] not-italic'>
                    <label>© AutoDigg 2021. All Rights Reserved.</label>
                </div>
                <div className='not-italic font-semibold text-[10px] leading-[16px] text-white flex gap-[32px]'>
                    <label className='whitespace-nowrap'>Terms of Service</label>
                    <label className='whitespace-nowrap'>Privacy Policy</label>
                </div>
            </div>
        </div>
    )
}

