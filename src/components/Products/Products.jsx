import "./Products.scss";
import Product from "./Product/Product";
import Loader from "./Loader/Loader";
const Products = ({ products}) => {
    return (
        <div className="products-container">
            <div className="products">
                {products !== undefined ? products?.data?.map((item) => (
                   
                        <Product
                            key={item.id}
                            id={item.id}
                            data={item.attributes}
                        />
                    
                )) : <Loader />}
            </div>
        </div>
    );
};

export default Products;
