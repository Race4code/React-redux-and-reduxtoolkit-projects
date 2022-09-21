import React from 'react'
import {add} from '../store/CartSlice'
import {useDispatch} from 'react-redux'
const Card = (props) => {
  const dispatch = useDispatch()
  const add_to_cart = (product)=>{
    // alert('dispatch')
    // console.log(product)
    dispatch(add(product))
  }
  return (
    <div className='card'>
        <img src={props.product.image} alt="product-image" className='product_image'/>
        <h5 className='product_title'>{props.product.title.slice(0,20)}</h5>
        <h5 className='product_price'>${props.product.price}</h5>
        <button className='add_btn'onClick={()=>add_to_cart(props.product)} >Add to Cart</button>
    </div>
//     <div>{props.product.category}</div>
  )
}

export default Card