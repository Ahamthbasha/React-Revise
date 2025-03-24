import React from 'react'
import MyntraCard from './MyntraCard';

const MyntraParent = () => {
    const offers = [
                { Cloth: "Jeans", Offer: "30-60% off" },
                { Cloth: "T-Shirt", Offer: "20-50% off" },
                { Cloth: "Jacket", Offer: "10-40% off" },
                { Cloth: "Sweater", Offer: "25-70% off" },
                { Cloth: "Dress", Offer: "15-65% off" },
                { Cloth: "Hoodie", Offer: "20-45% off" },
                { Cloth: "Shorts", Offer: "50-90% off" },
                { Cloth: "Skirt", Offer: "30-55% off" },
                { Cloth: "Blouse", Offer: "35-75% off" },
                { Cloth: "Sweatpants", Offer: "40-80% off" }
              ];
  return (
    <div style={{
        display:'flex',
        flexWrap:'wrap',
        gap:'10px'
    }}>
      {
        offers.map((val)=>(
            <MyntraCard Cloth={val.Cloth} Offer={val.Offer}/>
        ))
      }
    </div>
  )
}

export default MyntraParent
