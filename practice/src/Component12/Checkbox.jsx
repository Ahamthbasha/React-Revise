// import React, { useContext } from 'react'
// import {data} from './context'

// const Checkbox = () => {
//     const {isChecked}=useContext(data)
//   return (
//     <div>
//       <input type="checkbox" checked={isChecked}/>
//     </div>
//   )
// }

// export default Checkbox


import React, { useContext } from 'react'
import { data } from './Context'

const Checkbox = () => {
  const {isChecked} = useContext(data)
  return (
    <div>
      <input type="checkbox" checked={isChecked} />
    </div>
  )
}

export default Checkbox
