// import React,{useEffect, useReducer} from 'react'

// const reducer=(state,action) => {
//     switch(action.type){
//         case "REFRESH_FETCH":
//             return {...state,load:true}
//         case "FETCHCOMPLETED":
//             return {...state,users:action.payload,load:false,error:''}
//         case "FETCHFAILED":
//             return {...state,error:action.payload}
//         default:
//             return state
//     }
// }

// const UserrContext = () => {
//     const [state,dispatch] = useReducer(reducer,{
//         users:[],
//         load:false,
//         error:""
//     })

//     async function context(){
//         try {
//             dispatch({type:"REFRESH_FETCH"})
//             const response = await fetch("https://jsonplaceholder.typicode.com/users")
//             const data=await response.json()
//             dispatch({type:"FETCHCOMPLETED",payload:data})
//         } catch (error) {
//             dispatch({type:"FETCHFAILED",payload:error.message})
//         }
//     }

//     useEffect(()=>{
//         context()
//     },[])

//     if(state.load){
//         return <h1>Loading..</h1>
//     }

//     if(state.error){
//         return <h1>{state.error}</h1>
//     }
//   return (
//     <div>
//         <ul>
//         {
//         state.users.map((user)=>(
//             <li key={user.id}>{user.name}</li>
//         ))
//         }
//         </ul>
//     </div>
//   )
// }

// export default UserrContext


// import React, { useEffect, useReducer } from 'react'

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "REFETCH":
//             return {...state,load:true}
//         case "FETCH":
//             return {
//                 ...state,
//                 users:action.payload,
//                 load:false,
//                 error:''
//             }
//         case "FAIL":
//             return{
//                 ...state,
//                 users:[],
//                 error:action.payload
//             }
//         default :
//         return state
//     }
// }

// const UserrContext = () => {
//     const [state,dispatch] = useReducer(reducer,{
//         users:[],
//         load:false,
//         error:''
//     })

//     async function getUsers(){
//         dispatch({type:"REFETCH"})
//         try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/users")

//         const data=await response.json()

//         dispatch({type:"FETCH",payload:data})

//         } catch (error) {
//             dispatch({type:"FAIL",payload:error.message})
//         }
//     }

//     useEffect(()=>{
//         getUsers()
//     },[])

//     if(state.load){
//         return <h1>Loading...</h1>
//     }

//     if(state.error){
//         return <h1>{state.error}</h1>
//     }

//   return (
//     <div>
//       {
//         <ul>
//             {
//                 state.users.map((user)=>(
//                     <li key={user.id}>{user.name}</li>
//                 ))
//             }
//         </ul>
//       }
//     </div>
//   )
// }

// export default UserrContext

import React, { createContext,useReducer,useEffect } from 'react'

export const userContext = createContext()

const reducer=(state,action) => {
    switch(action.type){
        case "REFRESH":
            return {...state,load:true}
        case "FETCH":
            return {...state,users:action.payload,load:false,error:''}
        case "FAIL":
            return {...state,users:[],error:error.message}
        default:
            return state
    }
}

const UserrContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,{
        users:[],
        load:false,
        error:''
    })

    async function fetchUser(){
        
        try {
            dispatch({type:"REFRESH"})
            const response=await fetch("https://jsonplaceholder.typicode.com/users")

            const data=await response.json()


            dispatch({type:"FETCH",payload:data})
        } catch (error) {
            dispatch({type:"FAIL",payload:error.message})
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

  return (
    <userContext.Provider value={{state,fetchUser}}>
      {children}
    </userContext.Provider>
  )
}

export default UserrContextProvider

