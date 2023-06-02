import React, { useState, createContext } from 'react'
import Login from './login';
import User from './user';

export const AppContext = createContext(null);

export default function Second() {
  const [userName, setUserName] = useState("")
  return (
    <AppContext.Provider value={{userName, setUserName}}>
      useContext
      <Login /> <User />
    </AppContext.Provider>
  )
}
