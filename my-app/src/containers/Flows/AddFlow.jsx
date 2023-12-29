import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import { Toolbar, useMediaQuery } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid, Button, Stack } from "@mui/material";

const defaultFlowData = {
  priority: 40000,
  timeout: 0,
  isPermanent: true,
  deviceId: 'of:0000000000000001',
  treatment: {
    instructions: [
      {
        type: 'OUTPUT',
        port: 'CONTROLLER',
      },
    ],
  },
  selector: {
    criteria: [
      {
        type: 'ETH_TYPE', 
        ethType: '0x88cc',
      },
    ],
  },
};

function FlowPage() {
  const [flowData, setFlowData] = useState(defaultFlowData);

  const isMobile = useMediaQuery("(max-width: 650px)");
  const navigate = useNavigate();
  const handleChange = (field, value) => {
    setFlowData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleApiCall = async () => {
    try {
      const response = await axios.post('/flows', {
        flows: [flowData],
      });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

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
                  New Flow Rule
                </Typography>

      <TextField
        label="Priority"
        type="number"
        value={flowData.priority}
        onChange={(e) => handleChange('priority', parseInt(e.target.value, 10))}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Timeout"
        type="number"
        value={flowData.timeout}
        onChange={(e) => handleChange('timeout', parseInt(e.target.value, 10))}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Device ID"
        value={flowData.deviceId}
        onChange={(e) => handleChange('deviceId', e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Ethernet Type"
        value={flowData.selector.criteria[0].ethType}
        onChange={(e) => handleChange('selector', { criteria: [{ type: 'ETH_TYPE', ethType: e.target.value }] })}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleApiCall}>
        Submit
      </Button>

    </CardContent>
    </Card>
    </Grid>
    </Grid>
    </Box>
    </Box>
  );
}

export default FlowPage;