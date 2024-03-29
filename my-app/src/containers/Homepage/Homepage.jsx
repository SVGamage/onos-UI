import React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import { Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";

const image = process.env.PUBLIC_URL + "Images/router.jpg";

const Homepage = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/vswitch");
  };
  const handleGetDevices = () => {
    navigate("/devices");
  };
  const handleGetPorts = () => {
    navigate("/ports");
  };

  const handleGetFlows = () => {
    navigate("/flows");
  }
  return (
    <Box
      sx={{
        backgroundColor: "#27374D",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        height: isMobile ? "auto" : "100vh",
      }}
    >
      <Header />
      <Box>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          s
        >
          <Grid item>
            <Card sx={{ width: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea onClick={handleGetDevices}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt="router"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#27374D"
                  >
                    Current Active Devices
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage current devices active in the Network
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea onClick={handleGetPorts}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt="router"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#27374D"
                  >
                    Device Ports
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Port details of all infrastructure devices
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea onClick={handleCardClick}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt="router"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#27374D"
                  >
                    V Switch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manages virtual network traffic 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea onClick={handleGetFlows}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt="router"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#27374D"
                  >
                    Flows
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View, Add and manage flow rules in the system
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Homepage;
