import React from "react";

const LButton = ({text}) => {

    return(
        <button className="bg-[#1f1d75] rounded-lg h-40 my-1 w-[100px] active:bg-black">
            {text}
        </button>
    )
}
export default LButton