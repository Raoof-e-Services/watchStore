import React from 'react'
import rdata from "../data/rolexdata";
function Rolex() {
  const element = rdata.map((item ) =>{
    return (
      <div className="rolex">
      <p>{item.model}</p> 
      <p>{item.price}</p>
      <img src={item.Image} className="rimg" />
      </div>
    )
  })
  return (
    <div>
      <h1>Rolex</h1>
      {element}
    </div>
  )
}

export default Rolex
