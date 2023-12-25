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
            <Card sx={{ maxWidth: 345, backgroundColor: "#9DB2BF" }}>
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
                    Manages virtual network traffic within a virtualized
                    environment
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea>
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
                    Router
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connects and routes traffic between different networks
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, backgroundColor: "#9DB2BF" }}>
              <CardActionArea>
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
                    Physical Switch
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Forwards traffic efficiently within a single network
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
