import React, { useEffect, useState } from "react";



const MButton = ({text}) => {

    
    return (
        <button className="bg-[#3a59e2] text-white rounded-lg h-40 my-1 w-[100px] active:bg-[#1e2442]">
            {text}
        </button>
    )
}

export default MButton;