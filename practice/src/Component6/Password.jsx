import React, { useCallback, useEffect, useState } from 'react'

const Password = () => {
    const [password,setPassword] = useState("")
    const [length,setLength] = useState(0)
    const [noChanged,setNoChanged] = useState(false)
    const [charChanged,setCharChanged] = useState(false)

    const generatePassword=useCallback(() => {
        console.log('useCallback executed')
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(noChanged){
            str+="0123456789"
        }

        if(charChanged){
            str+="!@#$%^&*()_+~/"
        }

        let pass=""
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass)
    },[length,noChanged,charChanged])

    useEffect(()=>{
        generatePassword()
        console.log("use Effect")
    },[generatePassword])


  return (
    <div>
    <h1>password is :{password}</h1>

      <input type="range" min={5} max={100} value={length} onChange={(e)=>setLength(e.target.value)}/>

      <p>length is :{length}</p>

      <input type="checkbox" defaultChecked={noChanged} onChange={()=>setNoChanged(!noChanged)} />

      <label>no </label>

      <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)} />
      <label>Char</label>


    </div>
  )
}

export default Password
