// import React,{useState} from 'react'

// const Counter = () => {
//     const [count,setCount] = useState(0)

//     const decrease=()=>{
//         if(count <=0){
//             return 
//         }
//         setCount((count)=>count-1)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       <button onClick={decrease}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default Counter


// import React, { useState,useEffect } from 'react'

// const Counter = () => {

//     const [data,setData] = useState([])
//     const [loading,setLoading] = useState(false)
//     const [error,setError] = useState('')

//     async function users(){
//         try {
//             setLoading(true)
//             const response=await fetch(`https://jsonplaceholder.typicode.com/users`)

//             const data=await response.json()

//             setData(data)

//         } catch (error) {
//             setError(error.message)
//         }
//         finally{
//             setLoading(false)
//         }
//     }
//     useEffect(()=>{
//         users()
//     },[])

//     if(loading){
//         return <h1>loading ... </h1>
//     }

//     if(error){
//         return <p>{error}</p>
//     }
//   return (
//     <div>
//      {
//         data.map((val)=>{
//          return   <ul>
//                 <li key={val.id}>{val.name}</li>
//             </ul>
//         })
//      } 
//     </div>
//   )
// }

// export default Counter

// import React, { useEffect, useRef, useState } from 'react'

// const Counter = () => {
//     const [time,setTime] = useState(0)
//     const [running,setRunning] = useState(false)
//     const timeTracker=useRef(null)

//     useEffect(()=>{
//         if(running){
//             timeTracker.current=setInterval(()=>{
//                 setTime((prevTime)=>prevTime+1)
//             },1000)
//         }else{
//             clearInterval(timeTracker.current)
//             timeTracker.current=null
//         }

//         return ()=>{
//             clearInterval(timeTracker.current)
//         }
//     },[running])

//     const start=()=>{
//         if(!running){
//             setRunning(true)
//         }
//     }

//     const Stop=()=>{
//         if(running){
//             setRunning(false)
//         }
//     }

//     const Reset=()=>{
//         Stop()
//         setRunning(false)
//         setTime(0)
//     }
//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={start}>Start</button>
//       <button onClick={Stop}>Stop</button>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter


// import React,{useRef} from 'react'

// const Counter = () => {
//     const inputFocus=useRef(null)

//     const handleClick=()=>{
//         inputFocus.current.focus()
//     }
//     console.log('rendered')
//   return (
//     <div>
//       <input type="text"  ref={inputFocus}/>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default Counter


// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(()=>{
//         const updateWidth=()=>{
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize',updateWidth)

//         // return()=>{
//         //     window.removeEventListener('resize',updateWidth)
//         // }
//     },[])
//   return (
//     <div>
//       <h1>{width}px</h1>
//     </div>
//   )
// }

// export default Counter


// import React, { useState,useEffect } from 'react'

// const Counter = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(()=>{

//         const updateState=()=>{
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize',updateState)

//         return()=>{
//             console.log("old is removed")
//             window.removeEventListener('resize',updateState)
//         }

//     },[])
//   return (
//     <div>
//       <h1>{width}px</h1>
//     </div>
//   )
// }

// export default Counter


// import React, { useState } from 'react'

// const Counter = () => {
//     const [data,setData] = useState("")
//   return (
//     <div>
//       <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>

//       <h1>{data}</h1>
//     </div>
//   )
// }

// export default Counter


// import React, { useRef, useState } from 'react'

// const Counter = () => {

//     const [data,setData] = useState('')
//     const [displayText,setDisplayText] = useState("")
//     const inputRef=useRef(null)

//     const display=()=>{
//         setDisplayText(inputRef.current.value)
//     }
//   return (
//     <div>
//       <input type="text" ref={inputRef} value={data} onChange={(e)=>setData(e.target.value)} />

//       <button onClick={display}>Click</button>

//       <h1>{displayText}</h1>
//     </div>
//   )
// }

// export default Counter


// import React, { useState } from 'react'

// const Counter = () => {
//     const [data,setData] = useState()
//     const [check,setCheck]= useState(false)

//   return (
//     <div>
//     <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>

//     <button onClick={()=>setCheck((curr)=>!curr)}>Show</button>  

//     {check && <p>{data}</p>}
//     </div>
//   )
// }

