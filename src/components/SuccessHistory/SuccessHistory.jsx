import './SuccessHistory.css';
import { SuccessHistoryImage } from '../index'

import React from 'react'

const SuccessHistory = () => {
  return (
    <div className='SuccessHistory'>
        <img src={SuccessHistoryImage} alt="" />
        <div>
            <div className='SuccessHistoryHeaderTexts'>
                <p>Customer Stories</p>
                <h1>Success History of <br /> Our Customers</h1>
                <p>Emphasise time-saving and use numbers to maximise credibility.</p>
            </div>
            <div className='stats'>
                <div>
                    <div>
                        <h1>10X</h1>
                        <p>Increase in productivity</p>
                    </div>
                    <div>
                        <h1>5k+</h1>
                        <p>Happy customers</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>300%</h1>
                        <p>Return on investment</p>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <p>5-star reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessHistory;