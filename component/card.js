import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'



export default function Card({ car_Data }) {

    const [carData, setCarData] = useState(car_Data.cars);
    const { car_data, isLoading } = useSelector((state) => ({
        car_data: state.autodigg.cars,
        isLoading: state.autodigg.isLoading
    }));

    useEffect(() => {
        car_data.length > 0 && setCarData(car_data);
    }, [car_data])





    return (
        <div className=' w-full'>
            <div className='flex flex-col gap-[26px]'>
                {isLoading ?
                    <div className='w-full h-[5px] bg-orange-500 animate-pulse rounded-[5px]'> </div>
                    :
                    carData && carData.map((alldata, i) => {
                        return (<div key={i} className='h-auto rounded-t-[10px] border-none border-[1px] overflow-hidden'>
                            <div className='flex bg-white '>
                                <div className='w-full  max-w-[360px] h-auto max-h-[254px]' >
                                    {alldata.has_photos === "N" ? <Image src='/car.webp' width={360} height={254} alt='m' /> :
                                        <Image src={alldata.photos[0]} alt='car' width={360} height={254} />
                                    }
                                </div>
                                <div className='flex flex-col justify-between py-[24px] w-full '>
                                    <div className='flex flex-col gap-[4px]  px-[24px]'>
                                        <label className='not-italic font-bold text-[20px] leading-[32px] text-[#28293D]'>{alldata.year} {alldata.make} {alldata.model}</label>
                                        <label className='not-italic font-normal text-[12px] leading-[16px] text-[#8F90A6]'>{alldata.dealership}  •  {alldata.milage} Milage  • {alldata.exterior_color}</label>
                                        <label className='not-italic font-normal text-[12px] leading-[16px] text-[#8F90A6]'>{alldata.city}, {alldata.state}</label>
                                    </div>
                                    <div className='flex items-center justify-between px-[24px]'>
                                        <div className='flex gap-[8px]'>
                                            <label className='text-[#28293] not-italic font-semibold text-[28px] leading-[38px]'>
                                                {alldata.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}  </label>
                                            <div className='py-[13px]'><img alt='q' src='/q.png' /></div>
                                        </div>
                                        <div>
                                            <div className='w-[137px] h-[36px] bg-gradient-to-l from-[#E63535] to-[#FF8800] rounded-[10px] flex justify-center gap-[2px]'>
                                                <div className='text-white text-[14px] not-italic font-medium leading-[24px] flex items-center'>Invite dealer</div>
                                                <div className='pt-[10px]'><img src='/d.png' alt='d' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {alldata.car_offers &&
                                <div className='w-full h-[76px] rounded-b-[10px] border-[1px] border-none bg-[#FFF8E6]'>
                                    <div className='flex items-center pt-[16px] pl-[24px] gap-[4px]'>
                                        <div ><img src='/rs.png' alt='rs' /></div>
                                        <label className='text-[#05A660] not-italic font-semibold text-[12px] leading-[20px] uppercase'>Special offers</label>
                                    </div>
                                    <div className='pl-[24px] flex gap-[16px]'>
                                        <label>•  {alldata.car_offers.split(",")[0].replace(/[\[\]'"]/g, '')}</label>
                                        <label>•  {alldata.car_offers.split(",")[1].replace(/[\[\]'"]/g, '')}</label>
                                    </div>
                                </div>}
                        </div >
                        )
                    })
                }
            </div>

            <div className='pagination-container flex gap-[24px] pt-[64px] justify-center '>
                <Pagination totalCount={car_Data.count} />
            </div>
            <div className=' h-[1px] bg-[#E4E4EB]  mt-[64px]'></div>
            <div className='flex flex-col gap-[12px] mt-[36px] items-center w-full'>
                <label className='text-[#28293D] font-bold font-[28px] leading-[38px] '>Why Autodigg?</label>
                <label className='text-[#8F90A6] font-semibold text-[14px] leading-[20px]  mb-[64px] max-w-[760px] text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</label>
            </div>
        </div>
    )
}

