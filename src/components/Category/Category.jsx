import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useFetch2 from "../../hooks/useFetch2";
import useFetch3 from "../../hooks/useFetch3";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {

    const { id } = useParams();
    
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`)

    const { data1 } = useFetch2(
        `/api/products?populate=*&[filters][categories][id]=${id}&sort[0]=price`)

    const { data2 } = useFetch3(
            `/api/products?populate=*&[filters][categories][id]=${id}&sort[0]=price:desc`)
    const [order,SetOrder]=useState(null)  
    const[select,setSelect]=useState("0");
   
    useEffect(()=>{

        if(select==="1")
        {   
            SetOrder(data2)
        }
        if(select==="2")
        {
            SetOrder(data1)
        }
        if(select==="0")
        {
            SetOrder(data)
        }
    })
    
    

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                <div  className="sec-heading">
               { data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title}
                </div>
                <div  className="sec-heading sort">
                    <div className="custom-select">
                        <select value={select} onChange={e=>setSelect(e.target.value)}>
                            <option value="0" >Sort By : Relevence</option>
                            <option  disabled></option>
                            <option value="1">Price (High to Low)</option>
                            <option  disabled></option>
                            <option value="2">Price(Low to high)</option> 
                        </select>
                    </div>
                </div>
                </div>
                { order && <Products products={order} />}
            </div>
        </div>
    );
};

export default Category;
