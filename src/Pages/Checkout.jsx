import '../components/Checkout.css';
import '../components/Cart.css';
import { TrendsImg1 } from '../components';
import { RiDeleteBinFill } from "react-icons/ri"
import { toast } from "react-toastify";
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import cartContext from '../CartContext';
import { useContext, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa6";
import Footer from '../components/Footer/Footer';

const Checkout = () => {

  const [editAdressInfo, setEditAddressInfo] = useState(false)
  const { cartItems, setCartItems } = useContext(cartContext);
  const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  function deleteCartItem(cartItemIndex) {
    const localCartItems = cartItems.filter((_, index) => index !== cartItemIndex);
    setCartItems(localCartItems);
  }

  function increase(cartItem) {
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

  return (
    <div>
      <div className='checkout'>
        <h2 className='checkoutHeading'>Checkout</h2>
        <p style={{ fontFamily: 'Inter', fontWeight: '500', color: '#6A6D70', marginBottom:'30px' }}>Home / My Cart / <span style={{ color: '#000000' }}>Checkout</span></p>
        <div className='checkoutContainer'>
          <div className='checkoutInfo'>
            <div className='deliveryInfo'>
              <div className='shippingInfoHeading'>
                <h3>Delivery Information</h3>
                <Link to={'#adressInfo'} onClick={() => {setEditAddressInfo(!editAdressInfo)}} style={{textDecoration:'none', fontSize:'16px'}}><p style={{fontSize:'14px', fontFamily:'Sansation'}}>Change Address <CiEdit /></p></Link>
              </div>
              <p> 56, Boulevard Street</p>
              <p> FCT, Abuja.</p>
              <p> +234 567 8901 234</p>
              <p>example@gmail.com</p>
            </div>
            <div className='paymentOptions'>
              <h3>Select Your payment Card</h3>
              <div>
                <input type="radio" />
                <label htmlFor="cardOption"><FaCcVisa size={50} color='#C900C1'/></label>
                <label htmlFor="cardOption"><MdOutlinePayment size={50} color='#C900C1'/></label>
                <label htmlFor="cardOption"><FaCcMastercard size={50} color='#C900C1'/></label>
              </div>
              <div>
                <input type="radio" />
                <label htmlFor="cashOption" style={{color:'#5E5D6C'}}>Cash On Delivery</label>
              </div>
            </div>
            <div className='inputArea'>
              <div>
                <label htmlFor="Name">Your Name</label>
                <input placeholder='Enter your card name' type="text" />
              </div>
              <div>
                <label htmlFor="cardNumber">Card Number</label>
                <input placeholder='Enter your card number' type="text" />
              </div>
              <div>
                <div>
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input placeholder="Enter card's expiry date" type="text" />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input placeholder='CVV' type="text" />
                </div>
              </div>
              <div style={{margin:'10px 0'}} className='checkBox'>
                <input type="checkbox" />
                <label htmlFor="checkbox" style={{color:'#6A6D70'}}>Save this card for a faster checkout experience</label>
              </div>
              <Link to={'/success'}><button>Confirm Your Pay</button></Link>
            </div>
          </div>
          <div>
            <h3 style={{marginTop:'0'}}>Order Preview</h3>
            {localStorageCartItems.length < 1 ? (
              <div style={{ fontFamily: 'Sansation', textAlign: 'center', }} className='nullCartItem'>
                <h1 style={{color:''}}>Your Cart Items Will Be Displayed Here. No Items In Your Cart Yet. Go To Products Page To Add Some Items To Your Cart</h1>
                <Link to={'/category'}><button style={{ fontFamily: 'Sansation', padding: '10px 20px', fontSize: '18px' }}>View Products</button></Link>
              </div>
            ) : (
              localStorageCartItems.map((cartItem, index) => (
                <div className='checkoutCartItem' key={index}>
                  <div>
                    <img className='checkoutCartItemImg' src={TrendsImg1} alt={cartItem.Alt} />
                    <IoClose style={{ display: 'none' }} />
                  </div>
                  <div className='infoOptionPriceContainer'>
                    <div className='checkoutCartProductInfo'>
                      <div>
                        <p className='checkoutCartProductName'>{cartItem.paragraph}</p>
                        <p className='checkoutCartProductDesc'>{cartItem.ShortProductInfo}</p>
                      </div>
                      <div>
                        <IoClose onClick={() => deleteCartItem(index)} className='mobileCartDelete' />
                      </div>
                    </div>
                    <div className='checkoutCartItemDesc'>
                      <div className='checkoutCartItemOption'>
                        <RiDeleteBinFill onClick={() => deleteCartItem(index)} className='deleteItemBtn' />
                        <div>
                          <p onClick={() => decrease(cartItem)}>-</p>
                          <p>{cartItem.quantity}</p>
                          <p onClick={() => increase(cartItem)}>+</p>
                        </div>
                      </div>
                      <p className='checkoutCartItemPrice'>{`$${cartItem.price}`}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <form id='adressInfo' style={{display: editAdressInfo ? 'flex' : 'none'}} className='addressInfo'>
          <h3>Address Information</h3>
          <div>
            <label htmlFor="houseNum">House Number</label>
            <input placeholder='Your House Number' type="text" />
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input placeholder='Your Street Address' type="text" />
          </div>
          <div>
            <label htmlFor="town-city">Town/City</label>
            <input placeholder='Your Town/City Name' type="text" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input placeholder='State' type="text" />
          </div>
          <div>
            <label htmlFor="mail">E-mail</label>
            <input placeholder='Your E-mail Address' type="email" />
          </div>
          <button>Save Information</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout;