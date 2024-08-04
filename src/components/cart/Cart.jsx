import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import './Cart.css';

const Cart = () => {
  const { cartitems, removefromcart,user,setcartitems }= useContext(MyContext);
  const navigate = useNavigate();
function fun3(){
    navigate('/placeaorder')
}
  return (
    <div>
      <div className='cart'>
        {cartitems ? (

          cartitems.map((item, index) => (
            <div className='box' key={index}>
              <div className="img">
                <img src={item.imgAddress} width="200px" height="200px" alt={item.name} />
              </div>
              <div className="details">
                <h3>{item.restaurant}</h3>
                <h4> {item.name} </h4>
                <p>{item.description}</p>
                <p>{item.count}</p>
                 <p className="cost">399 /-</p>
                <button  className="remove-button" onClick={() => removefromcart(item)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </div>
      <button className="order-button" onClick={fun3}>Place a Order</button>
    </div>
  );
};

export default Cart;
