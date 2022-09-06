import React from 'react';
import Image from 'next/image';


export default function Header() {
    return (

        <navbar className='flex w-full h-[68px]  border-b-[1px] bg-white justify-between px-[64px]' >
            <div className='   flex items-center gap-[36px] font-semibold text-[12px] not-italic leading-[20px] text-[#28293D] whitespace-nowrap'>
                <a href='#'>HOW IT WORKS</a>
                <a href='#'>WHY US</a>
                <a href='#'>CONTACT US</a>
            </div>
            <div className='flex items-center justify-center '>
                <Image src='/autodigg.png' alt='logo' width="132px" height="36px" />
            </div>
            <div className='flex gap-[36px]'>
                <div className='flex flex-col mt-[24px]  '>
                    <div className='flex gap-[4px] mb-[5px]'>
                        <a className='flex justify-center' href='#'>
                            <Image src='/car.png' alt='logo' width="18px" height="20px" />
                        </a>
                        <a className='font-semibold text-[12px] not-italic leading-[20px] text-[#FF6B00] ' href='#'>USED CARS FOR SALE</a>
                    </div>
                    <div className='w-[146px] h-[3px] bg-[#FF8800]'></div>

                </div>
                <div className='flex justify-center items-center '>
                    <button className='w-[148px] h-[36px] bg-[#28293D] rounded-[13px] text-[12px] not-italic leading-[20px] text-white '>Sign in/ Register</button>
                </div>
            </div>
        </navbar>

    )
}