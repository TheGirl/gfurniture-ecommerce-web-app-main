import './CategoryHead.css';
import { BiGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { IoOptionsOutline, IoClose } from "react-icons/io5";
import { useState } from 'react';
// import { ChairProducts } from '../Constants';
import { menuIcon, ColorOption1, ColorOption2, ColorOption3, ColorOption4, ColorOption5, ColorOption6, ColorOption7, ColorOption8 } from '../index.js';
import cartContext from '../../CartContext.jsx';
import { useContext } from 'react';

import React from 'react'

const CategoryHead = () => {

  
  const [clicked, setClicked] = useState([false, false, false]);

  const [optionBtnClick, setOptionBtnClick] = useState(false)
    
  const [furnitureType, setFurnitureType] = useState('Living Room');

  const [selectedCollection, setSelectedCollection] = useState('Living Room');

  const { shuffleArray, displayRow, displayColumn} = useContext(cartContext);
  
  function handleClick(index) {
    const updatedState = [...clicked];
    updatedState[index] = !clicked[index];
    setClicked(updatedState);
  }

  function passSelected(selected) {
    setSelectedCollection(selected)
    setFurnitureType(selected)
    shuffleArray()
  }

  function displayOption() {
    setOptionBtnClick(true)
  }

  function unDisplayOption() {
    setOptionBtnClick(false)
  }


  return (
    <div>
        <div className='CategoryHead'>
            <h1>{furnitureType} Furniture</h1>
            <div className='CategoryHeadNav'>    
                <p style={{fontFamily:'Inter', fontWeight:'500', color: '#6A6D70'}}>Home / <span style={{color: '#000000'}}>List of Products</span></p>
                <div>
                    <p>View</p>
                    <BiGridAlt onClick={displayRow}/>
                    <FaList onClick={displayColumn}/>
                </div>
                <IoOptionsOutline onClick={displayOption} className='optionsicon'/>
            </div>
        </div>
        
        <div style={{padding:'0px 100px 50px 100px', paddingBottom: '0'}} className='selection-nav'>
            <p onClick={() => passSelected('All Type Category')} style={{ backgroundColor: selectedCollection === 'All Type Category' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'All Type Category' ? '#ffffff' : '#000000'}}>All Type</p>
            <p onClick={() => passSelected('Bedroom')} style={{ backgroundColor: selectedCollection === 'Bedroom' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Bedroom' ? '#ffffff' : '#000000'}}>Bedroom</p>
            <p onClick={() => passSelected('Living Room')} style={{ backgroundColor: selectedCollection === 'Living Room' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Living Room' ? '#ffffff' : '#000000'}}>Living Room</p>
            <p onClick={() => passSelected('Home Office')} style={{ backgroundColor: selectedCollection === 'Home Office' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Home Office' ? '#ffffff' : '#000000'}}>Home Office</p>
            <p onClick={() => passSelected('Dining Tables')} style={{ backgroundColor: selectedCollection === 'Dining Tables' ? '#000000' : 'rgba(0, 0, 0, 0.15)', color: selectedCollection === 'Dining Tables' ? '#ffffff' : '#000000'}}>Dining Tables</p>
            <p>More...</p>
        </div>

        <div style={{display: optionBtnClick ? 'block' : 'none'}} className='filter'>
            <div className='filterContainer'>
              <div className='filterContainerHeading'>
                <h1>Filter</h1>
                <IoClose onClick={unDisplayOption} className='filter-close-btn'/>
              </div>
              <div className='filterContainerNav'>
                <div className='filterContainerNavOptions'>
                  <div onClick={() => handleClick(0)} className='filterContainerNavOption'>
                      <p >Category</p>
                      <img style={{transform: clicked[0] ? 'rotate(180deg)' : 'none'}} src={menuIcon} alt=""/>
                  </div>
                  <div style={{display: clicked[0] ? 'block' : 'none'}} className='filterNavItem'>
                      <p>Wardrobes</p>
                      <p>Beds</p>
                      <p>Matresses</p>
                      <p>Dressers and Drawers</p>
                      <p>Bedrooms</p>
                      <p>Ensembles</p>
                  </div>
                </div>
                <div className='filterContainerNavOptions'>
                  <div onClick={() => handleClick(1)} className='filterContainerNavOption'>
                      <p >Color</p>
                      <img style={{transform: clicked[1] ? 'rotate(180deg)' : 'none'}} src={menuIcon} alt=""/>
                  </div>
                  <div style={{display: clicked[1] ? 'flex' : 'none', gap: '10px'}} className='filterNavItem'>                    
                      <img src={ColorOption1} alt="" />
                      <img src={ColorOption2} alt="" />
                      <img src={ColorOption3} alt="" />
                      <img src={ColorOption4} alt="" />
                      <img src={ColorOption5} alt="" />
                      <img src={ColorOption6} alt="" />
                      <img src={ColorOption7} alt="" />
                      <img src={ColorOption8} alt="" />
                  </div>
                </div>
                <div className='filterContainerNavOptions'>
                  <div onClick={() => handleClick(2)} className='filterContainerNavOption'>
                      <p >Price</p>
                      <img style={{transform: clicked[2] ? 'rotate(180deg)' : 'none'}} src={menuIcon} alt=""/>
                  </div>
                  <div style={{display: clicked[2] ? 'block' : 'none'}} className='filterNavItem'>
                    <p>$20 - $30</p>
                    <p>$30 - $40</p>
                    <p>$60 - $70</p>
                    <p>Highly Valued</p>
                  </div>
                </div>
                
              </div>
              <button onClick={shuffleArray}>Apply Filter Now</button>
            </div>
        </div>
    </div>
  )
}

export default CategoryHead;