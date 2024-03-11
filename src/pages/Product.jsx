import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../component/Breadcrum/Breadcrum';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RecentPostSection from '../component/Assets/RecentPostSection/RecentPostSection';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
      <RecentPostSection product={product}/>
    </div> 
  )
}

export default Product
