import React, { useContext } from 'react'
import { userContext } from './UserrContext'

const UseData = () => {
    const {state,fetchUser} = useContext(userContext)
    const {users,load,error} = state

    if(load){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
        <button onClick={fetchUser} disabled={load}>
        {load ? "Refreshing..." : "Refresh Data"}
      </button>
        {
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        }
      
    </div>
  )
}

export default UseData
