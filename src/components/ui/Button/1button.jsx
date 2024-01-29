import React, { useEffect, useState } from "react";



const MButton = ({text}) => {

    
    return (
        <button className="bg-[#3a59e2] text-white rounded-2xl h-34 my-1 w-[10vh] mx-1 active:bg-[#1e2442]">
            {text}
        </button>
    )
}

export default MButton;