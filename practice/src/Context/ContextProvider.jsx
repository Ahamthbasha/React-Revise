import React, { createContext,useState } from 'react'

export const context = createContext()


const ContextProvider = ({children}) => {
    const [theme,setTheme] = useState("light")

    const toggleTheme=()=>{
        setTheme((theme)=>theme === "light" ? "dark" : "light")
    }
  return (
    <context.Provider value={{theme,toggleTheme}}>
      {children}
    </context.Provider>
  )
}

export default ContextProvider