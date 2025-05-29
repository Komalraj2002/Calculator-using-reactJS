import React from 'react'
import { useState } from 'react';


const Calculator = () => {
const [data , setData] = useState("");
const getValue = (event)=>{
    // console.log(event.target.value);
    setData(data.concat(event.target.value))
}

const getResult = ()=>{
    setData(eval(data).toString()) // the eval take the input 2+2 string and return number so converted into string again so it can concat
}

const getBack = ()=>{
  setData(data.slice(0,-1))  // 0 is included , -1 is excluded in the slice 
}

const getClear = ()=>{
  setData("")  //empty
}

  return (
    <>
    <div className='container'>
     <h1>CALCULATOR</h1>
     
      <div>
        <input placeholder='0' value={data}/>
      </div>
<br/>
  <button onClick = {getValue} value="(">(</button>
  <button onClick = {getValue} value=")">)</button>
  <button onClick = {getValue} value="%">%</button>
  <button onClick = {getClear} value="AC">AC</button>

  <button onClick = {getValue} value="9">9</button>
  <button onClick = {getValue} value="8">8</button>
  <button onClick = {getValue} value="7">7</button>
  <button onClick = {getValue} value="/">/</button>

  <button onClick = {getValue} value="6">6</button>
  <button onClick = {getValue} value="5">5</button>
  <button onClick = {getValue} value="4">4</button>
  <button onClick = {getValue}value="*">*</button>

  <button onClick = {getValue} value="3">3</button>
  <button onClick = {getValue} value="2">2</button>
  <button onClick = {getValue} value="1">1</button>
  <button onClick = {getValue}value="-">-</button>

  <button onClick = {getValue} value="0">0</button>
  <button onClick = {getBack} value="Back">Back</button>
  <button onClick = {getResult} value="=">=</button>
  <button onClick = {getValue} value="+">+</button>

    </div>
    </>
  )
}

export default Calculator
