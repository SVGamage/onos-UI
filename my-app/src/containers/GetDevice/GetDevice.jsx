import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import { Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
} from "@mui/material";

const image = process.env.PUBLIC_URL + "Images/router2.jpg";

function GetDevice() {
  const { id } = useParams();
  const [device, setDevice] = React.useState({
    id: id,
    available: true,
    role: "MASTER",
    type: "SWITCH",
    mfr: "Nicira, Inc.",
    hw: "Open vSwitch",
    sw: "2.5.0",
    serial: "None",
    driver: "ovs",
    chassisId: "None",
    lastUpdate: "2021-10-13T11:35:18.000+00:00",
    annotations: {
      managementAddress: "127.0.0.1",
      protocol: "OF_13",
    },
  });
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();
  React.useEffect(() => {
    // axios.get(`http://localhost:8181/onos/v1/devices/${id}`).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    //   setDevice(res.data);
    // });
  }, []);

  const handleHomeButton = () => {
    navigate("/home");
  };

    const handleDeleteButton = (id) => {
    // axios
    //   .delete(`http://localhost:8181/onos/v1/devices/${id}`)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    console.log(`Device ${id} Deleted`);

    }

  return (
    <Box
      sx={{
        backgroundColor: "#27374D",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        height: isMobile ? "100vh" : "100vh",
      }}
    >
      <Header />
      <Box alignContent="center">
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <Card
              sx={{
                width: "300px",
                maxWidth: 345,
                backgroundColor: "#9DB2BF",
                boxShadow: " 1px 1px 20px 0px rgb(0,0,0, 0.5)",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={image}
                alt="router"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#526D82"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  {device.type}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    display: "flex", // Set display to flex
                    alignItems: "center",
                  }}
                >
                  Device ID:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {device.id}
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    display: "flex", // Set display to flex
                    alignItems: "center",
                  }}
                >
                  Device Role:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {device.role}
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    display: "flex", // Set display to flex
                    alignItems: "center",
                  }}
                >
                  Device Driver:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {device.driver}
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    display: "flex", // Set display to flex
                    alignItems: "center",
                  }}
                >
                  Device Hardware:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {device.hw}
                  </Typography>
                </Typography>
                <Stack spacing={3} marginBottom={2} marginTop={3}>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleDeleteButton(device.id)}
                    startIcon={<DeleteIcon />}
                    sx={{
                      backgroundColor: "#27374D",
                      color: "#DDE6ED",
                      fontFamily: "public sans",
                      fontSize: "16px",
                      fontWeight: 800,
                      borderRadius: "10px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#DDE6ED",
                        color: "#27374D",
                      },
                    }}
                  >
                    Delete Device
                  </Button>
                </Stack>
                <Button
                  onClick={handleHomeButton}
                  size="small"
                  variant="text"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    marginTop: "20px",
                    color: "#27374D",
                    fontFamily: "public sans",
                    fontSize: "16px",
                    fontWeight: 800,
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      color: "#DDE6ED",
                    },
                  }}
                >
                  Home
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Toolbar />
    </Box>
  );
}

export default GetDevice;
