import React from "react";

const Button = ({text, setText}) => {
    const click = () => {
        setText(text)
    }
    return(
        <button onClick={click} className={' bg-emerald-700 font-bold text-white text-lg rounded-full h-[10vh] w-[10vh] my-1 mx-1 active:bg-emerald-500'}>
            {text}
        </button>
        
    )    
}
export default Button