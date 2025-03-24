import React from 'react'
const MyntraHeader = () => {
  return (
    <div style={{
      backgroundColor:'beige'
    }}>
      
      <div style={{
        display:'flex',
        justifyContent:"space-between",
      }}>

        <button style={{border:'none'}}>Men</button>
        <button style={{border:'none'}}>Women</button>
        <button style={{border:'none'}}>Kids</button>
        <button style={{border:'none'}}>Home And Living</button>
        <button style={{border:'none'}}>Beauty</button>
        <button style={{border:'none'}}>Studio</button>

        <input type="text" placeholder='search for products' />

        
        <button style={{border:'none'}}>Profile</button>
        <button style={{border:'none'}}>Wishlist</button>
        <button style={{border:'none'}}>Bag</button>
        
      </div>

      <div style={{
        display:'flex',
        gap:'10px'
      }}>

      </div>
    </div>
  )
}

export default MyntraHeader
