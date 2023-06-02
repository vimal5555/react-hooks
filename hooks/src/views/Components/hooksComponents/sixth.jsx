import React, { useLayoutEffect, useEffect, useRef } from 'react'

export default function Sixth() {
     const inputRef = useRef(null);
     useLayoutEffect(() => {
          console.log(inputRef.current.value);
     }, []);

     useEffect(() => {
          inputRef.current.value = "hello world";
     }, [])
     return (
          <div>
               <h1>Sixth</h1>
               <input className="form-control" ref={inputRef} value="example" style={{ width: 400, }} />
          </div>
     )
}
