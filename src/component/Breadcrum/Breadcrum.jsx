import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const Breadcrum = (props) => {
   const {product} = props;
  return (
    <div className='text-center mt-2 mb-5'>
    HOME <FaChevronRight/> SHOP<FaChevronRight/>{product.category}<FaChevronRight/>  {product.name}
    </div>
  )
}

export default Breadcrum

