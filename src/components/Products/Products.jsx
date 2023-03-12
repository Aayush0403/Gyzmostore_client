import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products}) => {
    return (
        <div className="products-container">
            <div className="products">
                {products?.data?.map((item) => (
                   
                        <Product
                            key={item.id}
                            id={item.id}
                            data={item.attributes}
                        />
                    
                ))}
            </div>
        </div>
    );
};

export default Products;
