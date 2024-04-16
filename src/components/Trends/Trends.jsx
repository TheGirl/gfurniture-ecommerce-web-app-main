import { paginationArrowright, paginationArrowleft } from '../index';
import './Trends.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { trends } from '../Constants';
import { useState } from 'react';

const Trends = () => {

  const trendsPerPage = 3;

  const [pageNumber, setPageNumber] = useState(0)

  const startIndex = pageNumber * trendsPerPage;
  
  const endIndex = startIndex + trendsPerPage;

  const displayedTrends = trends.slice(startIndex, endIndex);

  function moveToNextPage() {
    setPageNumber(pageNumber + 1);
  }

  function moveToPreviousPage() {
    setPageNumber(pageNumber - 1);
  }

  return (
    <div className='trends'>
        <div className='trends-head'>
            <div>
                <p style={{fontFamily:'Inter', fontSize:'14px', marginBottom: '-10px'}}>Furniture</p>
                <h2>Discover the Latest Trends</h2>
                <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
            </div>
            <div>Explore <FaArrowRightLong /></div>
        </div>
        
        <div className='trends-container'>
            {displayedTrends.map((currentPagetrends) => {
            return (
                    <div className='trends-container-div'>
                        <img className='trends-img' src={currentPagetrends.displayImg} alt="" />
                        <div className='trends-info'>
                            <p className='trends-infop1'>Furniture</p>
                            <p className='trends-infop2'>{currentPagetrends.trendTitle}</p>
                            <p className='trends-infop3'>{currentPagetrends.trendDesc}</p>
                            <div className='author-info'>
                                <img src={currentPagetrends.authorPics} alt="" />
                                <div>
                                    <p>{currentPagetrends.authorName}</p>
                                    <p>{currentPagetrends.date} . {currentPagetrends.readTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='trends-pagination-btn'>
            {/* <button disabled='true'></button> */}
            <img style={{display: startIndex === 0 ? "none" : "block"}} onClick={moveToPreviousPage} src={paginationArrowleft} alt="" />
            <img style={{display: endIndex === trends.length ? "none" : "block"}} onClick={moveToNextPage} src={paginationArrowright} alt="" />
        </div>
    </div>
  )
}

export default Trends