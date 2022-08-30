import React from "react";
import Card from "./card";
import Filter from "./sidebar";

export default function Homee() {
    return (
        <div className="flex gap-[24px] bg-[#FAFAFC] px-[60px]">
            <Filter />
            <Card />

        </div>
    );
}
