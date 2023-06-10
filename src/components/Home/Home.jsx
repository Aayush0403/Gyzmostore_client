import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import FooterBanner from "./Banner/FooterBanner/Footerbanner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/Context";


const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*&sort[0]=price&pagination[start]=0&pagination[limit]=4").then(res => {
      setProducts(res);
      console.log(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then(res => {
      setCategories(res);
      console.log(res);
    });
  };
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="main-content">
        <div>
            
         { categories && <Category categories={categories} />}
        </div>
        <div className="sec-heading">Trending Products</div>
        <div className="layout">
          <div>
            <Products products={products} />
          </div>
        </div>
      </div>
      <div>
        <FooterBanner />
      </div>
    </>
  );
};

export default Home;
