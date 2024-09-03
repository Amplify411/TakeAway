import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire/firestore';
import Header from '../components/Header';
import "../cssFiles/login.css";


function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedOut, setIsLoggedOut] = useState(true); 
    
    async function handleSubmit(event){
      event.preventDefault();
      try {
        await signInWithEmailAndPassword(auth,email,password);
        console.log("User logged in Successfully");
        window.location.href = "/home";
      } catch (error) {
        console.log(error.message);
      }
      setIsLoggedOut(false);
  }

  function handleEmailChange(event){
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  function handlePasswordChange(event){
    const newPassword = event.target.value;
    setPassword(newPassword);}

  return (
    <>
    <Header log={isLoggedOut} />
    <div className='login'>
        <h1>Welcome</h1>
        <div className='login-form'>
        <form >
          <input 
            type="text" placeholder="email"
            value={email} onChange={handleEmailChange} />
          <input
            type="password" placeholder="password"
            value={password} onChange={handlePasswordChange} />
        </form>
        <button id='button' onClick={handleSubmit}>Login</button>
        <p> Don't have an account?  <Link id="button" to='/signup'>SignUp</Link> </p>
        <button> Login with Google</button>
        
        </div>
    </div>
    </>
  );
};

export default Login;
