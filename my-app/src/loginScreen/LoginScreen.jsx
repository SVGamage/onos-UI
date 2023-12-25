import React, { useState, useEffect } from "react";
import authService from "../AuthSerice";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState();
  const [usernamError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await authService.logout();
      console.log("Logout successful");
      setLoggedIn(false);
    } catch (error) {
      console.log("Logout failed:", error.message);
    }
  };

  const handleLogin = async (event) => {
    console.log(username, password);
    event.preventDefault();
    setPasswordError(false);
    setUsernameError(false);

    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (username && password) {
      try {
        await authService.login(username, password);
        navigate("/home");
        setLoggedIn(true);
      } catch (error) {
        console.log("Login failed:", error.message);
        setLoginError(true);
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Card
        style={{
          maxWidth: 345,
          backgroundColor: "#DDE6ED",
          boxShadow: " 1px 1px 5px 0px rgb(39, 55, 77, 0.5)",
        }}
      >
        <CardContent>
          {loggedIn ? (
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "public sans",
                    fontWeight: 600,
                    color: "#27374D",
                  }}
                >
                  Logout window
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle"
                  sx={{
                    fontFamily: "public sans",
                    fontWeight: 600,
                    color: "#27374D",
                  }}
                >
                  Click here to Log Out...
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleLogout}
                  disableElevation
                  sx={{
                    backgroundColor: "#27374D",
                    color: "#DDE6ED",
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#526D82",
                      color: "#DDE6ED",
                      fontWeight: 900,
                    },
                  }}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          ) : (
            <form>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  fontFamily: "public sans",
                  fontWeight: 800,
                  color: "#27374D",
                }}
              >
                SDN Controller
              </Typography>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontFamily: "public sans",
                  fontWeight: 600,
                  color: "#27374D",
                }}
              >
                Login
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  "@media (max-width: 600px)": {
                    flexDirection: "column",
                    alignItems: "center",
                  },
                  marginTop: "10px",
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    fullWidth
                    required
                    variant="outlined"
                    error={usernamError}
                    helperText={usernamError ? "Username is required" : ""}
                    sx={{
                      fontFamily: "public sans",
                      color: "#27374D",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    fullWidth
                    required
                    variant="outlined"
                    error={passwordError}
                    helperText={passwordError ? "Password is required" : ""}
                    sx={{
                      fontFamily: "public sans",
                      color: "#27374D",
                    }}
                  />
                </Grid>
                <Grid item xs={12} marginTop="10px">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleLogin}
                    disableElevation
                    sx={{
                      backgroundColor: "#27374D",
                      color: "#DDE6ED",
                      fontFamily: "public sans",
                      fontSize: "16px",
                      fontWeight: 800,
                      borderRadius: "10px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#526D82",
                        color: "#DDE6ED",
                        fontWeight: 900,
                      },
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              {loginError && (
                <Grid item xs={12}>
                  <Typography color="error" variant="body1">
                    Invalid username or password. Please try again.
                  </Typography>
                </Grid>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginScreen;
