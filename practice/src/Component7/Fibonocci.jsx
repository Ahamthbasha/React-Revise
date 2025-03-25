// import React, { useMemo,useState } from 'react'


// //useMemo hook is used to memoize the result of an expensive calculation so that it isn't recalculated on every render unless its dependencies change. In your case, it helps to avoid recalculating the Fibonacci result on every re-render

// const Fibonocci = () => {

//     const [number,setNumber] = useState('')

//     function fibLogic(n){
//         if(n<=1){
//             return n
//         }

//         return fibLogic(n-1)+fibLogic(n-2)
//     }

//     const result=useMemo(()=>{
//         const num=parseInt(number,10)

//         if(isNaN(num)||num<0){
//             return 'please enter a valid number'
//         }

//         return fibLogic(num)
//     },[number])


//   return (
//     <div>
//       <h1>Fibonocci result is:{result}</h1>
//       <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
//     </div>
//   )
// }

// export default Fibonocci


import React, { useEffect,useState } from 'react'

const Fibonocci = () => {
    const [number,setNumber] = useState('')
    const [result,setResult] = useState(null)

    function fibLogic(n){
        if(n<=1){
            return n
        }

        return fibLogic(n-1)+fibLogic(n-2)
    }

    useEffect(()=>{
        if(number!=""){
            setResult(fibLogic(Number(number)))
        }else{
            setResult(null)
        }
    },[number])
  return (
    <div>
      <h1>Fibonocci number:{result}</h1>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />

    </div>
  )
}

export default Fibonocci

