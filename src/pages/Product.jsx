import React from 'react'
import { useParams } from 'react-router-dom'

const Product = (props) => {
    const {id} = useParams();

    const product = props.Products.find(product => product.id === parseInt(id));

    if(!product){
        return <h1>Product no found</h1>
    }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}

export default Product