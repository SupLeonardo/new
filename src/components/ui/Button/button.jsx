import React from "react";

const Button = ({text, setText, cls}) => {
    const click = () => {
        if (text=='C') {
            setText("")
        }
    }
    let f = '  font-bold text-white text-lg rounded-full h-[10vh] w-[10vh] my-1 mx-1 ' + cls
    return(
        <button onClick={click} className={f}>
            {text}
        </button>
        
    )    
}
export default Button