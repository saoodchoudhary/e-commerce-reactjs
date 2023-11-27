import React from 'react'
import "./RelatedProduct.css"
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
{data_product.map((item, i)=>{
    return (
        <Item  key={i} props={item} />
    )
})}
      </div>
    </div>
  )
}

export default RelatedProduct
