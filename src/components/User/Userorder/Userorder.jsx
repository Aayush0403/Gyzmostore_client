import React, { useEffect, useState } from "react";
import "./Userorder.scss";


const Userorder = ({order,date}) => {
     const [total,setTotal]=useState(0);
     var res = date.slice(0,10);
     
        useEffect(()=>{
            var sum=0;
            order?.map((item)=>(
            sum+=item.attributes.quantity*item.attributes.price
        ))
            setTotal(sum)
        },[])
    
     
     
    return (
        <>
         <div className="order-items">
         <h3>DATE: {res}</h3>
            {order.map((item)=>(
            <div className="orders">
                <div className="content">
                    <div className="image-container">
                        <img src={item.attributes.image.data[0].attributes.url} alt="" />
                    </div>
                     <h4>{item.attributes.title}</h4>
                </div>
               <div className="attributes">
                   <h5><span>&#8377;</span>{item.attributes.price}</h5>
                   <h5>Qty:{item.attributes.quantity}</h5>   
               </div> 
               <h4 className="amount">Amount: <span>&#8377;</span>{item.attributes.quantity*item.attributes.price}</h4>
            </div>
            ))}
            <h2>Total: <span>&#8377;</span>{total}</h2>
         </div> 


        </>
        
    );
};

export default Userorder;