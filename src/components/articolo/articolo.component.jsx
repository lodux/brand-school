import React from 'react'
import "./articolo.styles.scss"

export default function Articolo() {
  return (
<div className="articolo">
      <img
        src="https://cdn.shopify.com/s/files/1/0608/1806/3572/products/heavensymphonynegativo_720x.jpg?v=1669211156"
        alt=""
        height="300px"
      />
      <div className="details">
        <span>Hoodie Graphic tee</span>
        <span className="price">39.99$</span>
      </div>
    </div>
  )
}
