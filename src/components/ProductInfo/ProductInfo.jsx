import './ProductInfo.css';
import { useParams, Link } from "react-router-dom";
import { AllProductsList } from '../Constants';
import { BoxImage, TruckImage, HandsImage } from '../index';
import React, { useState } from 'react'
import cartContext from '../../CartContext.jsx';
import { useContext } from 'react';

const ProductInfo = () => {
 
  const { addToCart } = useContext(cartContext);

  const { productId } = useParams();

  const [active, setActive] = useState([true, false, false, false])

  const selectedListProduct = AllProductsList.find((product) => product.productId === Number(productId));
  
  const [bigImage, setBigImage] = useState(selectedListProduct.FeaturedProductsImg);

  function changeBigImage(selectedImage) {
    setBigImage(selectedImage)
  }

//   function addToCartHandler(newItem) {
    
//     const existingProduct = cartItems.find((item) => item.productId === selectedListProduct.productId);

//     if (existingProduct) {
//       const updatedCartItems = cartItems.map((item) =>
//         item.productId === selectedListProduct.productId
//           ? { ...item, quantity: item.quantity + 1 }
//           : null
//       );

//       addToCart(updatedCartItems);
//     } else {
//       addToCart([...cartItems, { ...selectedListProduct, quantity: 1 }]);
//     }
//   }
  
  function setActiveState(index) {
    const updatedState = Array(active.length).fill(false); // Create an array of false with the same length as active
    updatedState[index] = true; // Set the selected index to true
    setActive(updatedState);
  }
  

  return (
    <div className='productInfo'>
        <h1 className='mobileHeading'>Product Details</h1>
        <p className='productInfoNav'>Home / List of Products / <span style={{color: '#000000'}}>{selectedListProduct.paragraph}</span></p>
        <div className='productInfoContainer'>
            <div className='productImagesContainer'>
                <div className='switchImages'>
                    <img onClick={() => {changeBigImage(selectedListProduct.FeaturedProductsImg); setActiveState(0)}} style={{border: active[0] ? '2px solid #C900C1' : 'none', borderRadius: '10px'}} src={selectedListProduct.FeaturedProductsImg} alt="" />
                    <img onClick={() => {changeBigImage(selectedListProduct.imgSwitch[1]); setActiveState(1)}} style={{border: active[1] ? '2px solid #C900C1' : 'none', borderRadius: '10px'}} src={selectedListProduct.imgSwitch[1]} alt="" />
                    <img onClick={() => {changeBigImage(selectedListProduct.imgSwitch[2]); setActiveState(2)}} style={{border: active[2] ? '2px solid #C900C1' : 'none', borderRadius: '10px'}} src={selectedListProduct.imgSwitch[2]} alt="" />
                    <img onClick={() => {changeBigImage(selectedListProduct.imgSwitch[3]); setActiveState(3)}} style={{border: active[3] ? '2px solid #C900C1' : 'none', borderRadius: '10px'}} src={selectedListProduct.imgSwitch[3]} alt="" />
                </div>
                <div>
                    <img className='bigProductImage' src={bigImage} alt="" />
                </div>
            </div>
            <div>
                <p className='productName'>{selectedListProduct.paragraph}</p>
                <p className='ProductShortInfo'>{selectedListProduct.ShortProductInfo}</p>
                <p className='productPrice' style={{fontFamily:'Sansation',}}>${selectedListProduct.price}</p>
                <p><span style={{color: '#FFAD33', fontSize:'18px',  fontFamily:'Inter'}}>{selectedListProduct.Ratings}</span> <span style={{padding:'8px', backgroundColor:'#DBDEE4', borderRadius:'10px', fontFamily:'Inter',}}>Sold {selectedListProduct.NoOfProductSold}</span></p>
                <div className='convincingInfo' style={{display:'flex', justifyContent:'space-between', gap:'5px', marginTop:'30px', marginBottom:'20px'}}>
                    <div style={{ backgroundColor:'#ffffff', textAlign:'center', borderRadius: '9.738px', fontFamily:'Sansation', width:'80px'}}>
                        <img src={BoxImage} alt="" />
                        <p>Safe Delivery</p>
                    </div>
                    <div style={{ backgroundColor:'#ffffff', textAlign:'center', borderRadius: '9.738px', fontFamily:'Sansation', width:'80px'}}>
                        <img src={TruckImage} alt="" />
                        <p>Free Delivery</p>
                    </div>
                    <div style={{ backgroundColor:'#ffffff', textAlign:'center', borderRadius: '9.738px', fontFamily:'Sansation', width:'80px'}}>
                        <img src={HandsImage} alt="" />
                        <p>Secure Transaction</p>
                    </div>
                </div>
                <div>
                    <div style={{marginTop:'20px'}}>
                        <Link to={'/checkout'}>
                            <button style={{padding:'12px 50px', backgroundColor:'#000000', color:'#ffffff', fontFamily:'Inter', fontSize:'15px'}}>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='productCtaButtons' style={{display:'flex', gap:'30px', fontWeight:'700', fontFamily:'Sansation'}}>
            <p style={{backgroundColor:'#D1DAE6', borderRadius:'8px'}}>Product Info</p>
            <p style={{backgroundColor:'#D1DAE6', borderRadius:'8px'}}>Product Descrition</p>
            <p style={{backgroundColor:'#D1DAE6', borderRadius:'8px'}}>Feedback</p>
        </div>
        <div className='fbt'>
            <h3>Frequently Bought Together</h3>
            <div className='displayedProducts'>
            {selectedListProduct.fbts.map((fbt) => {
                return (
                    <div className='featured-product'>
                        <img src={fbt.FeaturedProductsImg} alt={fbt.Alt} />
                        <p className='featured-product-p'>{fbt.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${fbt.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(fbt)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default ProductInfo;