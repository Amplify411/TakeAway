import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth,db } from '../fire/firestore';
import { setDoc,doc } from "firebase/firestore"
import Header from '../components/Header';
import "../cssFiles/signup.css";
function Signup () {
  const [fname,setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedOut, setIsLoggedOut] = useState(true); 
  
  async function handleSubmit(event){
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      const user= auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname
        });
      }
      console.log("User Registered Successfully!!");

    } catch (error) {
      console.log(error.message);
    }
  }

  function googleSignup() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          lastName: "",
        });
        window.location.href = "/login";
      }
    });
  }

  return (
    <>
    <Header log={isLoggedOut}/>
    <div className='signup'>
        <h1>Signup</h1>
        <div className='signup-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} required />
                <input type='text' placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} required />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type='password' placeholder='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type='submit' >Signup</button>
            </form>
                <p>Already have an account? <Link id='button' to="/login">Login</Link></p>
                <button onClick={googleSignup} > Signup with Google</button>
            
        </div>
    </div>
    </>
  );
};

export default Signup;
