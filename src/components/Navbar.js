import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';
import AuthLogin from './AuthLogin';
import UserMenu from './UserMenu';
import {useSelector,useDispatch} from 'react-redux'

export default function Navbar(){
  const [isOpen,setOpen] = useState(false)

  const data = useSelector(state=>{
    return state.Auth.auth
  })  
  
  console.log(data.length);

  function handleToggle() {    
    setOpen(!isOpen)
  }
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
        <div className="nav__login">          
          {data.length > 0 ? <UserMenu/> : <AuthLogin/>}
        </div>        
      </nav>
  )
}
