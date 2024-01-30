import React from "react";

const MButton = ({text}) => {

    return(
        <button className={' active:bg-sky-500 font-bold text-white text-lg rounded-full h-[10vh] w-[10vh] my-1 mx-1 bg-sky-900'}>
            {text}
        </button>
        
    )    
}
export default MButton