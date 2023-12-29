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

  const [devices, setDevices] = React.useState([]);
  const handleHomeButton = () => {
    navigate("/home");
  };

  const handleDeleteButton = (id) => {
    console.log(id);
    console.log("Device Deleted");
    axios.delete(`${URL}/devices/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  async function fetchData() {
    try {
      // Make an asynchronous Axios request
      const response = await axios.get(`${URL}/devices`);

      // Access the response data
      console.log("this", response.data);

      // You can return the data or do any other processing here
      return response.data.devices;
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error.message);
      throw error; // You can rethrow the error or handle it in another way
    }
  }

  // // Call the function
  // fetchData()
  //   .then((data) => {
  //     // Do something with the data
  //     setDevices(data);
  //     console.log("Data:", data);
  //   })
  //   .catch((error) => {
  //     // Handle errors from the fetchData function
  //     console.error("Error in fetchData:", error.message);
  //   });

  React.useEffect(() => {
    // await axios
    //   .get(`${URL}/devices`, {
    //     auth: {
    //       username: "onos",
    //       password: "rocks",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setDevices(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Call the function
    fetchData()
      .then((data) => {
        // Do something with the data
        setDevices(data);
        console.log("Data:", data);
      })
      .catch((error) => {
        // Handle errors from the fetchData function
        console.error("Error in fetchData:", error.message);
      });
  }, []);

  console.log(`URL:  ${URL}/devices`);
  console.log("List of devices", devices);
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
                  {devices !== undefined &&
                    devices.map((device) => (
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
                        <Typography>
                          {" "}
                          Type: {device.type} <br />
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
                            onClick={() => navigate(`/device/${device.id}`)}
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
