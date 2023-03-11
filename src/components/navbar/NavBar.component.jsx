import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carrello from '../carrello/carrello.component';
import carrello from "./carrello.png"
import "./NavBar.styles.scss"

export default function NavBar() {
const [categorie,setCategorie]=useState(false);
const [clickCar,setClick]=useState(false);


const Categorie=()=>{
    return(
    <div className="categorie-cont">
        <span>Felpe</span>
        <span>Jeans</span>
        <span>Pantaloni</span>
        <span>T-shirt</span>
    </div>        
    )

}
  return (
    <div id="navBar">
        <Link to="/"> {console.log(categorie)}
        <img
        src="https://i.pinimg.com/236x/82/25/bf/8225bfd9be6d2fe8c878a58ca80836e1--fashion-brand-logos-fashion-logo-design.jpg"
        alt=""
        height="150px"
        />
        </Link>
        <span className="logo">TOSTOWEAR</span>
        <span>HOME</span>
        <span>DOVE SIAMO</span>
        <div className="cat">
         <span onClick={()=>setCategorie(!categorie)}>CATEGORIE</span>
        {categorie ? (
            <> 
            <Categorie/>
            </>
        ): (
            <>
            </>
        )}    
        </div>
       
        <span>FAQ ?</span>
        <div className="cerca">
            <input type="text" />

        </div>
        <div className="carrello">
        <img onClick={()=>setClick(!clickCar)} src={carrello} className="carrello" width="40px" />
        {clickCar ? (
            <>
            <div className="carrello-contt">
               <Carrello/>            
            </div>
 
            </>
        ): (
            <>
            </>
        )} 
        </div>   
  </div>
  )
}
