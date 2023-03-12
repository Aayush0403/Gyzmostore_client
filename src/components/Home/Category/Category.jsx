import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({categories}) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
           <center> <h1> Our Categories</h1></center>
            <div className="categories">
            <div  className="category">
            {categories?.data?.map((item)=>(
                <div key={item.id} className="cat" onClick={() =>{  
                    navigate(`/category/${item.id}`)}}>
                 <img  src={
                    item.attributes.image.data.attributes.url} alt="categories"/>
                </div>
                  ))}   
            </div>
       
                 
            </div>
        </div>
    );
};

export default Category;
