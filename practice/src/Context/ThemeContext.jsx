import React, { createContext, useState } from 'react'

export const ThemeContext=createContext()

const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState("light")

    const toggleTheme=(()=>{
        setTheme((theme)=>theme === "light" ? "dark":"light")
    })
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
