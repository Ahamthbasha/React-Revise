import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Github = () => {
    const {name}=useParams()
    const [data,setData] = useState(null)

    async function generateProfile(){
        try {
            const response=await fetch(`https://api.github.com/users/${name}`)
            const data=await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        generateProfile()
    },[])

  return (
    <div>
      <img src={data?.avatar_url} alt="" />
      <h1>{data?.login}</h1>
    </div>
  )
}

export default Github
