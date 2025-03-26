// import React, { createContext, useEffect, useReducer } from 'react'

// export const userContext=createContext()

// const ContextCreatedProvider = ({children}) => {

//     const reducerFn=(state,action)=>{
//         switch(action.type){
//             case "REFRESH":
//                 return {...state,load:true}
//             case "DATA":
//                 return {...state,user:action.payload,load:false,error:''}
//             case "ERROR":
//                 return {...state,error:action.payload}
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,{
//         user:[],
//         load:false,
//         error:''
//     })

//     async function getUser(){
//         try {
            
//             dispatch({type:"REFRESH"})

//             const response=await fetch('https://jsonplaceholder.typicode.com/users')

//             const data=await response.json()

//             dispatch({type:"DATA",payload:data})
//         } catch (error) {
//             dispatch({type:"ERROR",payload:error.message})
//         }
//     }

//     useEffect(()=>{
//         getUser()
//     },[])
//   return (
//     <userContext.Provider value={{state}}>
//       {children}
//     </userContext.Provider>
//   )
// }

// export default ContextCreatedProvider
import React, { createContext, useState } from 'react'

export const toggleContext=createContext()

const ContextCreatedProvider = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const handleToggle=()=>{
        setToggle((curr)=>!curr)
    }

  return (
    <toggleContext.Provider value={{toggle,handleToggle}}>
      {children}
    </toggleContext.Provider>
  )
}

export default ContextCreatedProvider
