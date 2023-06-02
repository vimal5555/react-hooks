import React from 'react'
import useRandomColor from './Hooks/useRandomColor';

export default function CustomHook() {
     const { color, changeColor } = useRandomColor();
     return (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#" + color }}>
               <h1>CustomHook</h1>
               <button className="btn btn-outline-primary" onClick={changeColor}>Change Color</button>
          </div>

     )
}
