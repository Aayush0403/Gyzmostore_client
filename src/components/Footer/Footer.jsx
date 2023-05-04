import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { Link } from "react-router-dom";
import {RiAdminFill } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
const Footer = () => {
    const {user,isAuthenticated} = useAuth0();
    
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            vssut college,burla,sambalpur,
                            Odisha,761017
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:8602266086</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@gyzmo.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Earphones</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                  { isAuthenticated && user.name ==='aayushgupta0403@gmail.com' ? ( <span className="admin"><Link to={'https://dashboard.stripe.com/test/payments'}>
                    <div className="admin-cont"><RiAdminFill/><h6>ADMIN</h6></div></Link></span>) :
                  ( <span className="admin"><div className="admin-cont"><RiAdminFill/><h6>ADMIN</h6></div></span>)}
                    <span className="text">
                        GIZMO-STORE 2023 CREATED BY AAYUSH. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt="payments" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
