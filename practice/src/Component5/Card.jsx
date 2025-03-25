import React, { useEffect, useState } from 'react'

const Card = () => {
    const [profile,setProfile] = useState([])
    const [noOfProfile,setNoOfProfile] = useState("")
    const [name,setName] = useState("")

    // async function generateProfile(count){
    //     try{
    //         const ran=Math.floor(1+Math.random()*1000)
    //         const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
    //         const data=await response.json()
    //         setProfile(data)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     generateProfile(10)
    // },[])

    async function generateName(name){
        try {
            const response=await fetch(`https://api.github.com/users/${name}`)
            const data=await response.json()
            setProfile([data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        generateName('petertodd')
    },[])


  return (
    <div>

        {/* <input type="text" value={noOfProfile} onChange={(e)=>setNoOfProfile(e.target.value)}/>

        <button onClick={generateProfile(Number(noOfProfile))}>Generate No Of Profile</button> */}

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

        <button onClick={generateName(name)}>generate by name</button>

        <div>
            {
                profile.map((val)=>(
                    <div key={val.id}>
                        <img src={val.avatar_url} alt="" />
                        <h2>{val.login}</h2>
                        <a href={val.html_url} target="_blank">Profile</a>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Card
