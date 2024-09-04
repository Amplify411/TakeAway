import React,{useState} from "react";
import { Link } from "react-router-dom";
import FoodIcon from "../assets/Logo.jpg"
import { useSelector } from 'react-redux';
import "../cssFiles/header.css";
function Header(props){
    const cartItems = useSelector(state=> state.cart.cart)    
    const logout = props.log;
    const [isLoggedOut, setIsLoggedOut] = useState(logout);
    function handleLogin() {
        setIsLoggedOut(true);
      };
    
      function handleOut() {
        setIsLoggedOut(true)
        // Logout logic here
      };
    
      function handleCart() {
        // Cart logic here
      };
    return (
    <div className="head">
        <header>
            <div id="title">
                <img src={FoodIcon} alt="icon" />
                <h1>Take Away</h1>
            </div>
        </header>
        <nav className="navbar" >
      { isLoggedOut ? 
        (<div>
            <button ><Link id="button" to="/login" onClick={handleLogin} >Login</Link></button>
            <button ><Link id="button" to="/signup" onClick={handleLogin} >Signup</Link></button>
        </div>) :
        ( <div>
            <button ><Link id="button" to="/login" onClick={handleOut} >Logout</Link></button>
            <button ><Link id="button" to="/cart" onClick={handleCart} >Cart ({cartItems.length})</Link></button>
        </div>)}
    </nav>
    </div>
    );
}

export default Header;