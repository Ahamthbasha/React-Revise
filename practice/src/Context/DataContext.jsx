import React, { createContext, useEffect,useState } from 'react'

export const DataContext=createContext()

const DataContextProvider = ({children}) => {
    const [data,setData] = useState([])
    const [load,setLoad] = useState(false)
    const[error,setError] = useState('')
    
    useEffect(()=>{
        async function fetchPosts(){
            try {
                setLoad(true)
                const response=await fetch("https://jsonplaceholder.typicode.com/posts")

                const data=await response.json()

                setData(data)

                
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoad(false)
            }
        }

        fetchPosts()
    },[])

  return (
    <DataContext.Provider value={{data,load,error}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
