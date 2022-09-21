import React from 'react'
import { useDispatch } from 'react-redux'
import {remove} from '../store/CartSlice'

const Cart_Cart = (props) => {
    const dispatch = useDispatch()
    const handleClick=(id)=>{
      // console.log(id)
        dispatch(remove(id))
    }
  return (
    <div className='cart_items'>
      <img className='cart_image' src={props.product.image} alt="product-image" />
      <h4>{props.product.title.slice(0,20)}</h4>
      <h4>${props.product.price}</h4>
      <button className="add_btn" onClick={()=>handleClick(props.product.id)}>Remove</button>
    </div>
  )
}

export default Cart_Cart