// export default Counter


// import React, { memo, useState } from 'react'

// const ChildComponent=memo(({count})=>{
//     console.log("child rendered")
//     return(
//         <h1>{count}</h1>
//     )
// })

// const Counter = () => {
//     const [count,setCount] = useState(0)
//     const [text,setText] = useState("")

//     console.log("parent")
//   return (
//     <div>
//         <ChildComponent count={count}/>
//         <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

//         <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//     </div>
//   )
// }

// export default Counter


// import React,{useState,useMemo} from 'react'

// const ExpensiveCalculation =({no})=>{
//     // console.log("rendering calci")

//     // const num = no*no 

//     const num=useMemo(()=>{
//         console.log("rendering calci")
//         return no*no
//     },[no])
//     return <h2>{num}</h2>
// }

// const Counter = () => {
//     const [text,setText] = useState("")
//     const [no,setNo] = useState(1)
//   return (
//     <div>

//       <ExpensiveCalculation no={no}/>
//       <button onClick={()=>setNo((no)=>no+1)}>Increment</button>

//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//     </div>
//   )
// }

// export default Counter

// import React,{useState,useMemo} from 'react'


// const Counter = () => {
//     const [no,setNo] = useState(1)
//     const [text,setText] = useState("")

//     const factorial=useMemo(()=>{
//         let fact=1

//         for(let i=1;i<=no;i++){
//             fact*=i
//         }

//         return fact
//     },[no])
//   return (
//     <div>

//         <h1>factorial is:{factorial}</h1>
//       <input type="text" placeholder='no' value={no} onChange={(e)=>setNo(parseInt(e.target.value))}/>

//       <br /><br />

//       <input type="text" placeholder='text' value={text} onChange={(e)=>setText(e.target.value)}/>
//     </div>
//   )
// }

// export default Counter

// import React, { useState,memo } from "react";

// const ChildComponent = memo(({ title }) => {
//   console.log("Child Component Rendered!");
//   return <h2>{title}</h2>;
// });

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <ChildComponent title="Hello React!" />
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// export default ParentComponent;


// import React, { useState,useMemo } from "react";

// const users = Array.from({ length: 1000 }, (_, i) => `User ${i + 1}`);

// const UserList = () => {
//   const [search, setSearch] = useState("");

//   const filteredUsers = useMemo(()=>(
    
//     users.filter((user) =>
//         user.toLowerCase().includes(search.toLowerCase())
//       )
    
//   ),[search])

//   return (
//     <div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search users..."
//       />
//       <ul>
//         {filteredUsers.map((user, index) => (
//           <li key={index}>{user}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

// import React, { memo, useMemo, useState } from "react";

// const Button = memo(({ label }) => {
//   console.log("Button rendered!");
//   return <button>{label}</button>;
// });

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   const memoizedLabel=useMemo(()=>
//     "clickMe",[])

//   return (
//     <div>
//       <Button label={memoizedLabel} />
//       <button onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </div>
//   );
// };

// export default Parent;

// import React, { useMemo, useState } from "react";

// const numbers = Array.from({ length: 5000 }, () => Math.floor(Math.random() * 100));

// const SumComponent =() => {
//   const [refresh, setRefresh] = useState(false);

//   const sumEvenNumbers =useMemo(()=>{
//     console.log("rendered")
//    return numbers.reduce((sum, num) => {
//         if (num % 2 === 0) {
//           return sum + num;
//         }
//         return sum;
//       }, 0)
//   },[]);

//   return (
//     <div>
//       <h2>Sum of Even Numbers: {sumEvenNumbers}</h2>
//       <button onClick={() => setRefresh(!refresh)}>Refresh</button>
//     </div>
//   );
// };

// export default SumComponent;

// import React,{useReducer} from 'react'

// const Counter = () => {

//     const reducerFn=(state,action)=>{
//         switch(action.type){
//             case "INCREMENT":
//                 return {count:state.count+1}
//             case "DECREMENT":
//                 return {count:state.count-1}
//             case "RESET":
//                 return {count:0}
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,{count:1})

    


//   return (
//     <div>
//     <h1>{state.count}</h1>
//     <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>  
//     </div>
//   )
// }

