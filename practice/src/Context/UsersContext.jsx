import React, { createContext } from 'react'

export const UserContext=createContext()

const UsersContextProvider = ({children}) => {
    const userDetails={
        name:"ahamathbasha",
        email:"ahamathbasha@gmail.com"
    }


  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  )
}

export default UsersContextProvider
