import React,{useState,useEffect} from 'react'
import Card from '../components/Card.js'
const Home = () => {
  const [products,setproduct]=useState([])
 
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>{
      // console.log(res)
      setproduct(res);
  })
}
,[])
  return (
    <div>
      {/* <h1>{products.map((item)=>{
        return <h4>{item.category}</h4>
      })}</h1> */}
      <h1>Products</h1>
      <div className='container'>
      {products.length===0 && <h1>Loading..</h1>}
      {
        products.map(product=>{
          return <Card key={product.id} product={product}/>
        })
      }
      </div>
    </div>
  )
}

export default Home