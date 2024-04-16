import './Navbar.css'
import { cartIcon, menuIcon, gfurniturelogo } from '../index'
import { IoSearch, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useContext } from 'react'
import cartContext from '../../CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false, false])
  const [searchInputFocus, setsearchInputFocus] = useState(true);
  const [hamburgerClick, sethamburgerClick] = useState(false);
  const { cartItems } = useContext(cartContext)

  function handleClick(index) {
    const updatedState = [...clicked];
    // updatedState.map((state) => {
    //   return (
    //     state && !state;
    //     updatedState[]
    //   )
    // })
    updatedState[index] = !clicked[index];
    setClicked(updatedState);
  }

  function toggleNavigation() {
    setsearchInputFocus(!searchInputFocus);
  }

  function handleHamburgerClick() {
    sethamburgerClick(!hamburgerClick)
  }

  return (
    <div>
      <nav>
        <div>
          <Link to={'/'}><img className='company-logo' src={gfurniturelogo} alt="G-furniture Company Logo" width={40} height={40}/></Link>
        </div>
        <ul>
          <a onClick={() => handleClick(0)}>
            <div>
              <p>Office Furniture</p>
              <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[0] ? 'rotate(180deg)' : 'none'}}/>
            </div>

            <div  className='drop-down' style={{display: clicked[0] ? 'flex' : 'none'}}>
              <a href="/">Strong Tables</a>
              <a href="/">Strong Chairs</a>
              <a href="/">Book Shelves</a>
            </div>
          </a>
          <a onClick={() => handleClick(1)}>
            <div>
              <p>Home Furniture</p>
              <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[1] ? 'rotate(180deg)' : 'none'}} />
            </div>

            <div classname='drop-down' style={{display: clicked[1] ? 'flex' : 'none'}}>
              <a href="/">Beds</a>
              <a href="/">Matresses</a>
              <a href="/">Wardrobes</a>
            </div>
          </a>
          <a onClick={() => handleClick(2)}>
            <div>
              <p>Living Room</p>
              <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[2] ? 'rotate(180deg)' : 'none'}}/>
            </div>

            <div  classname='drop-down' style={{display: clicked[2] ? 'flex' : 'none'}}>
              <a href="/">Cushion</a>
              <a href="/">Book Shelves</a>
              <a href="/">Matresses</a>
            </div>
          </a>
          <a onClick={() => handleClick(3)}>
            <div>
              <p>About Us</p>
              <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[3] ? 'rotate(180deg)' : 'none'}}/>
            </div>

            <div  classname='drop-down' style={{display: clicked[3] ? 'flex' : 'none'}}>
              <a href="/">Our Office</a>
              <a href="/">Our Policies</a>
              <a href="/">Customer Care</a>
            </div>
          </a>
          <a onClick={() => handleClick(4)}>
            <div>
              <p>Contact Us</p>
              <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[4] ? 'rotate(180deg)' : 'none'}}/>
            </div>

            <div classname='drop-down'  style={{display: clicked[4] ? 'flex' : 'none'}}>
              <a href="/">Order On Call</a>
              <a href="/">Our Sales Reps</a>
              <a href="/">Mail Us</a>
            </div>
          </a>
        </ul>
        <div>
          <Link to={'/cart'}>
            <img className='cartImage' src={cartIcon} alt="" />
          </Link>
          <div className='productCount' style={{display: cartItems.length > '0' ? 'block' : 'none'}}>{cartItems.length}</div>
        </div>
        <div className='nav-btns'>
          <button>Login</button>
          {/* <button>Get Started</button> */}
        </div>
      </nav>
      
      <div className='mobile'>
        <div>
          <GiHamburgerMenu className='hamburger' onClick={handleHamburgerClick}/>
        </div>
        <div>
          <div className='search-area'>
            <input type="text" placeholder='Search Products' onFocus={toggleNavigation} onBlur={toggleNavigation} style={{width: searchInputFocus ? "200px" : "300px"}}/>
            <IoSearch className='search-icon' style={{marginLeft:'20px'}}/>
            <div>
              <Link to={'/cart'}>
                <img className='cart' src={cartIcon} alt="" />
              </Link>
              <div className='productCount' style={{display: cartItems.length > '0' ? 'block' : 'none'}}>{cartItems.length}</div>
            </div>
          </div>
        </div>
        
        {hamburgerClick && 
        <div className='mobile-nav-background'>
          <div className='mobile-nav-display'>
            <div className='mobile-nav-head'>
              <img src={gfurniturelogo} alt=""/>
              <IoClose className='close-btn' onClick={handleHamburgerClick}/>
            </div>
            <nav className='mobile-nav'>
              <input type="text" placeholder='Search Products'/>
              <div className='xyz' onClick={() => handleClick(0)}>
                <div className='nav-options' style={{background: clicked[0] ? '#E3E6EB' : 'transparent'}}>
                  <p>Home Furniture</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[0] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div className='mobile-drop-down' style={{display: clicked[0] ? 'flex' : 'none'}}>
                  <a href="/">Beds</a>
                  <a href="/">Matresses</a>
                  <a href="/">Wardrobes</a>
                </div>
              </div>
              <div className='xyz' onClick={() => handleClick(1)}>
                <div className='nav-options' style={{background: clicked[1] ? '#E3E6EB' : 'transparent'}}>
                  <p>Living Room</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[1] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div  className='mobile-drop-down' style={{display: clicked[1] ? 'flex' : 'none'}}>
                  <a href="/">Cushion</a>
                  <a href="/">Book Shelves</a>
                  <a href="/">Matresses and Rugs</a>
                </div>
              </div>
              <div className='xyz' onClick={() => handleClick(2)}>
                <div className='nav-options' style={{background: clicked[2] ? '#E3E6EB' : 'transparent'}}>
                  <p>Office Furniture</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[2] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div  className='mobile-drop-down' style={{display: clicked[2] ? 'flex' : 'none'}}>
                  <a href="/">Strong Tables</a>
                  <a href="/">Strong Chairs</a>
                  <a href="/">Book Shelves</a>
                </div>
              </div>
              <div className='xyz' onClick={() => handleClick(3)}>
                <div className='nav-options' style={{background: clicked[3] ? '#E3E6EB' : 'transparent'}}>
                  <p>About Us</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[3] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div  className='mobile-drop-down' style={{display: clicked[3] ? 'flex' : 'none'}}>
                  <a href="/">Our Office</a>
                  <a href="/">Terms and Policies</a>
                  <a href="/">Our Customer Services</a>
                </div>
              </div>
              <div className='xyz' onClick={() => handleClick(4)}>
                <div className='nav-options' style={{background: clicked[4] ? '#E3E6EB' : 'transparent'}}>
                  <p>Contact Us</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[4] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div  className='mobile-drop-down' style={{display: clicked[4] ? 'flex' : 'none'}}>
                  <a href="/">Order On Call</a>
                  <a href="/">Meet Our Sales Reps</a>
                  <a href="/">Contact Through Mail</a>
                </div>
              </div>
              <div className='xyz' onClick={() => handleClick(5)}>
                <div className='nav-options' style={{background: clicked[5] ? '#E3E6EB' : 'transparent'}}>
                  <p style={{fontWeight:'bolder'}}>Settings</p>
                  <img className='menuIcon' src={menuIcon} alt="" style={{transform: clicked[5] ? 'none' : 'rotate(-90deg)'}} />
                </div>

                <div className='mobile-drop-down' style={{display: clicked[5] ? 'flex' : 'none'}}>
                  <a href="/">My Account</a>
                  <a href="/">Language</a>
                  <a href="/">Currency</a>
                </div>
              </div>
            </nav>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar