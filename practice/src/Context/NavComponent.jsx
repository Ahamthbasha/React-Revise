// import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import { useNavigate } from 'react-router-dom';

// const NavComponent = () => {
//     const { loggedIn, checkLogStatus } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         checkLogStatus(); // Toggle login state
//         navigate('/login'); // Navigate to login page
//     };

//     const handleLogout = () => {
//         checkLogStatus(); // Toggle login state
//         navigate('/logout'); // Navigate to logout page
//     };

//     return (
//         <div>
//             {loggedIn ? (
//                 <button onClick={handleLogout}>Logout</button>
//             ) : (
//                 <button onClick={handleLogin}>Login</button>
//             )}
//         </div>
//     );
// };

// export default NavComponent;

import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
const NavComponent = () => {
    const {loggedIn,handleToggle} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin=()=>{
        handleToggle()
        navigate('/login')
    }

    const handleLogout=()=>{
        handleToggle()
        navigate('/logout')
    }
  return (
    <div>
      {
        loggedIn? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Login</button>
      }
    </div>
  )
}

export default NavComponent
