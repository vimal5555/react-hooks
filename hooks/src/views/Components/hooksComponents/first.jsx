import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";

export default function First() {

     const [counter, setCounter] = useState(0);
     const onSubmit = () => {

     }

     return (
          <div>
               <h1>{counter}</h1>
               <button className="btn btn-outline-primary" onClick={() => {
                    setCounter(counter + 1);
               }}><FcPlus /></button>
          </div>
     )
}
