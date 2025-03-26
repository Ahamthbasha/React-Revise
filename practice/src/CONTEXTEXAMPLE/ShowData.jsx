// import React, { useContext } from 'react'
// import { userContext } from './ContextCreated'

// const ShowData = () => {
//     const {state} = useContext(userContext)
//     const {user,load,error} = state

//     if(load){
//         return ( <h1>Loading...</h1>)
//     }

//     if(error){
//         return (<h1>{error}</h1>)
//     }
//   return (
//     <div>
//       <ul>
//         {
//             user.map((user)=>(
//                 <li key={user.id}>{user.name}</li>
//             ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default ShowData
import React, { useContext } from 'react'
import { toggleContext } from './ContextCreated'

const ShowData = () => {
    const {toggle,handleToggle} = useContext(toggleContext)
  return (
    <div>
      <input type="checkbox" checked={toggle} />
      <button onClick={handleToggle}>Click</button>
    </div>
  )
}

export default ShowData
