// import './Products.css';
// import { useState } from 'react';
// import { menuIcon } from '../index';
// import { Link } from 'react-router-dom';
// // import { ChairProducts } from '../Constants';
// import cartContext from '../../CartContext.jsx';
// import { useContext } from 'react';

// const Products = () => {
    
//   const { addToCart, shuffledArray, shuffleArray, rowDisplay } = useContext(cartContext);
    
//   const [clicked, setClicked] = useState([false, false, false])

//   function handleClick(index) {
//     const updatedState = [...clicked];
//     updatedState[index] = !clicked[index];
//     setClicked(updatedState);
//   }

//   return (
//     <div className='products' style={{flexDirection: rowDisplay ? 'column' : 'row'}}>
//         <div className='abcde'>
//             <p style={{fontFamily: 'Sansation', fontSize: '28px', marginTop: '0'}}>Sort By</p>
//             <div className='productsNavigation' style={{display: rowDisplay ? 'flex' : 'block', flexDirection: rowDisplay ? 'column' : 'row'}}>
//                 <div onClick={() => handleClick(0)} className='productNav'>
//                     <p style={{color: '#000000', fontWeight: '900'}}>Category</p>
//                     <img src={menuIcon} alt="" style={{transform: clicked[0] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
//                 </div>
//                 <div style={{display: clicked[0] ? 'block' : 'none'}} className='productNavItem'>
//                     <p onClick={shuffleArray}>Wardrobes</p>
//                     <p onClick={shuffleArray}>Beds</p>
//                     <p onClick={shuffleArray}>Matresses</p>
//                     <p onClick={shuffleArray}>Dressers and Drawers</p>
//                     <p onClick={shuffleArray}>Bedrooms</p>
//                     <p onClick={shuffleArray}>Ensembles</p>
//                 </div>
//             </div>
//             <div className='productsNavigation'>
//                 <div onClick={() => handleClick(1)} className='productNav'>
//                     <p style={{color: '#000000', fontWeight: '900'}}>Color</p>
//                     <img src={menuIcon} alt="" style={{transform: clicked[1] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
//                 </div>
//                 <div style={{display: clicked[1] ? 'block' : 'none'}} className='productNavItem'>
//                     <p onClick={shuffleArray}>Light Colored</p>
//                     <p onClick={shuffleArray}>Dark Colored</p>
//                     <p onClick={shuffleArray}>Cream Colored</p>
//                     <p onClick={shuffleArray}>Deep Colored</p>
//                 </div>
//             </div>
//             <div className='productsNavigation'>
//                 <div onClick={() => handleClick(2)} className='productNav'>
//                     <p style={{color: '#000000', fontWeight: '900'}}>Price</p>
//                     <img src={menuIcon} alt="" style={{transform: clicked[2] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
//                 </div>
//                 <div style={{display: clicked[2] ? 'block' : 'none'}} className='productNavItem'>
//                     <p onClick={shuffleArray}>$20 - $30</p>
//                     <p onClick={shuffleArray}>$30 - $40</p>
//                     <p onClick={shuffleArray}>$60 - $70</p>
//                     <p onClick={shuffleArray}>Highly Valued</p>
//                 </div>
//             </div>
//         </div>
//         <div className='displayedProducts'>
//             {shuffledArray.map((chairProduct) => {
//                 return (
//                     <div className='featured-product'>
//                         <Link key={chairProduct.productId} to={`/productdetails/${chairProduct.productId}`}>
//                             <img src={chairProduct.FeaturedProductsImg} alt={chairProduct.Alt} />
//                         </Link>
//                         <p className='featured-product-p'>{chairProduct.paragraph}</p>
//                         <div className='featured-product-bottom'>
//                             <p className='featured-product-price'>${chairProduct.price}</p>
//                             <p className='featured-product-cta' onClick={() => {addToCart(chairProduct)}}>Add to</p>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Products;





import './Products.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../CartContext.jsx';
import { useContext } from 'react';
import { menuIcon } from '../index.js';

const Products = () => {
  const { addToCart, shuffledArray, shuffleArray, rowDisplay } = useContext(cartContext);
  const [clicked, setClicked] = useState([false, false, false])

  function handleClick(index) {
    const updatedState = [...clicked];
    updatedState[index] = !clicked[index];
    setClicked(updatedState);
  }

  return (
    <div className='products' style={{ flexDirection: rowDisplay ? 'column' : 'row' }}>
        <div className='abcde'>
            <p style={{fontFamily: 'Sansation', fontSize: '28px', marginTop: '0'}}>Sort By</p>
            <div className='productsNavigation' style={{display: rowDisplay ? 'flex' : 'block', flexDirection: rowDisplay ? 'column' : 'row'}}>
                <div onClick={() => handleClick(0)} className='productNav'>
                    <p style={{color: '#000000', fontWeight: '900'}}>Category</p>
                    <img src={menuIcon} alt="" style={{transform: clicked[0] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
                </div>
                <div style={{display: clicked[0] ? 'block' : 'none'}} className='productNavItem'>
                    <p onClick={shuffleArray}>Wardrobes</p>
                    <p onClick={shuffleArray}>Beds</p>
                    <p onClick={shuffleArray}>Matresses</p>
                    <p onClick={shuffleArray}>Dressers and Drawers</p>
                    <p onClick={shuffleArray}>Bedrooms</p>
                    <p onClick={shuffleArray}>Ensembles</p>
                </div>
            </div>
            <div className='productsNavigation'>
                <div onClick={() => handleClick(1)} className='productNav'>
                    <p style={{color: '#000000', fontWeight: '900'}}>Color</p>
                    <img src={menuIcon} alt="" style={{transform: clicked[1] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
                </div>
                <div style={{display: clicked[1] ? 'block' : 'none'}} className='productNavItem'>
                    <p onClick={shuffleArray}>Light Colored</p>
                    <p onClick={shuffleArray}>Dark Colored</p>
                    <p onClick={shuffleArray}>Cream Colored</p>
                    <p onClick={shuffleArray}>Deep Colored</p>
                </div>
            </div>
            <div className='productsNavigation'>
                <div onClick={() => handleClick(2)} className='productNav'>
                    <p style={{color: '#000000', fontWeight: '900'}}>Price</p>
                    <img src={menuIcon} alt="" style={{transform: clicked[2] ? 'rotate(180deg)' : 'rotate(360deg)'}}/>
                </div>
                <div style={{display: clicked[2] ? 'block' : 'none'}} className='productNavItem'>
                    <p onClick={shuffleArray}>$20 - $30</p>
                    <p onClick={shuffleArray}>$30 - $40</p>
                    <p onClick={shuffleArray}>$60 - $70</p>
                    <p onClick={shuffleArray}>Highly Valued</p>
                </div>
            </div>
        </div>
        <div className='displayedProducts'>
            {shuffledArray.map((chairProduct) => {
                return (
                    <div className='featured-product'>
                        <Link key={chairProduct.productId} to={`/productdetails/${chairProduct.productId}`}>
                            <img src={chairProduct.FeaturedProductsImg} alt={chairProduct.Alt} />
                        </Link>
                        <p className='featured-product-p'>{chairProduct.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${chairProduct.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(chairProduct)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
        </div>    </div>
  )
}

export default Products;
