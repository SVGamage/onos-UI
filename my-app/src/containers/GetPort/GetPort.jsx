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

function GetPort() {
  const { id } = useParams();
  const [port, setPort] = React.useState(
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
        "lastUpdate": "1703827350747",
        "humanReadableLastUpdate": "connected 11m9s ago",
        "annotations": {
          "channelId": "127.0.0.1:44534",
          "datapathDescription": "s3",
          "managementAddress": "127.0.0.1",
          "protocol": "OF_13"
        },
        "ports": [
          {
            "element": "of:0000000000000003",
            "port": "local",
            "isEnabled": false,
            "type": "copper",
            "portSpeed": 0,
            "annotations": {
              "adminState": "disabled",
              "portMac": "96:3d:6a:68:a1:49",
              "portName": "s3"
            }
          }
        ]
      }
  );

  const [enabled, setEnabled] = React.useState(port.ports[0].isEnabled);
  const streamData = {
    enabled: !enabled,
  }
  console.log(enabled);
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();
  React.useEffect(() => {
    axios.get(`http://localhost:8181/onos/v1/ports/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      setPort(res.data);
    });
  }, []);

  const handleHomeButton = () => {
    navigate("/home");
  };

    const handleEnableButton = () => {
    axios
      .post(`http://localhost:8181/onos/v1/devices/${id}/portstate/${id}`, {
        streamData
      })
        .then((res) => {
            console.log(streamData);
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        }); 
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
                  {port.type}
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
                    {port.id}
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
                    {port.role}
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
                    {port.driver}
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
                  Port Name:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {port.ports[0].annotations.portName}    
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
                  Port:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {enabled ? "Enabled" : "Disabled"}    
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
                  Port Type:
                  <Typography color="text.primary" sx={{ marginLeft: 2 }}>
                    {" "}
                    {port.ports[0].port}    
                  </Typography>
                </Typography>

                <Stack spacing={3} marginBottom={2} marginTop={3}>
                </Stack>
                {/* Have a button to enable or diable the port*/}
                <Stack spacing={3} marginBottom={2} marginTop={3}>
                  <Button
                    variant="contained"
                    startIcon={<CreateIcon />}
                    onClick = {handleEnableButton}
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
                    {
                        enabled ? "Disable" : "Enable"
                    } Port
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

export default GetPort;
