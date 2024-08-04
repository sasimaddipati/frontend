
import React, { useContext, useEffect, useState } from 'react';
import {MyContext} from '../MyContext';
import './Menuitems.css'
const Menuitems = () => {
  const {cartitems,setcartitems, state,setstate,addtocart,filteredItems,removefromcart, setFilteredItems} = useContext(MyContext); 
 
  const [count,setcount]=useState(0);
            return (
                <div>
                    <h1>Menu Items</h1>
                    <div className='filtered'>
            {filteredItems && filteredItems.length > 0 ?(
                filteredItems.map((item) => (
                    <div className='filtered-box' key={item.id}>
                        <img className="item-img" src={item.imgAddress} alt={item.name} />
                        <div className='cart-button'>
                        {item.count === undefined || item.count===0 ?
                            <button onClick={() => addtocart(item)} className='cart-add'>Add</button> :
                            <>
                                <button onClick={() => addtocart(item)}>Increase</button>
                                {item.count}
                                <button onClick={() => removefromcart(item) }>Decrease</button>
                            </>
                        }
                        </div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
                </div>
            );
        };
        
        export default Menuitems;
        
    