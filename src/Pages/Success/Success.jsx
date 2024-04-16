import './Success.css';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import cartContext from '../../../src/CartContext';
import { useContext } from 'react';

const Success = () => {

  const { setCartItems,} = useContext(cartContext);

  return (
    <div className='successMessage'>
        <div className='successMessageContainer'>
           <IoCart style={{color:'#C900C1', width:'40px', height:'40PX'}}/>
           <h1 style={{fontFamily:'Sansation', color:'#C900C1', fontWeight:''}}>Thank You For Your Purchase</h1> 
           <p style={{fontFamily:'sansation', fontSize:'13px', marginTop:'30px'}}>Check Your Inbox For The Receipt of Your Transaction</p>
           <p style={{fontFamily:'sansation', fontSize:'13px', marginTop:'30px'}}>For any questions or enquiries contact us through example@gmail.com </p>
           <button onClick={() => setCartItems([])}><Link to={'/category'}>Continue Shopping</Link></button>
        </div>
    </div>
  )
}

export default Success;