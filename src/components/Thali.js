import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Menu() {

  const productData=useSelector(state=>state.counter.products)

    return (
    <div className="Menu">
      <h1>Menu card</h1>
    <div> 

      {
        productData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Menu;