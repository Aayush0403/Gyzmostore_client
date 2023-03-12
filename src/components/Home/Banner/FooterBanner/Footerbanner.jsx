
import React from "react"
import './Footerbanner.scss'
import Fbanner from "../../../../assets/watch_2.webp";

const FooterBanner = () => {
    return (
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>40% OFF</p>
            <h3>FINE</h3>
            <h3>SMILE</h3>
            <p>10 Feb - 16 Feb</p>
          </div>
          <div className="center"><img src={Fbanner} alt="footer-banner" /></div>
          <div className="right">
            <p>Beats Solo Air</p>
            <h3>SUMMER SALE</h3>
            <p>Exclusive deals on your Favourite Smart Watches</p>
          </div>
        </div>
     </div>
    );
  }
  
  export default FooterBanner