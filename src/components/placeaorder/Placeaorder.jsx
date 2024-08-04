import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MyContext } from '../MyContext';
import './Placeaorder.css';
const Placeaorder = () => {
    const { address, setaddress,user } = useContext(MyContext);
    const [total,settotal]=useState(0);
    const { cartitems } = useContext(MyContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    async function onSubmit(data){
        let res = await fetch(`http://localhost:4000/user-api/address-add/${user}`,{
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
          });
          const d = await res.json();
          console.log(d.payload);
    };
   function call(){
       let c=0;
         cartitems.map((item)=>{
                 c =c + item.count;
         })
         settotal(c*399);
   }
   useEffect(()=>{call()},[cartitems]);
    return (
        <div className="place-order-container">
            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="flatNo">Dno/Flat no</label>
                    <input 
                        type="text" 
                        placeholder="1-134" 
                        id="flatNo" 
                        {...register("flatNo", { required: true })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input 
                        type="text" 
                        placeholder="near by railway station" 
                        id="street" 
                        {...register("street", { required: true })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="area">Area name</label>
                    <input 
                        type="text" 
                        placeholder="kannuru" 
                        id="area" 
                        {...register("area", { required: true })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNo">Contact Number</label>
                    <input 
                        type="number" 
                        placeholder="1234567890" 
                        id="contactNo" 
                        {...register("contactNo", { required: true })}
                    />
                </div>
                <button className="address-button">Save the Address</button>
            </form>



     
           {/* procced to pay */}
            <div className="cart-items">
                <h2>Bill of your ordered Items</h2>
    
                <p className='total-cost'>Item total : {total} /-</p>
                <p className='total-cost'>Delivery partner fee : 25 /-</p>
                <p className='total-cost'>Delivery tip : 15 /-</p>
                <p className='total-cost'>SGST : {Math.round(total*(2.5/100))} /-</p>
                <p className='total-cost'>CGST : {Math.round(total*(2.5/100))} /-</p>
                <p className='total-cost'>Total to pay : {total+25+15+Math.round(total*(2.5/100))+Math.round(total*(2.5/100))} /-</p>
                <p className='mess-money'>(Only cash on delivery)</p>
                 <button className='pay-button'>procced to Order</button>
            </div>
        </div>
    );
};

export default Placeaorder;
