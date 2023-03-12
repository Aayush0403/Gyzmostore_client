import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import { Context } from "../../../Utils/Context";
const Product = ({ data, id }) => {
    const navigate = useNavigate();
    const {setQuantity }=useContext(Context)
    return (
        <div className="product-card"  onClick={() => { 
            navigate("/product/" + id)
            setQuantity(1)
       }}>
            <div className="thumbnail">
               <img src={
                        data.image.data[0].attributes.url} alt="product" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
