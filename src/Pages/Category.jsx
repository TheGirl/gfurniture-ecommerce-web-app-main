import React from 'react'
import CategoryHead from '../components/CategoryHead/CategoryHead';
import Products from '../components/Products/Products';
import SimilarItems from '../components/SimilarItems/SimilarItems';
import Footer from '../components/Footer/Footer';

const Category = () => {
  return (
    <div>
      <CategoryHead />
      <Products />
      <SimilarItems />
      <Footer />
    </div>
  )
}

export default Category