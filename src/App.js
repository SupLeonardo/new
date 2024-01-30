import React, { useState } from "react";
import MButton from "./components/ui/Button/accentbutton";
import "./App.css"
import UInput from "./components/ui/Input/input";
import Button from "./components/ui/Button/button";

function App() {
  
  // const [count, setCount] = useState(0)
  // function Counter() {
  //   setCount(count+1)
  // }

  // for controlled element
  
  let exist = ''
  const [text, setText] = useState('')
  const handleChange = (text, exist) => {
    setText(text)
  }
  
   
  return (
    <div className='flex flex-col justify-center items-end h-[100%] w-[100%]'>
      <div className="grow h-[100%] w-[100%] flex items-end justify-end font-semibold text-[70px] text-white px-[3vh] py-4">
        <h1 className="">{text}</h1>
      </div>
      <div className="md:bg-slate-500 h-[calc(100dvh)] w-full md:h-[40vh] flex flex-col p-2 justify-center rounded-lg items-end grid-rows-4 grid-cols-4">
        <div className="w-full flex justify-center">
        <MButton text='C'/>
        <MButton text='%'/>
        <MButton text='<='/>
        <MButton text='/'/></div>

        <div className="w-full flex justify-center">
        <Button setText={handleChange} text='7'/>
        <Button setText={handleChange} text='8'/>
        <Button setText={handleChange} text='9'/>
        <MButton text='X'/></div>

        <div className="w-full flex justify-center">
        <Button setText={handleChange} text='4'/>
        <Button setText={handleChange} text='5'/>
        <Button setText={handleChange} text='6'/>
        <MButton text='-'/></div>

        <div className="w-full flex justify-center">
        <Button setText={handleChange} text='1'/>
        <Button setText={handleChange} text='2'/>
        <Button setText={handleChange} text='3'/>
        <MButton text='+'/></div>

        <div className="w-full flex justify-center">
        <Button setText={handleChange} text='0'/>
        <Button setText={handleChange} text='00'/>
        <Button text=','/>
        <MButton text='='/></div>
      </div>  
    </div>
  )
}

export default App