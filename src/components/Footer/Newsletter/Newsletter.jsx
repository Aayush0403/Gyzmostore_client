import React, { useState } from "react";
import {FaFacebookF,FaTwitter,FaInstagram, FaLinkedinIn,} from "react-icons/fa";
import "./Newsletter.scss";
import toast,{Toaster} from 'react-hot-toast';
const Newsletter = () => {
    const [name,setname]=useState('')
    const sucessNotify = () =>  toast.success('Registered Sucessfully...');
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <form className="form" onSubmit={(e)=>{
                        e.preventDefault();
                        sucessNotify();
                        setname('');
                    }} >
                    <input type="email" placeholder="Email Address" value={name} onChange={(e)=>{
                            setname(e.target.value);
                    }}/>
                    <button type="submit">Subscribe</button>
                    <Toaster />
                </form>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
