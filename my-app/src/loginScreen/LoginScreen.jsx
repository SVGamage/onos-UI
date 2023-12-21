// import React from 'react'

// export default function LoginScreen() {
//   return (
//     <div style={{flex:1, flexDirection:'row' , justifyContent:'center', backgroundColor:'red'}}>
     
//       <div style={{width:500, height:300, backgroundColor:'blue', left:500}}></div>  
//     </div>
    
//   )
// }

import React, { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call)
    // For simplicity, just checking if both username and password are non-empty
    // if (username.trim() !== '' && password.trim() !== '') {
    //   setLoggedIn(true);
    // } else {
    //   alert('Please enter a valid username and password.');
    // }

    console.log(username, password);
    
  };


  const cardStyle = {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: '20%',
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

