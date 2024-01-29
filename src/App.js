import React, { useState } from "react";
import MButton from "./components/ui/Button/1button";
import "./App.css"
import UInput from "./components/ui/Input/input";
import LButton from "./components/ui/Button/2button";

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
      <div className="grow"></div>
      <div className="md:bg-slate-500 h-[calc(100dvh)] w-full md:h-[40vh] flex flex-col justify-center rounded-lg items-end grid-rows-4 grid-cols-4">
        <div className="w-full flex justify-center"><LButton text='C'></LButton>
        <LButton text='%'></LButton>
        <LButton text='<'></LButton>
        <LButton text='/'></LButton></div>

        <div className="w-full flex justify-center"><MButton text='7'></MButton>
        <MButton text='8'></MButton>
        <MButton text='9'></MButton>
        <LButton text='X'></LButton></div>

        <div className="w-full flex justify-center"><MButton text='4'></MButton>
        <MButton text='5'></MButton>
        <MButton text='6'></MButton>
        <LButton text='-'></LButton></div>

        <div className="w-full flex justify-center"><MButton text='1'></MButton>
        <MButton text='2'></MButton>
        <MButton text='3'></MButton>
        <LButton text='+'></LButton></div>

        <div className="w-full flex justify-center"><MButton text='0'></MButton>
        <MButton text='00'></MButton>
        <MButton text=','></MButton>
        <LButton text='='></LButton></div>
      </div>  
    </div>
  )
}

export default App