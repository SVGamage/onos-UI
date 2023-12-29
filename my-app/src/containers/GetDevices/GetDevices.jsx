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
import { URL } from "../../helper";

const GetDevices = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();

  const [devices, setDevices] = React.useState(
    {
      "devices": [
        {
          "id": "of:0000000000000003",
          "type": "SWITCH",
          "available": true,
          "role": "MASTER",
          "mfr": "Nicira, Inc.",
          "hw": "Open vSwitch",
          "sw": "2.17.8",
          "serial": "None",
          "driver": "ovs",
          "chassisId": "3",
          "lastUpdate": "1703688367996",
          "humanReadableLastUpdate": "connected 10h7m ago",
          "annotations": {
            "channelId": "127.0.0.1:46954",
            "datapathDescription": "s3",
            "managementAddress": "127.0.0.1",
            "protocol": "OF_13"
          }
        },
        {
          "id": "of:0000000000000004",
          "type": "SWITCH",
          "available": true,
          "role": "MASTER",
          "mfr": "Nicira, Inc.",
          "hw": "Open vSwitch",
          "sw": "2.17.8",
          "serial": "None",
          "driver": "ovs",
          "chassisId": "4",
          "lastUpdate": "1703688367997",
          "humanReadableLastUpdate": "connected 10h7m ago",
          "annotations": {
            "channelId": "127.0.0.1:46940",
            "datapathDescription": "s4",
            "managementAddress": "127.0.0.1",
            "protocol": "OF_13"
          }
        },
        {
          "id": "of:0000000000000001",
          "type": "SWITCH",
          "available": true,
          "role": "MASTER",
          "mfr": "Nicira, Inc.",
          "hw": "Open vSwitch",
          "sw": "2.17.8",
          "serial": "None",
          "driver": "ovs",
          "chassisId": "1",
          "lastUpdate": "1703688367996",
          "humanReadableLastUpdate": "connected 10h7m ago",
          "annotations": {
            "channelId": "127.0.0.1:46936",
            "datapathDescription": "s1",
            "managementAddress": "127.0.0.1",
            "protocol": "OF_13"
          }
        },
        {
          "id": "of:0000000000000002",
          "type": "SWITCH",
          "available": true,
          "role": "MASTER",
          "mfr": "Nicira, Inc.",
          "hw": "Open vSwitch",
          "sw": "2.17.8",
          "serial": "None",
          "driver": "ovs",
          "chassisId": "2",
          "lastUpdate": "1703688367997",
          "humanReadableLastUpdate": "connected 10h7m ago",
          "annotations": {
            "channelId": "127.0.0.1:46958",
            "datapathDescription": "s2",
            "managementAddress": "127.0.0.1",
            "protocol": "OF_13"
          }
        }
      ]
    }
  );
  const handleHomeButton = () => {
    navigate("/home");
  };

  const handleDeleteButton = (id) => {
    console.log(id);
    console.log("Device Deleted");
    // axios
    //   .delete(`${URL}/devices/${id}`)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  React.useEffect(() => {
    axios
      .get(`${URL}/devices`)
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
                  {devices.devices.map((device) => (
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
                          onClick = {() => navigate(`/device/${device.id}`)}
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
                          View
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

export default GetDevices;
