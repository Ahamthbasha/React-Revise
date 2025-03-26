import React, { useContext } from 'react'
import { userContext } from './UserContext'

const Profile = () => {

    const userDetails=useContext(userContext)
  return (
    <div>
        <h1>{userDetails.name}</h1>
        <h2>{userDetails.email}</h2>
      
    </div>
  )
}

export default Profile
