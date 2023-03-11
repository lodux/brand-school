import React from 'react'
import Articolo from '../../components/articolo/articolo.component'
import NavBar from '../../components/navbar/NavBar.component'
import { Link } from 'react-router-dom'
import "./Home.styles.scss"

export default function Home() {
  return (
    <div>
    
    <div className="articolo-wrapper">
      <Link to="/showArticle" style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle" style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link> 
      <Link to="/showArticle"  style={{textDecoration:"none"}}>
        <Articolo/> 
      </Link>  

          
    </div>


    </div>
  )
}
