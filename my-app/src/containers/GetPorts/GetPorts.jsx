import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid, Button, Stack } from "@mui/material";

const GetPorts = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();

  const [ports, setPorts] = React.useState(
    {
        "ports": [
          {
            "element": "of:0000000000000003",
            "port": "local",
            "isEnabled": false,
            "type": "copper",
            "portSpeed": 0,
            "annotations": {
              "adminState": "disabled",
              "portMac": "76:a3:93:0a:fd:47",
              "portName": "s3"
            }
          },
          {
            "element": "of:0000000000000003",
            "port": "1",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "3e:af:d1:45:43:bb",
              "portName": "s3-eth1"
            }
          },
          {
            "element": "of:0000000000000003",
            "port": "2",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "4e:8a:98:e9:a7:6f",
              "portName": "s3-eth2"
            }
          },
          {
            "element": "of:0000000000000003",
            "port": "3",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "22:46:0d:fe:32:9e",
              "portName": "s3-eth3"
            }
          },
          {
            "element": "of:0000000000000004",
            "port": "local",
            "isEnabled": false,
            "type": "copper",
            "portSpeed": 0,
            "annotations": {
              "adminState": "disabled",
              "portMac": "52:07:b7:e6:b8:43",
              "portName": "s4"
            }
          },
          {
            "element": "of:0000000000000004",
            "port": "1",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "06:97:dd:70:b9:10",
              "portName": "s4-eth1"
            }
          },
          {
            "element": "of:0000000000000004",
            "port": "2",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "26:a0:1f:29:9d:6d",
              "portName": "s4-eth2"
            }
          },
          {
            "element": "of:0000000000000001",
            "port": "local",
            "isEnabled": false,
            "type": "copper",
            "portSpeed": 0,
            "annotations": {
              "adminState": "disabled",
              "portMac": "4a:a7:9c:a5:f6:4f",
              "portName": "s1"
            }
          },
          {
            "element": "of:0000000000000001",
            "port": "1",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "b2:cf:c5:dd:7d:08",
              "portName": "s1-eth1"
            }
          },
          {
            "element": "of:0000000000000001",
            "port": "2",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "86:ec:9c:ed:07:7a",
              "portName": "s1-eth2"
            }
          },
          {
            "element": "of:0000000000000002",
            "port": "local",
            "isEnabled": false,
            "type": "copper",
            "portSpeed": 0,
            "annotations": {
              "adminState": "disabled",
              "portMac": "3e:29:87:be:03:43",
              "portName": "s2"
            }
          },
          {
            "element": "of:0000000000000002",
            "port": "1",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "2e:c0:5c:46:b3:9b",
              "portName": "s2-eth1"
            }
          },
          {
            "element": "of:0000000000000002",
            "port": "2",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "e2:ee:fd:87:de:c3",
              "portName": "s2-eth2"
            }
          },
          {
            "element": "of:0000000000000002",
            "port": "3",
            "isEnabled": true,
            "type": "copper",
            "portSpeed": 10000,
            "annotations": {
              "adminState": "enabled",
              "portMac": "f6:f8:bb:5e:bb:3f",
              "portName": "s2-eth3"
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
    //   .delete(`http://localhost:8181/onos/v1/devices/${id}`)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8181/onos/v1/devices")
      .then((res) => {
        console.log(res);
        setPorts(res.data);
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
        overflowY: 'auto',
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
                  Device Ports
                </Typography>

                <Stack spacing={3} marginBottom={2} marginTop={3}>
                  {/*  */}
                  {ports.ports.map((device) => (
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
                     <Typography> Port Type: {device.port} <br />
                      Element: {device.element}
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
                          onClick = {() => navigate(`/port/${device.element}`)}
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

export default GetPorts;
