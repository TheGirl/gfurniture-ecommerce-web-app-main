import './SimilarItems.css';
import { SimilarItemInfo } from '../Constants';
import cartContext from '../../CartContext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import React from 'react'

const SimilarItems = () => {
     
  const { addToCart } = useContext(cartContext);

  return (
    <div className='similarItems'>
        <h1>Similar Items</h1>
        <div className='displayedProducts'>
            {SimilarItemInfo.map((SimilarItem) => {
                return (
                    <div className='featured-product'>
                        <Link key={SimilarItem.productId} to={`/productdetails/${SimilarItem.productId}`}>
                            <img src={SimilarItem.FeaturedProductsImg} alt={SimilarItem.Alt} />
                        </Link>
                        <p className='featured-product-p'>{SimilarItem.paragraph}</p>
                        <div className='featured-product-bottom'>
                            <p className='featured-product-price'>${SimilarItem.price}</p>
                            <p className='featured-product-cta' onClick={() => {addToCart(SimilarItem)}}>Add to</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SimilarItems;