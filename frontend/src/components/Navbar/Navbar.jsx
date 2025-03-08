// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


// eslint-disable-next-line react/prop-types, no-unused-vars
const Navbar = ({setShowLogin}) => {

   
    const[menu,setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext)
    

  return (
    <div className='Navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="Navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
      </ul>
     <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="Navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
     </div>
    </div>
  )
}

export default Navbar
