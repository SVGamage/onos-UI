import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect , Button} from 'react';
import {auth} from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect once on mount
  
  const handleLogin = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, username, password);
      console.log('loging successful');
      setLoggedIn(true);
    }
    catch(error){
      console.log(error);
    } 
  };

  const logout = async () => {
    auth.signOut();
    setLoggedIn(false);
  }


  const cardStyle = {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: '15%',
    textAlign: 'center',
    backgroundColor: 'grey',
    alignContent:'center',
    alignItems:'center',
  };


  return (
    <div style={cardStyle}>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          {/* Display user dashboard or other content after successful login */}
          <button type="button" onClick={logout} > Logout </button>
        </div>
      ) : (
        <div style={{alignSelf:'center'}}>
          <h2>SDN Controller</h2>
            <h3>Login</h3>
          <form>
            <div style={{padding:10}}>
                <label>
                Username:
                <input
                    type="text"
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                </label>
            </div>
            
            <div style={{padding:10}}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            </div>

            <button type="button" onClick={handleLogin} style={{padding:5}}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;

