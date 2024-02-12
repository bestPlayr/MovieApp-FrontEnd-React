import React from 'react'
import './Header.css' 
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='parent'>
        
       <div className='header'>
       <Link to="/">
            <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/>
            </Link>
            <Link to='/movies/popular' style={{textDecoration : "none"}}><span>Popular movies  </span></Link>  

             <Link to='/movies/Top' style={{textDecoration : "none"}}>  <span>Top movies </span></Link>
             <Link to='/movies/upcoming' style={{textDecoration : "none"}}> <span>Upcoming movies </span></Link>

       </div>
              



    </div>
    
        
  )
}
