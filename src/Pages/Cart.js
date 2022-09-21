import React from 'react'
import { useSelector } from 'react-redux'
import Card_Cart from '../components/Cart_Cart'
const Cart = () => {
  const products = useSelector((state)=>state.cart)
  return (
    <div>
      <div className='cart_title'>
        <h3>Product</h3>
        <h3>Product Name</h3>
        <h3>Price</h3>
        <h3>Drop</h3>
      </div>
      {products &&
        products.map((product)=>{
          return <Card_Cart key={product.id} product={product}/>
        })
      }

    </div>
  )
}

export default Cart