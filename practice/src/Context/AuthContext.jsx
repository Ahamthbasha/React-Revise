// import React, { createContext, useState } from 'react';

// // Create Context
// export const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//     const [loggedIn, setLog] = useState(false);

//     const checkLogStatus = () => {
//         setLog((curr) => !curr);
//     };

//     return (
//         <AuthContext.Provider value={{ loggedIn, checkLogStatus }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContextProvider;

import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const [loggedIn,setToggle] = useState(false)

    const handleToggle=()=>{
        setToggle((curr)=>!curr)
    }

  return (
    <AuthContext.Provider value={{loggedIn,handleToggle}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider