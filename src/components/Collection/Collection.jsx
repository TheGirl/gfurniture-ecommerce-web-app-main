// import './Collection.css';
// import { FeaturedProducts, BedroomProducts, LivingRoomProducts, HomeOfficeProducts, DiningTableProducts } from '../Constants.js';
// import { useState } from 'react';
// import cartContext from '../../CartContext.jsx';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// const Collection = () => {
    
//   const { addToCart } = useContext(cartContext);

//   const [selectedCollection, setSelectedCollection] = useState('All Furniture');

//   function passSelected(selected) {
//     setSelectedCollection(selected)
//   }

//   return (
//     <div className='collection'>
//         <div className='collection-heading'>
//             <h1>Stylish Collection of Furniture</h1>
//             <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
//         </div>
//         <div className='selection-nav'>
//             <p onClick={() => passSelected('All Furniture')} style={{ backgroundColor: selectedCollection === 'All Furniture' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'All Furniture' ? '#ffffff' : '#000000'}}>All Furniture</p>
//             <p onClick={() => passSelected('Bedroom')}  style={{ backgroundColor: selectedCollection === 'Bedroom' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Bedroom' ? '#ffffff' : '#000000'}}>Bedroom</p>
//             <p onClick={() => passSelected('Living Room')} style={{ backgroundColor: selectedCollection === 'Living Room' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Living Room' ? '#ffffff' : '#000000'}}>Living Room</p>
//             <p onClick={() => passSelected('Home Office')} style={{ backgroundColor: selectedCollection === 'Home Office' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Home Office' ? '#ffffff' : '#000000'}}>Home Office</p>
//             <p onClick={() => passSelected('Dining Table')} style={{ backgroundColor: selectedCollection === 'Dining Table' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Dining Table' ? '#ffffff' : '#000000'}}>Dining Tables</p>
//             <p>More...</p>
//         </div>
//         <div className='featured-products'>
//             {FeaturedProducts.map((FeaturedProduct) => {
//                 return (
//                     <div className='featured-product' style={{display: selectedCollection === 'All Furniture' ? 'block' : 'none'}}>
//                         <Link key={FeaturedProduct.productId} to={`/productdetails/${FeaturedProduct.productId}`}>
//                             <img src={FeaturedProduct.FeaturedProductsImg} alt={FeaturedProduct.Alt} />
//                         </Link>
//                         <p className='featured-product-p'>{FeaturedProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${FeaturedProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(FeaturedProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//             {BedroomProducts.map((BedroomProduct) => {
//                 return (
//                     <div className='featured-product' style={{display: selectedCollection === 'Bedroom' ? 'block' : 'none'}}>
//                         <img src={BedroomProduct.FeaturedProductsImg} alt={BedroomProduct.Alt} />
//                         <p className='featured-product-p'>{BedroomProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${BedroomProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(BedroomProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//             {LivingRoomProducts.map((LivingRoomProduct) => {
//                 return (
//                     <div className='featured-product' style={{display: selectedCollection === 'Living Room' ? 'block' : 'none'}}>
//                         <img src={LivingRoomProduct.FeaturedProductsImg} alt={LivingRoomProduct.Alt} />
//                         <p className='featured-product-p'>{LivingRoomProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${LivingRoomProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(LivingRoomProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//             {HomeOfficeProducts.map((HomeOfficeProduct) => {
//                 return (
//                     <div className='featured-product' style={{display: selectedCollection === 'Home Office' ? 'block' : 'none'}}>
//                         <img src={HomeOfficeProduct.FeaturedProductsImg} alt={HomeOfficeProduct.Alt} />
//                         <p className='featured-product-p'>{HomeOfficeProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${HomeOfficeProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(HomeOfficeProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//             {DiningTableProducts.map((DiningTableProduct) => {
//                 return (
//                     <div className='featured-product' style={{display: selectedCollection === 'Dining Table' ? 'block' : 'none'}}>
//                         <img src={DiningTableProduct.FeaturedProductsImg} alt={DiningTableProduct.Alt} />
//                         <p className='featured-product-p'>{DiningTableProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${DiningTableProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(DiningTableProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Collection



