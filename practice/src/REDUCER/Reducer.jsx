// import React, {  useReducer } from 'react'

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "SETEMAIL":
//             return {...state,email:action.payload,emailError:''}
//         case "SETPASSWORD":
//             return {...state,password:action.payload,passwordError:''}
//         case 'VALIDATE':
//             let emailError=''
//             let passwordError=''

//         if(!state.email.includes("@") || !state.email.includes(".")){
//             emailError+="email must contain @ and dot"
//         }

//         if(state.password.length < 6){
//             passwordError+="password must be greater than 6"
//         }


//         return {...state,emailError,passwordError}
//         default:
//             return state
//     }
// }

// const Reducer = () => {
//     const [state,dispatch] = useReducer(reducer,{
//         email:'',
//         password:'',
//         emailError:'',
//         passwordError:''
//     })

//     const handleForm=(e)=>{
//         e.preventDefault()
//         dispatch({type:"VALIDATE"})
//     }
//   return (
//     <div>
//         <form onSubmit={handleForm}>
//         <input type="text" placeholder='enter email' value={state.email} onChange={(e)=>dispatch({type:"SETEMAIL",payload:e.target.value})} />
// <br /><br />

// {state.emailError && <p>{state.emailError}</p>}

// <br /><br />
//         <input type="text" placeholder='enter password' value={state.password} onChange={(e)=>dispatch({type:"SETPASSWORD",payload:e.target.value})} />

//         <br /><br />

//         {state.passwordError && <p>{state.passwordError}</p>}

//         <br /><br />

//         <button type="submit">submit</button>
//         </form>
//     </div>
//   )
// }

// export default Reducer


// import React, { useReducer } from 'react'

// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {...state,count:state.count+1}
//         case 'DECREMENT':
//                 return state.count > 0 ?{...state,count:state.count-1}:state
//         case 'RESET':
//             return {...state,count:0}
//         default:
//             return state
//     }
// }

// const Reducer = () => {
//     const [state,dispatch] = useReducer(reducerFn,{
//         count:0
//     })
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
//     </div>
//   )
// }

// export default Reducer


// import React, { act, useReducer } from 'react'

// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case "SETAGE":
//             return {...state,age:action.payload,error:''}
        
//         case "VALIDATE":
//             let error=''
//             let Age=Number(state.age)

//             if(Age > 18){
//                 error+="your vote is eligible"
//             }
//             else{
//                 error+="your vote is not eligible"
//             }

//             return {...state,error}
//         default:
//             return state
//     }
// }

// const Reducer = () => {
//     const [state,dispatch] = useReducer(reducerFn,{
//         age:'',
//         error:''
//     })

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         dispatch({type:"VALIDATE"})
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='enter age' value={state.age} onChange={(e)=>dispatch({type:"SETAGE",payload:e.target.value})}/>

//         <br />
//         <br />
// {state.error && <p>{state.error}</p>}
//         <br />
//         <br />
//         <button type='submit'>submit</button>
//         </form>
//     </div>
//   )
// }

// export default Reducer


// import React, { useReducer,useEffect } from 'react'

// const reducerFn=(state,action) => {
//     switch(action.type){

//         case "REFRESH":
//             return {...state,load:true}

//         case "SETDATA":
//             return {...state,data:action.payload,load:false,error:''}

//         case "SETERROR":
//             return {...state,error:action.payload}

//         default:
//             return state
//     }
// }

// const Reducer = () => {
//     const [state,dispatch] = useReducer(reducerFn,{
//         data:[],
//         load:false,
//         error:''
//     })

//     async function getUser() {
//         try {

//             dispatch({type:"REFRESH"})
//             const response=await fetch('https://jsonplaceholder.typicode.com/users')

//             const data=await response.json()

//             dispatch({type:"SETDATA",payload:data})
//         } catch (error) {
//             dispatch({type:"SETERROR",payload:error.message})   
//         }
//     }

//     useEffect(()=>{
//         getUser()
//     },[])

//     if(state.load){
//         return <h1>Loading...</h1>
//     }

//     if(state.error){
//         return <h1>{state.error}</h1>
//     }

//   return (
//     <div>
//         <h1>fetchdata</h1>
//         {
//             <ul>
//                 {
//                     state.data.map((data)=>{
//                        return <li key={data.id}>{data.name}</li>
//                     })
//                 }
//             </ul>
//         }
//     </div>
//   )
// }

// export default Reducer


import React from 'react'

const Reducer = () => {
  return (
    <div>
      <h1>Lazy loaded component</h1>
    </div>
  )
}

export default Reducer
