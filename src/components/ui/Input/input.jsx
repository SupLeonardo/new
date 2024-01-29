import React, { useState } from "react";

const UInput = ({onChange}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    

    return (
        <input className=" border-8 border-violet-600 border-solid h-[50px]" onChange={handleChange}/>
    )
}

export default UInput