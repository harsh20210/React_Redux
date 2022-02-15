import React, { useState } from 'react'
import {useSelector , useDispatch} from "react-redux";
import {incNumber} from './action/index';
import {decNumber} from './action/index';

export default function App() {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h1>Redux</h1>

      <div>
        <p>Increment/Decrement Counter</p>
        <p>Using React & Redux</p>
      </div>

      <div >
        <a name="increment"  ><span onClick={()=>dispatch(incNumber())}>+</span></a>
        <input name="value"  value={myState}></input>
        <a name="decrement" ><span onClick={()=>dispatch(decNumber())}>-</span></a>
      </div>

    </div>
  )
}
