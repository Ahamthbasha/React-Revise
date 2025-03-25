// import React,{useState} from 'react'
// import Basic from './Component1/Basic'
// import Parent from './Component2/Parent'
// import MyntraParent from './Component2/MyntraParent'
// import MyntraHeader from './Component3/MyntraHeader'
// import offers from './utils/DummyData'
// import MyntraCard from './Component3/MyntraCard'
// import MyntreFooter from './Component3/MyntreFooter'
// // import Counter from './Component4/Counter'
// import Header from './Component5/Header'
// import Card from './Component5/Card'
// import Password from './Component6/Password'

// import Counter from './Component7/Counter'
// import Count from './Component7/Count'
// import Fibonocci from './Component7/Fibonocci'
// import Stopwatch from './Component7/Stopwatch'
// import Count1 from './Component8/count1'
// import Example1 from './Component9/Example1'
// import Demo from './Component9/demo'


// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Hi from './Component10/Hi'
// import Hello from './Component10/Hello'
// import Home from './Component10/Home'
// import Contact from './Component10/Contact'
// import Details from './Component10/Details'
// import Product from './Component10/Product'
// import Header from './Component11/Header'
// import Card from './Component11/Card'
// import Reducer from './Component12/Reducer'

// const App = () => {

  // const [sorting,setSorting] = useState(offers)
  // const order=()=>{
  //   sorting.sort((a,b)=>a.price-b.price)
  //   setSorting([...sorting])
  // }

  // const price500=()=>{
  //   const fiveHundred=sorting.filter((val)=>{
  //     return val.price > 500
  //   })
  //   console.log(fiveHundred)

  //   setSorting(fiveHundred)
  // }

  // return (
  //   <div>
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

      {/* <Counter /> */}

      {/* <Header />
      <Card /> */}

      {/* password project */}

      {/* <Password /> */}

      {/* <Counter /> */}

      {/* <Count /> */}

      {/* <Fibonocci /> */}

      {/* <Stopwatch /> */}

      {/* <Count1 /> */}

      {/* <Example1 /> */}

      {/* <Demo/> */}
{/* 
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/hello">Hello</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hello" element={<Hello />}></Route>

        <Route path='/details' element={<Details/>}>
        <Route index element={<Hi />}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        </Route>


      </Routes>
      
      </BrowserRouter> */}

      {/* <Header/>
      <Card /> */}

      {/* <Reducer />
    </div>
  )
}

export default App */}

// import React from 'react'
// import Context from './Component12/context'
// import Checkbox from './Component12/Checkbox'
// import Button from './Component12/Button'
// const App = () => {
//   return (
//     <Context>
//       <Checkbox />
//       <Button />
//     </Context>
//   )
// }

// export default App

// import React from 'react'
// import Context from './Component12/Context'
// import Checkbox from './Component12/Checkbox'
// import Button from './Component12/Button'

// const App = () => {
//   return (
//     <Context>
//       <Checkbox />
//       <Button/>
//     </Context>
//   )
// }

// export default App


import React from 'react'
import ToggleUntoggle from './Component12/ToggleUntoggle'
import Counter from './Component12/Counter'

const App = () => {
  return (
    <div>
      {/* <ToggleUntoggle /> */}
      <Counter/>
    </div>
  )
}

export default App