// export default Counter


// import React, { useReducer } from 'react'

// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case "TOGGLETHEME":
//             return {theme:state.theme === "light" ? "black" : "light"}
//         default:
//             return state
//     }
// }

// const Counter = () => {

//     const [state,dispatch] = useReducer(reducerFn,{theme:"light"})


//   return (
//     <div>
//         <div style={{backgroundColor:state.theme}}>
// helloooo
//         </div>
//       <h1>Hello:{state.theme}</h1>
//       <button onClick={()=>dispatch({type:"TOGGLETHEME"})}>Toggle</button>
//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_THEME":
//       return { theme: state.theme === "light" ? "black" : "light" };
//     default:
//       return state;
//   }
// };

// const ThemeToggler = () => {
//   const [state, dispatch] = useReducer(reducer, { theme: "light" });

//   return (
//     <div style={{ backgroundColor: state.theme, height: "100vh", color: state.theme === "light" ? "black" : "white" }}>
//       <h1>Current Theme: {state.theme}</h1>
//       <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Toggle Theme</button>
//     </div>
//   );
// };

// export default ThemeToggler;

// import React, { useReducer } from 'react'

// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case "SET_EMAIL":
//             return {...state,email:payload,emailError:""}
            
//         case "SET_PASSWORD":
//             return {...state,password:payload,passwordError:""}
//         case 'VALIDATE':
//             return {

//             }
//     }
// }

// const Counter = () => {

//     const [state,dispatch] =useReducer(reducerFn,{email:'',password:'',emailError:'',passwordError:''})

//   return (
//     <div>
//       <input type="text" value={state.email} onChange={(e)=>dispatch({type:"SET_EMAIL"})} />

//       <input type="text" value={state.password} onChange={(e)=>dispatch({type:"SET_PASSWORD"})}/>


//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from 'react'

// const reducer=(state,action) => {
//     switch(action.type){
//         case "SETEMAIL":
//             return {...state,email:action.payload,emailError:""}
//         case "SETPASSWORD":
//             return {...state,password:action.payload,
//                 passwordError:""
//             }
//         case "VALIDATE":
//             let emailError=""
//             let passwordError=""

//             if(!state.email.includes("@") || !state.email.includes(".")){
//                 emailError+="an email should have @ and ."
//             }

//             if(state.password.length < 6){
//                 passwordError+="password must have 6 letter or length"
//             }

//             return {...state,emailError,passwordError}
//         default:
//             return state
//     }
// }

// const Counter = () => {

//     const [state,dispatch] = useReducer(reducer,{
//         email:"",
//         password:"",
//         emailError:"",
//         passwordError:""
//     })

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         dispatch({type:"VALIDATE"})
//     }

//   return (
//     <div>

//         <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='email' value={state.email} onChange={(e)=>dispatch({type:"SETEMAIL",payload:(e.target.value)})}/>

//         {state.emailError && <p>{state.emailError}</p>}

//         <input type="text" placeholder='password' value={state.password} onChange={(e)=>dispatch({type:"SETPASSWORD",payload:(e.target.value)})}/>

//         {state.passwordError && <p>{state.passwordError}</p>}

//         <button type='submit'>submit</button>
//         </form>
//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from 'react'

// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case "SETEMAIL":
//             return {...state,email:action.payload,emailError:''}
//         case "SETPASSWORD":
//             return {...state,password:action.payload,passwordError:''}
//         case "VALIDATE":
//             let emailError=''
//             let passwordError=''

//             if(!state.email.includes('@')||!state.email.includes('.')){
//                 emailError+="email must contain @ and dot ."
//             }

//             if(state.password.length < 6){
//                 passwordError+="password length must be greater than 6"
//             }

//             return {...state,emailError,passwordError}
//         default:
//             return state
//     }
// }

// const Counter = () => {
//     const [state,dispatch] = useReducer(reducerFn,{
//         email:"",
//         password:"",
//         emailError:"",
//         passwordError:''
//     })

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         dispatch({type:"VALIDATE"})
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <input type="text" value={state.email} onChange={(e)=>dispatch({type:'SETEMAIL',payload:(e.target.value)})}/>

//         {state.emailError && <p>{state.emailError}</p>}

