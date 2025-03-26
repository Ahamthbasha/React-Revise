import React, { useContext } from 'react'
import { UserContext } from './UsersContext'
import { ThemeContext } from './ThemeContext'

const Dashboard = () => {
    const userDetails=useContext(UserContext)
    const {theme,toggleTheme} = useContext(ThemeContext)
    console.log(theme)

    const backgroundColor = theme === "light" ? "#ffffff" : "#333333";
  return (
    <div style={{backgroundColor}}>
      <h1>{userDetails.name}</h1>
      <h2>{userDetails.email}</h2>

      <button onClick={toggleTheme}>Toggletheme</button>
    </div>
  )
}

export default Dashboard
