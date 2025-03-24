import React,{useState} from 'react'
import Basic from './Component1/Basic'
import Parent from './Component2/Parent'
import MyntraParent from './Component2/MyntraParent'
import MyntraHeader from './Component3/MyntraHeader'
import offers from './utils/DummyData'
import MyntraCard from './Component3/MyntraCard'
import MyntreFooter from './Component3/MyntreFooter'
import Counter from './Component4/Counter'
const App = () => {

  const [sorting,setSorting] = useState(offers)
  const order=()=>{
    sorting.sort((a,b)=>a.price-b.price)
    setSorting([...sorting])
  }

  const price500=()=>{
    const fiveHundred=sorting.filter((val)=>{
      return val.price > 500
    })
    console.log(fiveHundred)

    setSorting(fiveHundred)
  }

  return (
    <div>
      {/* <Basic /> */}
      {/* <Parent /> */}

      {/* <MyntraParent /> */}

      {/* component 3 */}
      {/* <MyntraHeader />

      <button onClick={order}>sort by Order</button>
      <button onClick={price500}>above 500 price dress</button>
      <div style={{display:"flex",flexWrap:'wrap',gap:'10px',backgroundColor:"beige"}}>
        {
        sorting.map((val)=>(
            <MyntraCard key={val.Cloth} Cloth={val.Cloth} Offer={val.Offer} price={val.price}/>
          ))
        }
      </div>

      <MyntreFooter /> */}

      <Counter />
    </div>
  )
}

export default App

