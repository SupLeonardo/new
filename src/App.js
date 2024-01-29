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
  // const [text, setText] = useState('s')
  // const handleChange = (text) => {
  //   setText(text)
  // }
  
   
  return (
    <div className='flex flex-col justify-center items-end h-[100%] w-[100%]'>
      <div className="grow h-[100%] w-[100%]"></div>
      <div className="md:bg-slate-500 h-[calc(100dvh)] w-full md:h-[40vh] flex flex-col p-2 justify-center rounded-lg items-end grid-rows-4 grid-cols-4">
        <div className="w-full flex justify-center">
        <MButton text='C'/>
        <MButton text='%'/>
        <MButton text='<='/>
        <MButton text='/'/></div>

        <div className="w-full flex justify-center">
        <Button text='7'/>
        <Button text='8'/>
        <Button text='9'/>
        <MButton text='X'/></div>

        <div className="w-full flex justify-center">
        <Button bg='1' text='4'/>
        <Button text='5'/>
        <Button text='6'/>
        <MButton text='-'/></div>

        <div className="w-full flex justify-center">
        <Button text='1'/>
        <Button text='2'/>
        <Button text='3'/>
        <MButton text='+'/></div>

        <div className="w-full flex justify-center">
        <Button className='bg-white' text='0'/>
        <Button text='00'/>
        <Button text=','/>
        <MButton text='='/></div>
      </div>  
    </div>
  )
}

export default App