import React from "react";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=10`
    );

    return (
        <div className="related-products">
            <h1 className="sec-heading related">Similar Products</h1>
             <div className="marquee">
                 <div className="track">
                     <Products products={data}/>
                     
                  </div>
             </div>
        </div>
    );
};

export default RelatedProducts;
