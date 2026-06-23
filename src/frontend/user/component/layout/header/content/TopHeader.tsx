"use client";

import React from "react";
import Image from "next/image";
import { TopHeaderContent } from "../constant/TopBar";

function TopHeader(){
    return(
        <div>
            <div className="flex overflow-x-auto max-w-full">
                {TopHeaderContent.map((item) => (
                    <div key={item.id} className="flex-shrink-0 px-4 py-2">
                        <button className="text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TopHeader;