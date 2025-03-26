// import React, {useReducer, useRef } from 'react'

// const Question = () => {
//     const reducerFn=(state,action)=>{
//         switch(action.type){
//             case "ADDUSER":
//                 return {...state,user:[...state.user,action.payload]}
//             default:
//                 return state
//         }

//     }
//     const [state,dispatch] = useReducer(reducerFn,{
//         user:[]
//     })

//     const nameRef=useRef(null)
//     const ageRef= useRef(null)

//     const handle=()=>{
//         const name=nameRef.current.value
//         const age=Number(ageRef.current.value)

//         const category= age > 18 ? "adult":"not adult"

//         dispatch({type:"ADDUSER",payload:{name,age,category}})

//         nameRef.current.value=''
//         ageRef.current.value=''

//     }
//   return (
//     <div>
//       <input type="text" placeholder='enterName' ref={nameRef}/>
//       <br /><br />

//       <input type="text" placeholder='enter Age'  ref={ageRef}/>

//       <br /><br />

//       <button onClick={handle}>Add user</button>

//       <ul>
//         {
//             state.user.map((u)=>{
//                 return <li key={u.name}>{u.name}-{u.age}-{u.category}</li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Question

// import React, {useReducer, useRef } from 'react'

// const Question = () => {

//     const reducerFn=(state,action)=>{
//         switch(action.type){
//             case "ADDUSER":
//                 return {
//                     ...state,
//                     user:[...state.user,action.payload]
//                 }
//             default:
//                 return state
//         }
//     }

//     const nameRef=useRef(null)
//     const ageRef=useRef(null)

//     const [state,dispatch] = useReducer(reducerFn,{
//         user:[]
//     })

//     const handleSubmit=()=>{
//         const name=nameRef.current.value
//         const age=Number(ageRef.current.value)
//         const category=age > 18 ? "Adult" : "Not adult"

//         dispatch({type:"ADDUSER",payload:{id:Date.now(),name,age,category}})

//         nameRef.current.value=''
//         ageRef.current.value=''
//     }

//   return (
//     <div>
//       <input type="text" placeholder='enter name' ref={nameRef} />
// <br /><br />
//       <input type="text" placeholder='enter age' ref={ageRef}/>
// <br /><br />
//       <button onClick={handleSubmit}>submit</button>

//       <ul>
//         {
//             state.user.map((u)=>{
//                 return <li key={u.id}>{u.name}-{u.age}-{u.category}</li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Question

// import React,{useState} from 'react'

// const Question = () => {
//     const [count,setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

//       <button onClick={()=>{
//         if(count > 0){
//             setCount((count)=>count-1)
//         }
//       }
//       }>Decrement</button>

//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default Question


// import React, { useState,memo, useCallback } from 'react'

// const ChildComponent=memo(({count,Increment})=>{
//     console.log("child component")
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={Increment}>Increment</button>
//         </>
//     )
// })

// const Question = () => {
//     const [count,setCount] = useState(0)
//     const [text,setText] = useState('')

//     console.log("parent component")

//     const Increment=useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])
//   return (
//     <div>
//       <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>

//       <ChildComponent count={count} Increment={Increment}/>
//     </div>
//   )
// }


// export default Question


import React, { useState,useMemo } from 'react'

const Question = () => {
    const [no,setNo] = useState('')
    const [text,setText] = useState('')
    const square=useMemo(()=>{
        console.log("function created")
        return no*no
    },[no])
    console.log("parent component")
  return (
    <div>
      <input type="text" placeholder='enter text' value={text} onChange={(e)=>setText(e.target.value)}/>
      

      <input type="text" placeholder='no' value={no} onChange={(e)=>setNo(parseInt(e.target.value))} />

      <h2>{square}</h2>
    </div>
  )
}

export default Question
