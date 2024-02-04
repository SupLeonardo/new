import React, { useState } from "react";
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
  const [text, setText] = useState('0')
  const handleChange = (text) => {
    setText(text)
  }
  
   
  return (
    <div className='flex flex-col justify-center items-end h-[100%] w-[100%]'>
      <div className="grow h-[100%] w-[100%] sm:my-5 sm:h-[80vh] flex items-end justify-end sm:mr-[25.3rem] font-semibold text-[70px] text-white px-[3vh] py-4">
        <h1 className="sm:text-8xl sm:mr-[21.5rem] sm:mb-4">{text}</h1>
      </div>
      <div className=" h-[calc(100dvh)] w-full sm:h-[40vh] sm:mb-[10rem] sm:mt-10 flex flex-col p-2 justify-center rounded-lg items-end grid-rows-4 grid-cols-4">
        <div className="w-full flex justify-center">
        <Button cls='active:bg-sky-500 bg-sky-900' setText={handleChange} text='C'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='%'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='⌫'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='/'/></div>

        <div className="w-full flex justify-center">
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='7'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='8'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='9'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='X'/></div>

        <div className="w-full flex justify-center">
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='4'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='5'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='6'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='—'/></div>

        <div className="w-full flex justify-center">
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='1'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='2'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='3'/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='+'/></div>

        <div className="w-full flex justify-center">
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='0'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text='00'/>
        <Button cls='bg-emerald-700 active:bg-emerald-500' setText={handleChange} text=','/>
        <Button cls='active:bg-sky-500 bg-sky-900' text='='/></div>
      </div>  
    </div>
  )
}

export default App