//         <input type="text" value={state.password} onChange={(e)=>dispatch({type:"SETPASSWORD",payload:(e.target.value)})} />

//         {state.passwordError && <p>{state.passwordError}</p>}

//         <button type='submit'>submit</button>
//         </form>
//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from 'react'

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "NEWTODO":
//             return {...state,newToDo:action.payload}
//         case "ADDTODO":
//             return {
//                 ...state,
//                 todo:[...state.todo,{id:Date.now(),text:action.payload}],
//                 newToDo:''
//             }
//         default:
//             return state
//     }
// }

// const Counter = () => {

//     const [state,dispatch] = useReducer(reducer,{
//         todo:[],
//         newToDo:''
//     })
//   return (
//     <div>
//       <h1>To do application</h1>

//       <input type="text" value={state.newToDo} onChange={(e)=>dispatch({type:"NEWTODO",payload:e.target.value})} />

//       <button onClick={()=>dispatch({type:"ADDTODO",payload:state.newToDo})}>Add</button>

//       <ul>
//         {
//             state.todo.map((todo)=>{
//                 return <li>{todo.text}
//                 </li>
//             })
//         }
//       </ul>

//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from 'react'

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "NEWTODO":
//             return {...state,newToDo:action.payload}
//         case "ADDTODO":
//             return {
//                 ...state,
//                 todo:[...state.todo,{id:Date.now(),text:action.payload,completed:false}],
//                 newToDo:''
//             }
//         case "REMOVETODO":
//             return {
//                 ...state,
//                 todo:state.todo.filter((todo)=>{
//                     return todo.id!=action.payload
//                 })
//             }
//         case "TOGGLETODO":
//             return {
//                 ...state,
//                 todo:state.todo.map((todo)=>(todo.id == action.payload ? {...todo,completed:!todo.completed}:todo))
//             }
//         default:
//             return state
//     }
// }

// const Counter = () => {
//     const [state,dispatch] = useReducer(reducer,{
//         todo:[],
//         newToDo:''
//     })
//   return (
//     <div>
//       <h1>todo app</h1>
//       <input type="text" placeholder='enter text' value={state.newToDo} onChange={(e)=>dispatch({type:"NEWTODO",payload:e.target.value})} />

//       <button onClick={()=>dispatch({type:"ADDTODO",payload:state.newToDo})}>add</button>

//       <ul>
//         {
//             state.todo.map((todo)=>{
//                 return <li key={todo.id}
//                 style={{ 
//                     textDecoration: todo.completed ? "line-through" : "none", 
//                     cursor: "pointer"
//                 }}
//                 onClick={()=>dispatch({type:"TOGGLETODO",payload:todo.id})}>{todo.text}
//                 <button onClick={()=>dispatch({type:"REMOVETODO",payload:todo.id})}>Remove</button>
//                 </li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Counter

// import React, { useReducer } from 'react'

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "NEWTODO":
//             return {...state,newTodo:action.payload}
//         case "ADDTODO":
//             return {
//                 ...state,
//                 todo:[...state.todo,{id:Date.now(),text:action.payload,completed:false}],
//                 newTodo:''
//             }
//         case "REMOVETODO":
//             return {
//                 ...state,
//                 todo:state.todo.filter((todo)=>todo.id != action.payload)
//             }
//         case "TOGGLETODO":
//             return{
//                 ...state,
//                 todo:state.todo.map((todo)=>todo.id===action.payload ? {...todo,completed:!todo.completed} : todo)
//             }
//         default:
//             return state
//     }
// }


// const Counter = () => {

//     const [state,dispatch] = useReducer(reducer,{
//         todo:[],
//         newTodo:''
//     })

//   return (
//     <div>
//       <input type="text" value={state.newTodo} onChange={(e)=>dispatch({type:"NEWTODO",payload:e.target.value})}/>

//       <button onClick={()=>dispatch({type:"ADDTODO",payload:state.newTodo})}>Add</button>

//       <ul>
//         {
//             state.todo.map((todo)=>{
//                 return <li key={todo.id}
                
//                 onClick={()=>dispatch({type:"TOGGLETODO",payload:todo.id})}>
//                     {todo.text}{todo.completed ? "(Completed)" : ""}
//                 <button onClick={()=>dispatch({type:"REMOVETODO",payload:todo.id})}>Remove</button>
//                 </li>
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Counter


