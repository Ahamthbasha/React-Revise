import React, {useState, useEffect } from 'react'
import UseFetch from './UseFetch'

const Card = () => {
    console.log("body first")
    const {generateProfile,generateProfileByName,setnoOfProfile,setName,profile,noOfProfile,name}    =UseFetch()
    console.log("body last")
    
      return (
    
        <div>
            <div className='searchNumber'>
            <input type="text" className='input' value={noOfProfile} onChange={(e)=>setnoOfProfile(e.target.value)}/>
            <button onClick={()=>generateProfile(Number(noOfProfile))}>search By Profile</button>
            </div>
            

            <div className="searchName">

                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                <button onClick={()=>generateProfileByName(name)}>Search By Name</button>

            </div>
        <div className="profile">
    
            {
                profile.map((val)=>(
                    <div key={val.id} className='card'>
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