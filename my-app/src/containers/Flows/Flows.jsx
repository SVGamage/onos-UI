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

const Flows = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();

  const [flows, setFlows] = React.useState({
    flows: [
      {
        groupId: 0,
        state: "ADDED",
        life: 2476,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 0,
        bytes: 0,
        id: "281478170942982",
        appId: "org.onosproject.core",
        priority: 5,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000003",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x800",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 1648,
        bytes: 229072,
        id: "281476661728682",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000003",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x88cc",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 0,
        bytes: 0,
        id: "281477764386537",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000003",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x806",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 1648,
        bytes: 229072,
        id: "281476156249461",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000003",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x8942",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839005005,
        packets: 824,
        bytes: 114536,
        id: "281475616213265",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000004",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x88cc",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839005005,
        packets: 0,
        bytes: 0,
        id: "281475265228006",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000004",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x806",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2476,
        liveType: "UNKNOWN",
        lastSeen: 1703839005005,
        packets: 0,
        bytes: 0,
        id: "281477141311986",
        appId: "org.onosproject.core",
        priority: 5,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000004",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x800",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839005005,
        packets: 824,
        bytes: 114536,
        id: "281476729151998",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000004",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x8942",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 0,
        bytes: 0,
        id: "281478909873038",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000001",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x806",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 119,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 824,
        bytes: 114536,
        id: "281477466379610",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000001",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x88cc",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2476,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 0,
        bytes: 0,
        id: "281475012051420",
        appId: "org.onosproject.core",
        priority: 5,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000001",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x800",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004978,
        packets: 824,
        bytes: 114536,
        id: "281477029321583",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000001",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x8942",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004989,
        packets: 0,
        bytes: 0,
        id: "281478316350853",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000002",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x806",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004989,
        packets: 1648,
        bytes: 229072,
        id: "281478673389323",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000002",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x8942",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2555,
        liveType: "UNKNOWN",
        lastSeen: 1703839004989,
        packets: 1648,
        bytes: 229072,
        id: "281475022575828",
        appId: "org.onosproject.core",
        priority: 40000,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000002",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x88cc",
            },
          ],
        },
      },
      {
        groupId: 0,
        state: "ADDED",
        life: 2476,
        liveType: "UNKNOWN",
        lastSeen: 1703839004989,
        packets: 0,
        bytes: 0,
        id: "281475568191580",
        appId: "org.onosproject.core",
        priority: 5,
        timeout: 0,
        isPermanent: true,
        deviceId: "of:0000000000000002",
        tableId: 0,
        tableName: "0",
        treatment: {
          instructions: [
            {
              type: "OUTPUT",
              port: "CONTROLLER",
            },
          ],
          clearDeferred: true,
          deferred: [],
        },
        selector: {
          criteria: [
            {
              type: "ETH_TYPE",
              ethType: "0x800",
            },
          ],
        },
      },
    ],
  });
  const handleHomeButton = () => {
    navigate("/home");
  };

  React.useEffect(() => {
    axios
      .get(`${URL}/flows`)
      .then((res) => {
        console.log(res);
        setFlows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddFlowButton = () => {
    navigate("/flow/add");
  }

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
                  Flows
                </Typography>

                <Stack spacing={3} marginBottom={2} marginTop={3}>
                  {/*  */}
                  {flows.flows.map((flow) => (
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
                        ID: {flow.id} <br />
                        AppID: {flow.appId}
                      </Typography>
                      {/* Add update and delete buttons on the right side of the box */}
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        
                        
                        <Button
                          variant="contained"
                          startIcon={<DeleteIcon />}
                        //   onClick={() => handleDeleteButton(device.id)}
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
                    onClick={handleAddFlowButton}
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
                    Add Flow
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

export default Flows;
