import React, { useReducer } from 'react'

export default function Fourth() {

     const reducer = (state, action) => {
          switch (action.type) {
               case "increment":
                    return { count: state.count + 1, showText: state.showText }
               case "showText":
                    return { count: state.count, showText: !state.showText }
               default:
                    return state;
          }
     }

     const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

     return (
          <div>
               <h1>{state.count}</h1>
               <button className="btn btn-outline-primary" onClick={() => { dispatch({ type: "increment" }); }}>Click Me</button>
               <button className="btn btn-outline-primary" onClick={() => { dispatch({ type: "showText" }); }}>Click Me to Change</button>

               {state.showText && <p>Changed</p>}
          </div>
     )
}
