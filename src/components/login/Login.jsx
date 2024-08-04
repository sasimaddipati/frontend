import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navi = useNavigate();
  const {setloginstatus,setuser,user,setcartitems} = useContext(MyContext);


  async function call(){
    try {
      let res = await fetch(`http://localhost:4000/user-api/cart-display/${user}`,{
        method: "GET",
      });
      let data = await res.json();
       console.log('welcome to india')
      console.log(data);
      setcartitems(data);
    } catch (err) {
      console.log("err is ", err);
    }
  }
  async function onUserLogin(userData) {
    try {
      let res = await fetch('http://localhost:4000/user-api/login', {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      });
      let data = await res.json();
      console.log(data);
      if (data.message === "login success") {
        call();
         setloginstatus(true);
         setuser(userData.username);
         console.log(user);
        // Navigate to another component after successful login
        navi('/');
      } else {
        // Handle login error
        console.log(data.message);
      }
    } catch (err) {
      console.log("err is ", err);
    }
  }

  function handleRegisterRedirect() {
    navi('/register');
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onUserLogin)}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register('username', { required: true })}
        /><br /><br />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true })}
        /><br /><br />
        
        <button className='b' type="submit">Login</button>
        <p>Not registered yet? Click to <button className='sas' onClick={handleRegisterRedirect}>Register</button></p>
      </form>
    </div>
  );
};

export default Login;
