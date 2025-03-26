import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Post = () => {

    const {data,load,error} = useContext(DataContext)

    if(load){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
      {
        data && 

        <ul>
            {
                data.map((data)=>(
                    <li key={data.id}>{data.userId} and {data.title}</li>
                ))
            }
        </ul>
        
      }
    </div>
  )
}

export default Post