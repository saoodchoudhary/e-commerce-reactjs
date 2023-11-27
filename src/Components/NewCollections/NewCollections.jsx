import React from 'react'
import "./NewCollections.css"
import new_collections from "../Assets/new_collections"
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collections.map((item, ind)=>{
                return(
                    <Item key={ind} props={item}/>
                )
            })}
        </div>
      
    </div>
  )
}

export default NewCollections
