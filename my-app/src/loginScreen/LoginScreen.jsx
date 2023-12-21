import React, { useState, useEffect } from 'react';
import authService from '../AuthSerice';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
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
    console.log(username, password);
    try {
      await authService.login(username, password);
      console.log('Login successful');
      setLoggedIn(true);
    } catch (error) {
      console.log('Login failed:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      console.log('Logout successful');
      setLoggedIn(false);
    } catch (error) {
      console.log('Logout failed:', error.message);
    }
  };

  // Rest of your component code...
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
          <button type="button" onClick={handleLogout} > Logout </button>
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