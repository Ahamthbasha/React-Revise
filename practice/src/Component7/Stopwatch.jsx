import React,{useState,useRef} from 'react'

const Stopwatch = () => {

    const [no,setNo]= useState(0)
    const [running,setRunning]=useState(false)
    const calci=useRef(null)

    const start=()=>{
        if(!running){
            calci.current=setInterval(()=>{
                setNo((no)=>(no+1))
            },1000)
            setRunning(true)
        }
    }

    const Stop=()=>{
        if(running){
            clearInterval(calci.current)
            setRunning(false)
        }
    }

    const Reset=(()=>{
        Stop()
        setNo(0)
    })

  return (
    <div>
      <h1>{no}</h1>
      <button onClick={start}>start</button>
      <button onClick={Stop}>stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Stopwatch
