import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Alert, Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid, Button, Stack } from "@mui/material";

const Vswitch = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();

  const [devices, setDevices] = React.useState([
    {
      id: "of:0000000000000001",
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
    },
    {
      id: "of:0000000000000002",
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
        managementAddress: "",
        protocol: "OF_13",
      },
    },
  ]);
  const handleHomeButton = () => {
    navigate("/home");
  };

  const handleDeleteButton = (id) => {
    console.log(id);
    console.log("Device Deleted");
    axios
      .delete(`http://localhost:8181/onos/v1/devices/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8181/onos/v1/devices")
      .then((res) => {
        console.log(res);
        setDevices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  Active Devices
                </Typography>

                <Stack spacing={3} marginBottom={2} marginTop={3}>
                  {/*  */}
                  {devices.map((device) => (
                    <Box
                      variant="contained"
                      // startIcon={<CreateIcon />}
                      disableElevation
                      sx={{
                        // center align text
                        textAlign: "center",
                        backgroundColor: "#27374D",
                        color: "#DDE6ED",
                        fontFamily: "public sans",
                        fontSize: "12px",
                        fontWeight: 800,
                        borderRadius: "10px",
                        textTransform: "none",
                        // "&:hover": {
                        //   backgroundColor: "#DDE6ED",
                        //   color: "#27374D",
                        // },
                      }}
                    >
                     <Typography> Type: {device.type} <br />
                      ID: {device.id}
                      </Typography>
                      {/* Add update and delete buttons on the right side of the box */}
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Button
                          variant="contained"
                          startIcon={<CreateIcon />}
                          disableElevation
                          sx={{
                            backgroundColor: "#27374D",
                            color: "#DDE6ED",
                            fontFamily: "public sans",
                            fontSize: "12px",
                            fontWeight: 800,
                            borderRadius: "10px",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#DDE6ED",
                              color: "#27374D",
                            },
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDeleteButton(device.id)}
                          disableElevation
                          sx={{
                            backgroundColor: "#27374D",
                            color: "#DDE6ED",
                            fontFamily: "public sans",
                            fontSize: "12px",
                            fontWeight: 800,
                            borderRadius: "10px",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#DDE6ED",
                              color: "#27374D",
                            },
                          }}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </Box>
                  ))}

                  {/*  */}
                  <Button
                    variant="contained"
                    startIcon={<CreateIcon />}
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
                        backgroundColor: "#DDE6ED",
                        color: "#27374D",
                      },
                    }}
                  >
                    Add Device
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
};

export default Vswitch;
