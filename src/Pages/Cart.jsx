// import '../components/Cart.css';
// import { TrendsImg1 } from '../components';
// import { RiDeleteBinFill } from "react-icons/ri";
// import { IoClose } from 'react-icons/io5';
// import { Link } from 'react-router-dom';

// const Cart = () => {

//   const storedArray = JSON.parse(localStorage.getItem('cartItems'));

//   // const indexToRemove = 0;
//   // const modifiedArray = [...storedArray.slice(0, indexToRemove ), ...storedArray.slice(indexToRemove + 1)];

//   // localStorage.setItem('cartItems', JSON.stringify(modifiedArray));
//   // console.log(storedArray.length);
//   // localStorage.clear();

//   // const retrievedCartItems =  JSON.parse(localStorage.getItem("cartItems"));
//   // console.log(retrievedCartItems);
//   // localStorage.removeItem(modifiedArray);

//   function deleteCartItem(cartItemIndex) {
//     const modifiedArray = [...storedArray.slice(0, cartItemIndex), ...storedArray.slice(cartItemIndex + 1)];
//     localStorage.setItem('cartItem', JSON.stringify(modifiedArray));
//     console.log(modifiedArray.length);
//     // localStorage.clear();
//   }

//   // useEffect(() => {
//   //   localStorage.setItem('cartItems', JSON.stringify(modifiedArray));
//   // }, [modifiedArray]);

//   return (
//     <div className=''>
//       <div className='cartCartContainer'>
//         <div className='cartHeader'>
//           <p className='cartHeading'>Your Shopping</p>
//           <p style={{fontFamily:'Inter', fontWeight:'500', color: '#6A6D70'}}>Home / <span style={{color: '#000000'}}>My Cart</span></p>
//         </div>
//         <div className='cartItemsContainer'>
//           <div className='cartItems'>
//             {/* <div style={{fontFamily: 'Inter'}} className='cartItemsTag'>
//               <p>Items</p>
//               <p>Description</p>
//               <p>Quantity</p>
//               <p>Price</p>
//             </div> */}
//             {storedArray.length < 1 ? 
//             <div style={{fontFamily:'Sansation', textAlign:'center',}}  className='NullCartItem'>
//               <h1>Your Cart Items Will Be Displayed Here. No Items In Your Cart Yet. Go To Products Page To Add Some Items</h1>
//               <Link to={'/category'}><button style={{fontFamily:'Sansation', padding:'10px 20px', fontSize:'18px'}}>View Products</button></Link>
//             </div> : 
//             (storedArray.map((modifiedArrayContent, index) => {
//               return(
//             <div className='cartItem' key={index}>
//               <div>
//                 <img src={``} alt={modifiedArrayContent.Alt} />
//                 <IoClose style={{display:'none'}}/>
//               </div>
//               <div className='infoOptionPriceContainer'> 
//                 <div className='cartProductInfo'>
//                     <div>
//                       <p className='cartProductName'>{modifiedArrayContent.paragraph}</p>
//                       <p className='cartProductDesc'>The Modern Soft Chair boasts a harmonious</p>
//                     </div>
//                     <div>
//                       <IoClose className='mobileCartDelete'/>
//                     </div>
//                 </div>
//                 <div className='cartItemDesc'>
//                   <div className='cartItemOption'>
//                     <RiDeleteBinFill onClick={() => {deleteCartItem(index)}} className='deleteItemBtn' />
//                      <div>
//                       <p>-</p>
//                       <p>1</p>
//                       <p>+</p>
//                     </div>
//                   </div>
//                   <p className='cartItemPrice'>$30.99</p>
//                 </div>
//               </div>
//             </div>
//               )
//             }))
//           }
//           </div>
//           <div className='orderSummary'>
//             <p className='orderSummaryHeading'>Order Summary</p>
//             <div>
//               <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
//                 <p>Subtotal</p>
//                 <p>$565</p>
//               </div>
//               <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
//                 <p>Subtotal</p>
//                 <p>$565</p>
//               </div>
//               <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
//                 <p>Discount (-20%)</p>
//                 <p>$424</p>
//               </div>
//               <div style={{display:'flex', justifyContent:'space-between', fontSize:'20px', fontWeight:'bold'}}>
//                 <p>Total</p>
//                 <p>$467</p>
//               </div>
//             </div>
//             <button style={{ backgroundColor:'#000000', padding:'10px 20px', borderRadius:'50px'}}><Link style={{color:'#ffffff'}}>Go To Checkout</Link></button>
//             <button style={{ backgroundColor:'#EEF2FB', padding:'10px 20px', borderRadius:'50px'}}><Link style={{color:'grey'}}>Continue Shopping</Link></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart;





import '../components/Cart.css';
// import { TrendsImg1 } from '../components';
import { RiDeleteBinFill } from "react-icons/ri"
import { toast } from "react-toastify";
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import cartContext from '../CartContext';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { YouMayLike } from '../components/Constants'
import Footer from '../components/Footer/Footer';

