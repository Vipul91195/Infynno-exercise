import React from 'react'
import Image from 'next/image'
import Slider from "rc-slider"
import { useState } from "react";
import "rc-slider/assets/index.css";
import { Listbox, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardata, setCars } from '../slice/slice';

export default function Filter(filterData) {
    // console.log(filterData.filterData.model)
    // const filterData = useSelector((state) => state.autodigg.make);

    // const { make, model, body_type, exterior_color, interior_color, transmission, drivetrain, fuel_type, features } = useSelector((state) => state.autodigg);


    const { make, model, body_type, exterior_color, interior_color, transmission, drivetrain, fuel_type, features } = filterData.filterData;

    const carData = useSelector((state) => state.autodigg);
    const dispatch = useDispatch();


    const [multiRange, setMultiRange] = useState(20);
    const [multiRange1, setMultiRange1] = useState([0, 100000]);
    const [multiRange2, setMultiRange2] = useState([2010, 2021]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedPersons, setSelectedPersons] = useState([]);

    const [style, setStyle] = useState(false);

    const newstyle = () => {
        setStyle(!style)
    }

    const [pstyle, setpStyle] = useState(false);

    const Performance = () => {
        setpStyle(!pstyle)
    }

    const [fstyle, setfStyle] = useState(false);

    const featuress = () => {
        setfStyle(!fstyle)
    }

    const [sstyle, setsStyle] = useState(false);

    const showmore = () => {
        setsStyle(!sstyle)
    }

    function isSelected(value) {
        return selectedPersons.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedPersonsUpdated = [
                ...selectedPersons,
                make.find((el) => el === value)
            ];
            setSelectedPersons(selectedPersonsUpdated);
        } else {
            handleDeselect(value);
        }
        setIsOpen(true);
    }

    function handleDeselect(value) {
        const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
        setSelectedPersons(selectedPersonsUpdated);
        setIsOpen(true);
    }

    const carhandler = (e) => {
        // console.log(e.target.value);
        const c_type = carData.car_type.includes(e.target.value) ?
            carData.car_type.filter(car_t => car_t !== e.target.value) :
            [...carData.car_type, e.target.value];

        dispatch(fetchCardata({ car_type: c_type, page: carData.page }));
        dispatch(setCars({
            ...carData,
            car_type: c_type
        }));
    }
    return (
        <div className=' max-w-[312px] h-max border-[1px] rounded-[10px] mb-[50px] bg-white'>
            <div className='pl-[16px]'>
                <div className=' py-[16px] flex flex-col gap-[8px] '>
                    <label className='text-[#28293D] not-italic font-bold text-[16px] leading-[24px]  '>Filter by</label>
                    <div className='w-[30px] h-[2px] bg-[#FF8800] rounded-[10px] '></div>
                </div>
                <div className='flex flex-col gap-[14px] '>
                    <div>
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px]'>CAR TYPE</label>
                    </div>
                    <div className='flex pl-[2px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black ' checked={carData.car_type.includes("Used Car")} onChange={carhandler} type="checkbox" id='used' value="Used Car" name='used' />
                        <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px] ml-[10px]'>Used</label>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black  ml-[30px]' checked={carData.car_type.includes("New Car")} onChange={carhandler} type="checkbox" id='new' value="New Car" name='new' />
                        <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px] ml-[10px]'>New</label>

                    </div>
                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[4px] '></div>
                </div>
                <div className=' py-[16px]'>
                    <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px]'>YOUR ZIP</label>
                    <div className=' relative'>
                        <input type="text" className='w-[280px] h-[48px] border-[1px] border-[#E4E4EB] rounded-[10px] flex  items-center mt-[8px]' />
                        <button className=' absolute top-0 py-[14px] right-8'> <Image src="/aa.png" alt="aa" width="15px" height="20px" /></button>
                    </div>
                </div>
                <div>
                    <div >
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] '>SEARCH WITHIN</label>
                        <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] pl-[121px]'> {multiRange} miles</label>
                    </div>
                    <div className='flex w-[280px] h-[20px] items-center mt-[12px]'>
                        <div className='w-[280px]'>
                            <Slider max={500} min={20}
                                onChange={(e) => setMultiRange(e)}
                                defaultValue={multiRange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>20 miles</label>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] pl-[170px]'>500 miles</label>
                    </div>
                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[16px] '></div>
                </div>
                <div className='pt-[10px]'>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="">
                            <Listbox
                                as="div"
                                className="space-y-1"
                                value={selectedPersons}
                                onChange={(value) => handleSelect(value)}
                                open={isOpen}
                            >
                                {() => (
                                    <>
                                        <Listbox.Label className=" not-italic font-semibold text-[12px] leading-[16px] text-[#8F90A6]">
                                            MAKE
                                        </Listbox.Label>
                                        <div className="relative ">
                                            <span className="inline-block  rounded-[10px] ml-[-10px] mt-[8px] ">
                                                <Listbox.Button
                                                    className="cursor-default relative w-[280px] h-[48px] rounded-[10px] border border-[#E4E4EB]  bg-white pl-[16px] pr-10 text-left focus:outline-none focus:shadow-outline-blue focus:border-orange-600 transition ease-in-out duration-150 text-[14px] leading-[20px]"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    open={isOpen}
                                                >
                                                    <span className="block truncate ">
                                                        {selectedPersons.length < 1
                                                            ? "Select Make"
                                                            : selectedPersons.join(", ")}
                                                    </span>
                                                    <span className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none">
                                                        <div className='flex justify-center '>
                                                            <Image src="/V.png" alt="aa" width="10px" height="6.18px" />
                                                        </div>
                                                    </span>
                                                </Listbox.Button>
                                            </span>

                                            <Transition
                                                unmount={false}
                                                show={isOpen}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
                                            >
                                                <Listbox.Options
                                                    static
                                                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                                >
                                                    {Object.keys(make).map((person) => {
                                                        const selected = isSelected(person);
                                                        return (
                                                            <Listbox.Option key={person} value={person}>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={`${active
                                                                            ? "text-white bg-blue-600"
                                                                            : "text-gray-900"
                                                                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                                    >
                                                                        <span
                                                                            className={`${selected ? "bg-pink-100" : "font-normal"
                                                                                } block truncat`}
                                                                        >
                                                                            {person}
                                                                        </span>
                                                                        {/* {selected && (

                                                                            <span
                                                                                className={`${active ? "text-white" : "text-blue-600"
                                                                                    } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                                            >
                                                                                <svg
                                                                                    className="h-5 w-5"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="currentColor"
                                                                                >
                                                                                    <path
                                                                                        fillRule="evenodd"
                                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                                        clipRule="evenodd"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        )} */}
                                                                    </div>
                                                                )}
                                                            </Listbox.Option>
                                                        );
                                                    })}
                                                </Listbox.Options>
                                            </Transition>
                                            {/* <div className="pt-1 text-sm">
                                                {selectedPersons.length > 0 && (
                                                    <>Selected persons: {selectedPersons.join(", ")}</>
                                                )}
                                            </div> */}
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                    </div>
                    <div className='pt-[16px]'>
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px]'>MODEL</label>
                    </div>
                    {Object.keys(model).splice(0, 5).map((modell, l) => {
                        return (
                            <div key={l} className='pt-[14px] flex flex-col gap-[16px] pl-[2px]'>
                                <div className='flex'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px] ml-[10px]'>
                                        {modell} ({model[modell]})</label>
                                </div>
                            </div>
                        )
                    })}
                    <div className='py-[16px] ' onClick={showmore} >
                        <label className='text-[#FF8800] not-italic font-semibold text-[14px] leading-[20px] mr-[5px] '>Show more</label>
                        <Image src="/Vs.png" alt='vs' width="10px" height="6.18px" />
                    </div>

                    {Object.keys(model).splice(5).map((modell, l) => {
                        return (
                            <div key={l} className={` ${sstyle ? "max-h-[1000px]" : "h-0"} overflow-hidden `}>
                                <div className='flex flex-col gap-[20px] py-[10px]'>
                                    <div className='flex gap-[10px]'>
                                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] '>
                                            {modell}  ({model[modell]})</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB]  '></div>
                </div>
                <div className='mt-[16px]'>
                    <div>
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px]'>BODY TYPE</label>
                    </div>

                    {Object.keys(body_type).map((body, i) => {
                        return (
                            <div key={i} className='flex py-[10px]'>
                                <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                <label className='text-[#28293D] not-italic font-medium text-[14px] leading-[20px] ml-[10px]'>{body}</label>
                            </div>
                        )
                    })}

                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[18px] '></div>
                </div>
                <div className='py-[20px]'>
                    <div className='pb-[12px]' >
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] '>PRICE</label>
                        <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] pl-[155px]'>
                            ${multiRange1[0]} - ${multiRange1[multiRange1.length - 1]}</label>
                    </div>
                    <div className="w-[280px]">
                        <Slider max={100000}
                            range
                            allowCross={false}
                            onChange={(e) => setMultiRange1(e)}
                            defaultValue={multiRange1}
                        />
                    </div>
                    <div className='flex gap-[218px]'>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>$0</label>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>$100,000</label>
                    </div>
                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[16px] '></div>
                </div>
                <div >
                    <div className='pb-[12px]'>
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] '>MAKE YEAR</label>
                        <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] pl-[130px]'>
                            {multiRange2[0]} - {multiRange2[multiRange2.length - 1]}</label>
                    </div>
                    <div className="w-[280px]">
                        <Slider min={1990} max={2021}
                            range
                            allowCross={false}
                            onChange={(e) => setMultiRange2(e)}
                            defaultValue={multiRange2}
                        />
                    </div>
                    <div className='flex gap-[226px] mt-[4px] '>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>1990</label>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>2021</label>
                    </div>
                    <div className='w-[280px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[16px] '></div>
                </div>
                <div className='py-[20px]'>
                    <div className='pb-[12px]'>
                        <label className='text-[#8F90A6] not-italic font-semibold text-[12px] leading-[16px] '>MILEAGE</label>
                        <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] pl-[210px]'>{multiRange}</label>
                    </div>
                    <div className='flex w-[280px] h-[20px] items-center '>
                        <div className='w-[280px]'>

                            <Slider
                                onChange={(e) => setMultiRange(e)}
                                defaultValue={multiRange}
                            />
                        </div>

                    </div>
                    <div className='flex gap-[248px] mt-[4px] '>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>0</label>
                        <label className='text-[#28293D] not-italic font-medium text-[12px] leading-[16px] '>Any</label>
                    </div>
                </div>
            </div>
            <div className='w-[312px] h-[1px] rounded-[10px] bg-[#E4E4EB]  '></div>
            <div className='flex items-center justify-between px-[16px] py-[15px] bg-gray-100 ' onClick={newstyle}>
                <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] '>Style</label>
                <div className='flex justify-center'> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
            </div>
            <div className={` ${style ? "max-h-[1000px]" : "h-0"} overflow-hidden`}>
                <div className='ml-[16px] flex flex-col '>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">exterior color</lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(exterior_color).map((color, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{color}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">interior color</lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(interior_color).map((color, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{color}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='w-[312px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[20px]'></div>

            <div className='flex items-center justify-between px-[16px] py-[15px] bg-gray-100 ' onClick={Performance}>
                <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] '>Performance</label>
                <div className='flex justify-center'> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
            </div>
            <div className={` ${pstyle ? "max-h-[1000px]" : "h-0"} overflow-hidden`}>
                <div className='ml-[16px] flex flex-col '>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        transmission</lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(transmission).map((trans, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{trans}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        drive train
                    </lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(drivetrain).map((drive, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{(drive)}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        fuel type
                    </lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(fuel_type).map((fuel, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{(fuel)}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>



            <div className='w-[312px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[20px]'></div>
            <div className='flex items-center justify-between px-[16px] py-[15px] bg-gray-100 mb-[20px]  ' onClick={featuress}>
                <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] '>features</label>
                <div className='flex justify-center'> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
            </div>
            <div className={` ${fstyle ? "max-h-[2000px]" : "h-0"} overflow-hidden`}>
                <div className='ml-[16px] flex flex-col '>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px]  pb-[10px]">
                        interior features</lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(features["Interior Features"]).map((trans, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{trans}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        technology features
                    </lable>
                    <div className='flex flex-col gap-[20px]'>
                        {Object.keys(features["Technology Features"]).map((drive, c) => {
                            return (
                                <div key={c} className='flex gap-[16px]'>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>{(drive)}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        safety features
                    </lable>
                    <div className='flex flex-col gap-[20px] '>
                        {Object.keys(features["Safety Features"]).map((fue, c) => {
                            return (
                                <div key={c} className='flex gap-[16px] '>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px] '>{(fue)}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        exterior features
                    </lable>
                    <div className='flex flex-col gap-[20px] '>
                        {Object.keys(features["Exterior Features"]).map((fue, c) => {
                            return (
                                <div key={c} className='flex gap-[16px] '>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px] '>{(fue)}</label>
                                </div>
                            )
                        })}
                    </div>
                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">
                        others
                    </lable>
                    <div className='flex flex-col gap-[20px] pb-[20px]'>
                        {Object.keys(features["Others"]).map((fue, c) => {
                            return (
                                <div key={c} className='flex gap-[16px] '>
                                    <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                                    <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px] '>{(fue)}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center justify-between px-[16px] py-[15px] bg-gray-100 mb-[20px] ' onClick={features}>
                <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px]'>features</label>
                <div className='flex justify-center '> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
            </div>

            <div className={` ${fstyle ? "max-h-[1000px]" : "h-0"} overflow-hidden `}>
                <lable className=" uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pl-[16px]">body style</lable>
                <div className='ml-[16px] flex flex-col  pt-[10px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                    </div>


                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">exterior color</lable>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                    </div>

                    <lable className="uppercase text-[#28293D] not-italic font-semibold text-[12px] leading-[24px] pt-[20px] pb-[10px]">interior color</lable>
                    <div className='flex flex-col gap-[20px] pb-[20px]'>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                        <div className='flex gap-[10px]'>
                            <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                            <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>Coupe</label>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='w-[312px] h-[1px] rounded-[10px] bg-[#E4E4EB] '></div> */}
            {/* <div className='ml-[16px]'>
                <div className='flex items-center pt-[15px] pb-[18px]'>
                    <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] '>Rating</label>
                    <div className='flex justify-center ml-[210px]'> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
                </div>
                <div className='flex flex-col gap-[16px] pl-[2px]'>
                    <div className='flex gap-[10px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>only</label>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>and above</label>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>and above</label>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>and above</label>
                    </div>
                    <div className='flex gap-[10px]'>
                        <input className='w-[20px] h-[20px] border-2 rounded border-[#8F90A6] accent-black' type="checkbox" id='used' value="used" name='used' />
                        <Image src="/star.png" alt="star" width="20px" height="18px" />
                        <label className='text-[14px] not-italic font-medium leading-[20px] text-[#28293D] ml-[-6px]'>and above</label>
                    </div>
                </div>
            </div>
            <div className='w-[312px] h-[1px] rounded-[10px] bg-[#E4E4EB] mt-[18px]'></div>
            <div className='flex items-center pt-[15px] pb-[24px]'>
                <label className='text-[#28293D] not-italic font-semibold text-[16px] leading-[24px] ml-[16px]'>Contactless service</label>
                <div className='flex justify-center pl-[124px]'> <Image src="/V.png" alt="aa" width="10px" height="6.18px" /></div>
            </div> */}
        </div >
    )
}

