import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { MyContext } from '../MyContext';

const Header = () => {
  const [under, setUnder] = useState('home');
  const [showEmpty, setShowEmpty] = useState(false);
  const { cartitems, username, loginstatus ,user,setcartitems} = useContext(MyContext);
  const nav = useNavigate();

  function add(res) {
    setUnder(res);
  }    
  const handleCartClick = () => {
    if (cartitems.length === 0) {
      setShowEmpty(true);
    }
  };

  function handleSignClick() {
      nav('/register'); 
  }
  async function call() {
  try {
    let res = await fetch(`http://localhost:4000/user-api/cart-display/${user}`,{
      method: "GET",
    });
    let data = await res.json();
     let re = data.payload;
    console.log(re);
    setcartitems(re);
  } catch (err) {
    console.log("err is ", err);
  }
}
 useEffect(()=>{
     call();
 },[])
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>City Food</h1>
      </div>
      <div className='header-nav'>
        <ul>
          <li onClick={() => add('home')} className={under === 'home' ? 'activ' : ''}>
            <a href='#home'>Home</a>
          </li>
          <li onClick={() => add('menu')} className={under === 'menu' ? 'activ' : ''}>
            <a href='#menu'>Menu</a>
          </li>
          <li onClick={() => add('mobile')} className={under === 'mobile' ? 'activ' : ''}>
            <Link to='/mobile'>Mobile App</Link>
          </li>
          <li onClick={() => add('contact')} className={under === 'contact' ? 'activ' : ''}>
            <a href='#footer'>Contact us</a>
          </li>
        </ul>
      </div>
      <div className='header-cart'>
        {showEmpty ? (
          <h1>empty</h1>
        ) : (
          <Link to='cart' onClick={handleCartClick}>
            <div className='cart-item-img'>
            <img 
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" 
              width="50px" 
              alt="Cart" 
              />
              <h3>{cartitems ? cartitems.length:0}</h3>
              </div>
          </Link>
        )}
           {loginstatus ?  (<h2 className='user-id'>{user}</h2>) :
       (<button onClick={handleSignClick} className='sign'>Sign In</button>)
       }
       
      </div>
    </div>
  );
};

export default Header;
