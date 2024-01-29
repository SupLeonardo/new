import React from "react";

const Button = ({text}) => {

    return(
        <button className={'bg-[#464646] font-bold text-white text-lg rounded-full h-[10vh] w-[10vh] my-1 mx-1 active:bg-slate-500'}>
            {text}
        </button>
        
    )    
}
export default Button