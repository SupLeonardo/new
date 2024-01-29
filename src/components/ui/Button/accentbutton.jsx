import React from "react";

const MButton = ({text}) => {

    return(
        <button className={'bg-[#5f6bd8]  font-bold text-white text-lg rounded-full h-[10vh] w-[10vh] my-1 mx-1 active:bg-slate-500'}>
            {text}
        </button>
        
    )    
}
export default MButton