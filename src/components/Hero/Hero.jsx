import { FaArrowRightLong } from "react-icons/fa6";
import { HeroImage1, HeroImage2, HeroImage3, HeadingLayer } from "../index";
import './Hero.css'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="heroTexts">
                <h1>Discover the Latest <br /> Furniture Trends</h1>
                <img src={HeadingLayer} alt="" />
                <p>Shop the Latest Fashion Items and Stay ahead of the style game</p>
                <Link to={'/category'}>Explore More <FaArrowRightLong /></Link>
            </div>
            <div className="heroImg">
                <div>
                    <div className="div-image-container"><img className="heroImage1" src={HeroImage1} alt="A Cushion"/></div>
                    <div className="div-image-container"><img className="heroImage2" src={HeroImage2} alt="A Cushion"/></div>
                </div>
                <div className="div-image-container"><img className="heroImage3" src={HeroImage3} alt="A Cushion"/></div>
            </div>
            <Link className="mobile-hero-button" to={'/category'}>Explore More <FaArrowRightLong /></Link>
        </div>
    )
}

export default Hero