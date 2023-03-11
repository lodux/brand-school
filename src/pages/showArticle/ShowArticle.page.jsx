import React from 'react'
import "./showArticle.styles.scss"

export default function ShowArticle() {
  return (
    <div className='show-cont'>
      <div className="left">
        <img
        src="https://cdn.shopify.com/s/files/1/0608/1806/3572/products/panna_95029733-f3a6-415e-8ac6-c87ff0e751cf_540x.jpg?v=1667554787"
        alt=""
        height="600px"
        />
      </div>
      <div className="right">
        <div className='details'>
          <span className='title-art'>Felpa Hoodies like trap music (LIMITED EDITION)</span>
          <span className="price">39.99$</span>
          Taglia <br/>
          <div className="size"> 
            <div className="size-cont">S</div>
            <div className="size-cont">M</div>
            <div className="size-cont">L</div>
            <div className="size-cont">XL</div>
            <div className="size-cont">XXL</div>
          </div>
          Colore
          <div className="colore"> 
            <div className="colore-cont">White</div>
            <div className="colore-cont">black</div>
            <div className="colore-cont">Purple</div>
            <div className="colore-cont">Yellow</div>
            <div className="colore-cont">Green</div>
          </div>
          <div className="butt1">Aggiungi al carrello</div>
          <div className="butt1 b">Acquista ora</div>
        </div>
      </div>
    </div>
  )
}
