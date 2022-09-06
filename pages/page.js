import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div className='flex justify-center mt-[100px]'>
            <div className='w-[900px] h-[440px] border-[1px] rounded-[10px] flex'>
                <div className='w-[303px]  bg-[#F2F2F5] p-[36px] rounded-l-[10px]   '>
                    <div>
                        <div className='flex gap-[8px]'>
                            <div className='w-[24px] rounded-[100%] h-[24px] border-[1px] border-[#FF8800] text-[#FF8800]  flex items-center justify-center'>1</div>
                            <label className='uppercase text-[#FF8800] font-semibold'>register</label>
                        </div>
                        <div className='h-[42px] w-[1px] border-[1px]  bg-[#C7C9D9] ml-[12px]'></div>
                        <div className='flex gap-[8px]'>
                            <div className='w-[24px] rounded-[100%] h-[24px] border-[1px] border-[#C7C9D9] text-[#C7C9D9] flex items-center justify-center'>2</div>
                            <label className='uppercase text-[#C7C9D9] font-semibold'>verify phone number</label>
                        </div>
                        <div className='h-[42px] w-[1px] border-[1px]  bg-[#C7C9D9] ml-[12px]'></div>
                        <div className='flex gap-[8px]'>
                            <div className='w-[24px] rounded-[12px] h-[24px] border-[1px] border-[#C7C9D9] text-[#C7C9D9] flex items-center justify-center'>3</div>
                            <label className='uppercase text-[#C7C9D9] font-semibold'>get anonymous</label>
                        </div>
                    </div>
                    <div className='mt-[75px] h-[172px] ml-[-35px]'>
                        <Image className='' src='/loginModal.webp' width={137} height={172} alt='m' />
                    </div>
                </div>
                <div className=' py-[30px] pr-[48px] pl-[30px] relative max-w-[600px]'>
                    <div className='absolute top-[20px] right-[20px]'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1byzxul w-[30px] h-[30px]" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CloseRoundedIcon">
                            <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className='m-0 leading-[1.5] text-[16px] font-bold text-[#28293d]' >{`Hello , Let\'s get you registered`}</p>
                        <p className='m-0  text-[12px] leading-[1.5] font-normal text-[#8f90a6]'>We will collect your name and email address via this process. We pledge never to share it with anyone without your discretion.</p>
                        <div className='mt-[36px] flex'>
                            <div className='py-[24px] px-[20px] border-[1px] border-[#ebebf0] rounded-[8px] flex flex-col  items-center h-[100%] w-[100%] mr-[20px]'>
                                <Image className='' src='/facebook.webp' width={64} height={64} alt='m' />
                                <p className='uppercase m-[0px] leading-[1.5] text-[12px] font-semibold text-[#8f90a6] whitespace-nowrap' >login via facebook</p>
                            </div>
                            <div className='py-[24px] px-[20px] border-[1px] border-[#ebebf0] rounded-[8px] flex flex-col  items-center h-[100%] w-[100%]'>
                                <Image className='' src='/t.webp' width={64} height={64} alt='m' />
                                <p className='uppercase m-[0px] leading-[1.5] text-[12px] font-semibold text-[#8f90a6] whitespace-nowrap'>login via twitter</p>
                            </div>
                            <div className='py-[24px] px-[20px] border-[1px] border-[#ebebf0] rounded-[8px] flex flex-col  items-center h-[100%] w-[100%] ml-[20px]'>
                                <Image className='' src='/g.webp' width={64} height={64} alt='m' />
                                <p className='uppercase m-[0px] leading-[1.5] text-[12px] font-semibold text-[#8f90a6] whitespace-nowrap'>login via google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
