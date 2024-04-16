import './FashionTrends.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FashionTrendsImg } from '../index';

const FashionTrends = () => {
  return (
    <div className='fashionTrends'>
        <div className='fashionTrendsTexts'>
            <div>
                <div className='purpleColored1'></div>
                <h3 className='fashionTrendsTextsBigHeading'>Enjoy Our Latest Fashion Trends and Style</h3>
                <p className='fashionTrendsTextsBigParagraph'>Ship our curated collection of fashion items and stay ahead of the fashion game</p>
            </div>
            <div className='qualityAndStyle'>
                <div>
                    <h5>Quality</h5>
                    <p>Our fashion items are crafted with the highest materials and attention to details</p>
                </div>
                <div>
                    <div className='abcd2'>
                        <h5>Style</h5>
                        <div></div>
                    </div>
                    <p>Express you unique style with our wide range of trendy items.</p>
                </div>
            </div>
            <div>Explore <FaArrowRightLong /></div>
        </div>
        <img className='fashionTrendsImg' src={FashionTrendsImg} alt="" />
    </div>
  )
}

export default FashionTrends