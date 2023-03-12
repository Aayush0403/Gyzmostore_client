import "./Header.scss";
import { useState, useContext, useEffect} from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import {AiOutlineLogout} from "react-icons/ai"
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../Utils/Context";
import Cart from "../Cart/Cart";
import User from "../User/User";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import toast from 'react-hot-toast';

const Header = () => {
    const navigate = useNavigate();
    const [searchModal, setSearchModal] = useState(false);
    const [userModal, setUserModal] = useState(false);
    const { cartCount, showCart, setShowCart,setUsername,username } = useContext(Context);
    const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();
    const { data } = useFetch(`/api/orders?filters[userName][$eq]=${username}&sort=createdAt:desc`)
    // useEffect(()=>{
    //      isAuthenticated ? toast.success(`Welcome ${user.nickname} !!`): console.log()
    // },[isAuthenticated])
    
    
    return (
    <>
    <header className="main-header">
        <div className="logo" onClick={()=>{navigate("/")}}><img src={Logo} alt="logo" /></div>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
        </div>
        <div className="icons">
            <ul className="right">
                <li><TbSearch onClick={() => setSearchModal(true)}/></li>
                {isAuthenticated ? 
                ( 
                    
                    <>
                        <li> <AiOutlineLogout onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/></li>
                        <li> <GiShoppingBag onClick={() => setUserModal(true)}/></li>
                       
                    </>
                )
                :( <li><FaUser onClick={() =>loginWithRedirect()}/></li>)
                }
                {isAuthenticated && setUsername(user.name)}
                <li><span className="cart-icon" onClick={()=>setShowCart(true)}>
                <CgShoppingCart/><span className="cart-count">{!!cartCount && <span>{cartCount}</span>}</span></span></li>
            </ul>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {userModal && <User  setUserModal={setUserModal} username={username} data={data} nickname={user.nickname} />}
    {searchModal && <Search  setSearchModal={setSearchModal} />}
    </>
    );
};

export default Header;
