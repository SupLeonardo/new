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
    <div className='flex justify-center items-end h-[100%] w-[100%]'>
      <div className=" bg-slate-500 h-[71vh] w-full md:h-[40vh] grid rounded-lg grid-rows-4 grid-cols-4">
        <LButton text=''></LButton>
        <LButton text=''></LButton>
        <LButton text=''></LButton>
        <LButton text=''></LButton>

        <MButton text='1'></MButton>
        <MButton text='2'></MButton>
        <MButton text='3'></MButton>
        <LButton text=''></LButton>

        <MButton text='4'></MButton>
        <MButton text='5'></MButton>
        <MButton text='6'></MButton>
        <LButton text=''></LButton>

        <MButton text='7'></MButton>
        <MButton text='8'></MButton>
        <MButton text='9'></MButton>
        <LButton text=''></LButton>
      </div>  
    </div>
  )
}

export default App