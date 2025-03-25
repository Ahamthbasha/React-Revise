import { useState,useEffect } from "react"


export default function useFetch(){
            const [profile,setProfile] =useState([])
            const [noOfProfile,setnoOfProfile]=useState("")
            const [name,setName]=useState("")
    
            async function generateProfile(count){
                try{
                const ran=Math.floor(1+Math.random()*10000)
                const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
                const data=await response.json()
                setProfile(data)
                }
                catch(error){
                    console.log(error)
                }
            }
    
            useEffect(()=>{
                generateProfile(10)
            },[])
    
    
            async function generateProfileByName(name){
                try{
                const response=await fetch(`https://api.github.com/users/${name}`)
                const data=await response.json()
                setProfile([data])
                }
                catch(error){
                    console.log(error)
                }
            }
        
            useEffect(()=>{
                generateProfileByName('petertodd')
            },[])

            console.log("custom hook")

            return {
                generateProfile,generateProfileByName,setnoOfProfile,setName,profile,noOfProfile,name
            }
}


