import React from 'react'
import Header from '../component/header'
import Image from 'next/image'
import Footer from '../component/footer'

export default function CarDetails() {
    return (
        <>
            <Header />
            <div className='w-[1440px] bg-black'>
                <div className='flex gap-[543px] h-[160px] bg-white'>
                    <div className='flex flex-col gap-[8px]'>
                        <div className='flex items-center gap-[16px] ml-[60px]  pt-[36px] '>
                            <div className=' w-[36px] h-[36px] rounded-[50%] border-[#FF8800]  border-[1px] flex justify-center items-center'>
                                <div><img src='back.png' alt='back' /></div>
                            </div>
                            <label className='font-bold not-italic text-[32px] leading-[44px] text-[#28293D]'>2022 Ford F-250 Super Duty</label>
                        </div>
                        <div className='flex flex-col text-[#8F90A6] font-normal ml-[112px]'>
                            <label className='text-[16px] leading-[24px] tracking-[0.2px]'>Covert Buick GMC  •  3,518 Mileage  •  Black</label>
                            <label className='text-[16px] leading-[24px] tracking-[0.2px]'>Austin, Texas</label>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='flex pt-[39px]'>
                            <label className='text-[#28293D] font-semibold text-[28px] leading-[38px]'>$87,698</label>
                            <div className='py-[13px] ml-[8px]'><img alt='q' src='/q.png' /></div>
                        </div>
                        <div className='w-[137px] h-[36px] ml-[24px] bg-gradient-to-l from-[#E63535] to-[#FF8800] rounded-[10px] flex justify-center gap-[2px] mt-[40px]'>
                            <div className='text-white text-[14px] not-italic font-medium leading-[24px] flex items-center'>Invite dealer</div>
                            <div className='pt-[10px]'><img src='/d.png' alt='d' /></div>
                        </div>
                    </div>
                </div>
                <div className=' h-[108px]  bg-[#FFF8E6] flex flex-col gap-[16px]'>
                    <div className='flex items-center pt-[24px] pl-[112px] gap-[4px]'>
                        <div ><img src='/rs.png' alt='rs' /></div>
                        <label className='text-[#05A660] not-italic font-semibold text-[12px] leading-[20px] uppercase'>Special offers</label>
                    </div>
                    <div className='pl-[112px] flex gap-[16px]'>
                        <label>•  100% credit approval guaranteed</label>
                        <label>•  Complimentary 101pt safety check</label>
                    </div>
                </div>
                <div className='pb-[36px]'>
                    <div className='flex justify-center mt-[36px]'>
                        <img src='/carimg.png' width="872px" />
                    </div>
                    <div className='flex gap-[32px] justify-center mt-[36px] items-center'>
                        <div className=' w-[36px] h-[36px] rounded-[100%] bg-white flex justify-center items-center '>
                            <div ><img src='/lcve.png' /></div>
                        </div>
                        <div className='flex justify-center gap-[9px]'>
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                            <img src='/carimg.png' width="140px" />
                        </div>
                        <div className=' w-[36px] h-[36px] rounded-[100%] bg-white flex justify-center items-center '>
                            <div><img src='/rcve.png' /></div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#FAFAFC] flex justify-center'>
                    <div className='bg-white h-[388px] pt-[36px] mt-[64px] w-[1320px] pl-[36px] rounded-[10px]'>
                        <div>
                            <label className=' text-[#28293D] not-italic font-bold text-[32px] leading-[44px]'>Car details</label>
                        </div>
                        <div className='flex mt-[36px] gap-[60px]'>
                            <div className=' flex flex-col gap-[24px]'>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/ucar.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Car type</label>
                                        <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>Used Car</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/milleage.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Mileage</label>
                                        <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>3,518</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/ucar.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Trim</label>
                                        <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>King ranch</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/ucar.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Engine</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>8.0c diesel direct injection intercooled turbo diesel V-8 6.7 L/406</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/year.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Year</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>2022</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/clr.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Exterior color</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px] uppercase'>Black</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/trs.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Transmission</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>6-speed automatic w/OD</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[24px]'>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/vin.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px]'>VIN</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>1FT8W2BT9NEC44986</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/fuel.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Fuel </label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>Diesel fuel</label>
                                    </div>
                                </div>
                                <div className='flex gap-[16px]'>
                                    <div className='w-[36px] h-[36px] bg-[#E4E4EB] rounded-[8px] flex justify-center items-center'>
                                        <div><img src='/year.png ' /></div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] uppercase'>Drivetrain</label>
                                        <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>4WD</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className=' bg-[#FAFAFC] flex justify-center '>
                    <div className='bg-white h-[564px] pt-[36px] mt-[64px] mb-[64px] w-[1320px] pl-[36px] rounded-[10px]'>
                        <div>
                            <label className=' text-[#28293D] not-italic font-bold text-[32px] leading-[44px]'>Other features</label>
                        </div>
                        <div className='flex  mt-[36px] gap-[60px]'>
                            <div className='flex flex-col gap-[16px]'>
                                <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>ENGINE: 6.7L 4V OHV POWER STROKE V8 TURBO</label>
                                <label>240 Amp Alternator</label>
                                <label>750 CCA Batteries</label>
                                <label>Power Steeringr</label>
                                <label>Brake Assist</label>
                                <label>Tires - Rear All-Terrainr</label>
                                <label>Heated Mirrors</label>
                                <label>Power Folding Mirrors</label>
                                <label>Intermittent Wipers</label>
                                <label>Running Boards/Side Steps</label>
                                <label>Automatic Highbeams</label>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>DIESEL B20 -inc: manual push-button engine...</label>
                                <label>3.31 Axle</label>
                                <label>Four Wheel Drive</label>
                                <label>ABS</label>
                                <label>Aluminum Wheels</label>
                                <label>Conventional Spare Tire</label>
                                <label>Power Mirror(s)</label>
                                <label>Rear Defrost</label>
                                <label>Variable Speed Intermittent Wipers</label>
                                <label>Daytime Running Lights</label>
                                <label>Fog Lamps</label>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <label className='w-[314px] text-[#28293D] not-italic font-medium text-[14px] leading-[20px]'>48 Gallon Fuel Tank</label>
                                <label>Ratio Dual 78-AHr</label>
                                <label>Tow Hitch</label>
                                <label>4-Wheel Disc Brakes</label>
                                <label>Tires - Front All-Terrain</label>
                                <label>Tow Hooks</label>
                                <label>Integrated Turn Signal Mirrorss</label>
                                <label>Privacy Glass</label>
                                <label>Intermittent Wipers</label>
                                <label>Rain Sensing Wipers</label>
                                <label>Automatic Headlights</label>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}