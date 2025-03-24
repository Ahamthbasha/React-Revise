import React from 'react'

const Basic = () => {
    const obj={
        name:"ahamathbasha",
        email:"ahamathbasha@gmail.com"
    }

    const style={
        backgroundColor:"black",
        color:"white"
    }

    const greet=()=>{
        return <h1>Star</h1>
    }

    const newElement=greet()
  return (
    <div>
      <h1>{obj.name} and {obj.email}</h1>
      <h2 style={style}>Basha Ahamathbasha</h2>
      {greet()}
      {newElement}
      
    </div>
  )
}

export default Basic
