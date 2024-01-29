import React from "react";

const LButton = ({text}) => {

    return(
        <button className="bg-[#1f1d75] rounded-2xl h-[10vh] w-[10vh] my-1 mx-1 active:bg-black">
            {text}
        </button>
    )
}
export default LButton