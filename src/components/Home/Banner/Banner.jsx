import "./Banner.scss";
import BannerImg1 from "../../../assets/banner0.webp";
import BannerImg2 from "../../../assets/banner1.webp";
import BannerImg3 from "../../../assets/banner2.webp";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const images = [BannerImg1,BannerImg2,BannerImg3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length-1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex,images.length])
      
    

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h2>Beats Solo Air</h2>
                    <h1 className="red">SUPER</h1>
                    <h1 className="sale">SALE</h1>
                    <p>
                        Presenting to you the most powerful headphones for
                        the people who loves music. the great bass and super
                        sound quality makes it the best choise for headphone 
                        lovers. Hurry up!! and grab it now on exclusive price.                    </p>
                    <button className="banner-button" onClick={()=>navigate(`/category/2`)}>Buy Now</button>
                </div>
                <img className="banner-img"  src={images[currentIndex]} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;
