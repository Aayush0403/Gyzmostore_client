import React from "react";
import "./User.scss";
import { MdClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Userorder from "./Userorder/Userorder";
import { BsBagX} from "react-icons/bs";
const User = ({ setUserModal,username,data,nickname }) => {
  
    return (
        <div className="user-modal">
             <div className="form-field">
                <MdClose
                        className="close-btn"
                        onClick={() => setUserModal(false)}
                    />
             </div>
            <div className="order-list">
              <div className="ctxs">
                <h1><FaUserCircle/></h1>
                <h3>{nickname}</h3>
              </div> 
              <span className="mail">E-mail: <b>{username}</b></span>
              <hr />
              <h3 className="prev">Previous Orders:</h3>
              <section>
                
              { data.data.length !==0 && data.data.map((item) => (
                   
                   <Userorder
                       key={item.id}
                       order={ item.attributes.products}
                       date={item.attributes.createdAt}
                   />
               ))}
               { data.data.length===0 &&
                <>
                        <p className="no-orders">No Orders placed...</p>
                        <BsBagX className="no-bag" />
                </>
                    }
              </section>

            </div> 
           
        </div>
    );
};

export default User;
