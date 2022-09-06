import React from "react";
import Card from "./Card";
import Filter from "./Sidebar";

export default function Homee({ cardata }) {
    return (
        <div className="flex gap-[24px] bg-[#FAFAFC] px-[60px]" >
            <Filter filterData={cardata} />
            <Card car_Data={cardata} />
        </div>
    );
}