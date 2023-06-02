import React, { useContext } from 'react'
import { AppContext } from './second'

export default function Login() {
     const { setUserName } = useContext(AppContext);

     return (
          <div>
               <h1>Login</h1>
               <input className="form-control" onChange={(e) => { setUserName(e.target.value); }} />
          </div>
     )
}
