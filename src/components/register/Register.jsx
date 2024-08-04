import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import './Register.css'
function Register() {
  const { register, handleSubmit, reset } = useForm();
  const navi = useNavigate();
  const {addUser}=useContext(MyContext)
  async function onUserRegister(newUser) {
    try {
      let res = await fetch("http://localhost:4000/user-api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data=await res.json();
      console.log(data);
      if (data.message==="User created") {
        //navigate to Login component
        navigate("/login");
      }
    } catch (err) {
      console.log("err is ", err);
    }
  }

  function fun1() {
    navi('/login');
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onUserRegister)}>
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
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
        /><br /><br />

        <label htmlFor="contact">Contact Number:</label>
        <input
          type="tel"
          id="contact"
          {...register('contact', { required: true })}
        /><br /><br />

        <button className='b' type="submit">Register</button>
        <p>Already registered? Click to <button className='sas' onClick={fun1}>login</button></p>
      </form>
    </div>
  );
};
export default Register;
