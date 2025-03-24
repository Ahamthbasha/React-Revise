import React from 'react'

const MyntraCard = ({Cloth,Offer}) => {
  return (
    <div style={{
        border:"1px solid black"
    }}>

<img src='https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg' alt="" height="200px" width="200px" />
      <div style={{textAlign:'center'}}>
      <h1>{Cloth}</h1>
      <h2>{Offer}</h2>
      </div>
    </div>
  )
}

export default MyntraCard
