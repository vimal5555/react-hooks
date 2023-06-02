import React, { useRef } from 'react'

export default function Fifth() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Use Ref</h1>
      <input className="form-control" type="text" placeholder='Ex..' ref={inputRef} />
      <button className="btn btn-outline-primary" onClick={onClick}>Change</button>
    </div>
  )
}
