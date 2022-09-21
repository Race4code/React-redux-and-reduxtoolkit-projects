import React from 'react'
// import './Navbar.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
// import Cart from '../Pages/Cart'
// import CartSlice from '../store/CartSlice'
const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  
  // console.log(items.length)
  // console.log(items)
    
  return (
    <div className='site_navbar'>
        
        <span className='site_name'><Link to="/"style={{textDecoration: 'none',color:'black'}}><h1>Shop ZOO</h1></Link></span>
        <div className='nav_items'>
            <h3 className='item'><Link to="/" style={{textDecoration: 'none',color:'black'}}>Home</Link></h3>
            <h3 className='item'><Link to="/cart"style={{textDecoration: 'none',color:'black'}} >Cart</Link></h3>
            <h3 className='no_of_item item'>{!items?0:items.length}</h3>
        </div>

    </div>
  )
}

export default Navbar