const Cart = () => {  
  const { cartItems, setCartItems, addToCart } = useContext(cartContext);
  const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  let [totalAmount, setTotalAmount] = useState(0)
  
  function deleteCartItem(cartItemIndex) {
    const localCartItems = cartItems.filter((_, index) => index !== cartItemIndex);
    setCartItems(localCartItems);
  }

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // useEffect(() => {
  //   return( () => { 
  //       return (
  //           cartItems.map((cartItem) => {
  //             // eslint-disable-next-line
  //           totalAmount = Number(cartItem.price) + totalAmount;
  //           setTotalAmount(totalAmount);
  //   }));            
  //     }
  // )}, [cartItems]);

  useEffect(() => {
    let totalAmount = 0;
    cartItems.forEach((cartItem) => {
      totalAmount += Number(cartItem.price);
    });
    setTotalAmount(totalAmount);
  }, [cartItems]);
  
  function increase(cartItem) {
    // const newQuantity = cartItem.quantity + 1;
    // const filteredArray = cartItems.filter((currentArray, index) => currentArray.productId !== cartItem.productId); 
    // const updatedCartItem = { ...cartItem, quantity: newQuantity };
    // setCartItems([...filteredArray, updatedCartItem]);
    // console.log(cartItem.quantity);
    toast.warning(`${cartItem.paragraph} only has one of its type left !`, {
      position: 'top-right',
    });
  }
  
  function decrease(cartItem) {
    if (cartItem.quantity > 1) {
      const newQuantity = cartItem.quantity - 1;
      const updatedCartItem = { ...cartItem, quantity: newQuantity };
  
      const updatedCartItems = cartItems.map((item, index) =>
        index === cartItems.indexOf(cartItem) ? updatedCartItem : item
      );
  
      setCartItems(updatedCartItems);
    }
  }
  

  // function decrease() {
  //   if (productCount > 1) {
  //     let newCount = productCount - 1;
  //     setProductCount(newCount);
  //   }
  // }
  
  return (
    localStorageCartItems < 1 ? <div>
    <div className='nullCartItem'>
      <h1>Your Cart Items Will be Displayed Here. No Items in your Cart yet. Go to the Products Page to Add Some Items to your Cart</h1>
      <Link to={'/category'}><button>View Products</button></Link>
    </div>
    <Footer />
  </div> :
    <div className=''>
    <div className='cartCartContainer'>
      <div className='cartHeader'>
        <p className='cartHeading'>Your Shopping</p>
        <p style={{ fontFamily: 'Inter', fontWeight: '500', color: '#6A6D70' }}>Home / <span style={{ color: '#000000' }}>My Cart</span></p>
      </div>
      <div className='cartItemsContainer'>
        <div className='cartItems'>
          {localStorageCartItems.length < 1 ? (
            <div style={{ fontFamily: 'Sansation', textAlign: 'center'}} className='NullCartItem'>
              <h1 style={{color:''}}>Your Cart Items Will Be Displayed Here. No Items In Your Cart Yet. Go To Products Page To Add Some Items To Your Cart</h1>
              <Link to={'/category'}><button style={{ fontFamily: 'Sansation', padding: '10px 20px', fontSize: '18px' }}>View Products</button></Link>
            </div>
          ) : (
            localStorageCartItems.map((cartItem, index) => (
              <div className='cartItem' key={index}>
                <div>
                  <img src={cartItem.FeaturedProductsImg} alt={cartItem.Alt} />
                  <IoClose style={{ display: 'none' }} />
                </div>
                <div className='infoOptionPriceContainer'>
                  <div className='cartProductInfo'>
                    <div>
                      <p className='cartProductName'>{cartItem.paragraph}</p>
                      <p className='cartProductDesc'>{cartItem.ShortProductInfo}</p>
                    </div>
                    <div>
                      <IoClose onClick={() => deleteCartItem(index)} className='mobileCartDelete' />
                    </div>
                  </div>
                  <div className='cartItemDesc'>
                    <div className='cartItemOption'>
                      <RiDeleteBinFill onClick={() => deleteCartItem(index)} className='deleteItemBtn' />
                      <div>
                        <p onClick={() => decrease(cartItem)}>-</p>
                        <p>{cartItem.quantity}</p>
                        <p onClick={() => increase(cartItem)}>+</p>
                      </div>
                    </div>
                    <p className='cartItemPrice'>{`$${cartItem.price}`}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div style={{display: localStorageCartItems.length < 1 ? 'none' : 'flex'}} className='orderSummary'>
          <p className='orderSummaryHeading'>Order Summary</p>
            <div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
                <p>Subtotal</p>
                <p>${totalAmount}
                </p>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
                <p>Discount (-20%)</p>
                <p>${20/100 * (totalAmount)}</p>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'14px', color:'#5E5D6C', marginBottom:'0', marginTop:'0'}}>
                <p>Delivery Fee</p>
                <p>$10</p>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'20px', fontWeight:'bold'}}>
                <p>Total</p>
                {/* <p>${Math.round(totalAmount + (20/100 * totalAmount + 10))}</p> */}
                <p>${Math.round((totalAmount - (20/100 * (totalAmount))) + 10)}</p>
              </div>
            </div>
            <button style={{ backgroundColor:'#000000', padding:'10px 20px', borderRadius:'50px'}}><Link to={'/checkout'} style={{color:'#ffffff'}}>Go To Checkout</Link></button>
            <button style={{ backgroundColor:'#EEF2FB', padding:'10px 20px', borderRadius:'50px'}}><Link to={'/category'} style={{color:'grey'}}>Continue Shopping</Link></button>
        </div>
      </div>
    </div>
    <div style={{display: localStorageCartItems.length < 1 ? 'none' : 'block'}} className='similarItems'>
      <h1>You May Like</h1>
      <div className='displayedProducts'>
          {YouMayLike.map((like) => {
              return (
                  <div className='featured-product'>
                      <Link key={like.productId} to={`/productdetails/${like.productId}`}>
                          <img src={like.FeaturedProductsImg} alt={like.Alt} />
                      </Link>
                      <p className='featured-product-p'>{like.paragraph}</p>
                      <div className='featured-product-bottom'>
                          <p className='featured-product-price'>${like.price}</p>
                          <p className='featured-product-cta' onClick={() => {addToCart(like)}}>Add to</p>
                      </div>
                  </div>
              )
          })}
      </div>
  </div>
  <Footer />
  </div> 
  );
}

export default Cart;
