import React from "react";

const Button = ({text, setText, cls}) => {
    let click = () => {
        switch(text) {
            case 'C':
                setText('0')
                break;
            case 'X':
                let x = text
            default:
                setText(text)  
        }
    }
    
    let f = 'text-white text-2xl rounded-full h-[10vh] w-[10vh] my-1 mx-1 ' + cls
    return(
        <button onClick={click} className={f}>
            {text}
        </button>
        
    )    
}
export default Button