import './Collection.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import cartContext from '../../CartContext.jsx';
import { BedroomProducts, LivingRoomProducts, HomeOfficeProducts, DiningTableProducts, FeaturedProducts } from '../Constants.js';

const Collection = () => {
  const { addToCart } = useContext(cartContext);
  const [selectedCollection, setSelectedCollection] = useState('All Furniture');

  function passSelected(selected) {
    setSelectedCollection(selected)
  }

  return (
    <div className='collection'>
<div className='collection-heading'>
            <h1>Stylish Collection of Furniture</h1>
            <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
        </div>
        <div className='selection-nav'>
            <p onClick={() => passSelected('All Furniture')} style={{ backgroundColor: selectedCollection === 'All Furniture' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'All Furniture' ? '#ffffff' : '#000000'}}>All Furniture</p>
            <p onClick={() => passSelected('Bedroom')}  style={{ backgroundColor: selectedCollection === 'Bedroom' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Bedroom' ? '#ffffff' : '#000000'}}>Bedroom</p>
            <p onClick={() => passSelected('Living Room')} style={{ backgroundColor: selectedCollection === 'Living Room' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Living Room' ? '#ffffff' : '#000000'}}>Living Room</p>
            <p onClick={() => passSelected('Home Office')} style={{ backgroundColor: selectedCollection === 'Home Office' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Home Office' ? '#ffffff' : '#000000'}}>Home Office</p>
            <p onClick={() => passSelected('Dining Table')} style={{ backgroundColor: selectedCollection === 'Dining Table' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Dining Table' ? '#ffffff' : '#000000'}}>Dining Tables</p>
            <p>More...</p>
        </div>
        <div className='featured-products'>
            {FeaturedProducts.map((FeaturedProduct) => {
                return (
                    <div className='featured-product' style={{display: selectedCollection === 'All Furniture' ? 'block' : 'none'}}>
                        <Link key={FeaturedProduct.productId} to={`/productdetails/${FeaturedProduct.productId}`}>
                            <img src={FeaturedProduct.FeaturedProductsImg} alt={FeaturedProduct.Alt} />
                        </Link>
                        <p className='featured-product-p'>{FeaturedProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${FeaturedProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(FeaturedProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
            {BedroomProducts.map((BedroomProduct) => {
                return (
                    <div className='featured-product' style={{display: selectedCollection === 'Bedroom' ? 'block' : 'none'}}>
                        <img src={BedroomProduct.FeaturedProductsImg} alt={BedroomProduct.Alt} />
                        <p className='featured-product-p'>{BedroomProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${BedroomProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(BedroomProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
            {LivingRoomProducts.map((LivingRoomProduct) => {
                return (
                    <div className='featured-product' style={{display: selectedCollection === 'Living Room' ? 'block' : 'none'}}>
                        <img src={LivingRoomProduct.FeaturedProductsImg} alt={LivingRoomProduct.Alt} />
                        <p className='featured-product-p'>{LivingRoomProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${LivingRoomProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(LivingRoomProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
            {HomeOfficeProducts.map((HomeOfficeProduct) => {
                return (
                    <div className='featured-product' style={{display: selectedCollection === 'Home Office' ? 'block' : 'none'}}>
                        <img src={HomeOfficeProduct.FeaturedProductsImg} alt={HomeOfficeProduct.Alt} />
                        <p className='featured-product-p'>{HomeOfficeProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${HomeOfficeProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(HomeOfficeProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
            {DiningTableProducts.map((DiningTableProduct) => {
                return (
                    <div className='featured-product' style={{display: selectedCollection === 'Dining Table' ? 'block' : 'none'}}>
                        <img src={DiningTableProduct.FeaturedProductsImg} alt={DiningTableProduct.Alt} />
                        <p className='featured-product-p'>{DiningTableProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${DiningTableProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(DiningTableProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
        </div>    </div>
  )
}

export default Collection;