// import React, { memo, useCallback, useState } from 'react'


// const IncrementButton=memo(({Increment})=>{
//     console.log("child Component")
//     return(
//         <button onClick={Increment}>Increment</button>
//     )
// })

// const Counter = () => {

//     const [count,setCount] = useState(0)

//     const Increment =useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])
//     console.log("Incement recreated")
//   return (
//     <div>
//       <h1>{count}</h1>
//       <IncrementButton Increment={Increment}/>
//     </div>
//   )
// }

// export default Counter

// import React, { memo, useCallback, useState } from 'react'

// const IncrementButton =memo(({Increment})=>{
//     console.log("child component")
//     return(
//         <button onClick={Increment}>Increment</button>
//     )
// })

// const Counter = () => {
//     const [count,setCount] = useState(0)

//     const Increment=useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//     console.log("parent component")
//   return (
//     <div>
//     <h1>{count}</h1>
//     <IncrementButton Increment={Increment}/>
//     </div>
//   )
// }

// export default Counter

// import React, { useState,useCallback } from 'react'

// const Counter = () => {
//     const [count,setCount] = useState(0)

//     const Increment=useCallback(()=>{
//         setCount((count)=>count+1)
//     },[count])

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={Increment}>Increment</button>
//     </div>
//   )
// }

// export default Counter


// import React, { useCallback,useState,memo } from 'react'

// const Button=memo(({onClick,children})=>{
// console.log("button rendered",children)
// return(
//     <button onClick={onClick}>{children}</button>
// )
// })

// const Counter = () => {
    
//     const [count,setCount] = useState(0)

//     const Increment=useCallback(()=>{
//         setCount((count)=>count+1)
//     },[])

//     const Decrement=useCallback(()=>{
//         setCount((count)=>count-1)
//     },[])

//     const Reset=useCallback(()=>{
//         setCount(0)
//     },[])

//   return (
//     <div>
//     <h1>{count}</h1> 
//     <Button onClick={Increment}>Incremenet</Button>
//     <Button onClick={Decrement}>Decremenet</Button>
//     <Button onClick={Reset}>Reset</Button>
//     </div>
//   )
// }

// export default Counter

// import React,{useState,useCallback} from 'react'

// const Counter = () => {
//     const [data,setData] = useState(null)
//     const [load,setLoad] = useState(false)
//     const [error,setError] = useState('')
//     const [count,setCount] = useState(1)

//     const getData=useCallback((count)=>{
//         async function getUserData(){
//             try {
//                 setLoad(true)
//                 const response=await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//                 const data=await response.json()
//                 setData(data)

//             } catch (error) {
//                 setError(error.message)
//             }
//             finally{
//                 setLoad(false)
//             }
//         }
//         getUserData()
//     },[count])

//     if(load){
//         return <h1>Loading...</h1>
//     }

//     if(error){
//         return <h1>{error}</h1>
//     }

//   return (
//     <div>
//       <button onClick={()=>getData(count)}>FetchData</button>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
//       {data && 
//       <div>
//       <h1>{data.userId}</h1>
//       <h2>{data.id}</h2>
//       <h3>{data.title}</h3>
//       <h4>{data.completed}</h4>
//       </div>
//       }
      
//     </div>
//   )
// }

// export default Counter


import React,{useCallback, useEffect, useState} from 'react'

const Counter = () => {
    const [data,setData] = useState(null)
    const [load,setLoad] = useState(false)
    const [error,setError] = useState('')
    const [count,setCount] = useState(1)

    const getData=useCallback(async ()=>{
            try {
                setLoad(true)
                const response=await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
                const data=await response.json()
                setData(data)
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoad(false)
            }
    },[count])

    useEffect(()=>{
    getData()
    },[getData])

    if(load){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

  return (
    <div>

        <button onClick={getData}>FetchData</button>
        <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
      {
        data &&
        <div>
        <h1>{data.userId}</h1>
       <h2>{data.id}</h2>
       <h3>{data.title}</h3>
       <h4>{data.completed}</h4>
        </div>
      }
    </div>
  )
}

export default Counter
