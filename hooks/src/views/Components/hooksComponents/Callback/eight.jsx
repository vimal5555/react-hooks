import React, { useState, useCallback } from 'react'
import Child from "./Child"

export default function Eight() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Something Here");

  const returnComment = useCallback
    ((name) => {
      return data + name;
    }, [data]);

  return (
    <div className='App'>
      <Child returnComment={returnComment} />
      <button className="btn btn-outline-primary" onClick={() => {
        setToggle(!toggle);
      }}>{" "} Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}
