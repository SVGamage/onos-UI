import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import { Toolbar, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const image = process.env.PUBLIC_URL + "Images/router2.jpg";

const QueueForm = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDescriptionError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (title && description) {
      console.log(title);
      console.log(description);
    }
  };

  const handleCancle = (event) => {
    event.preventDefault();
    setTitle("");
    setDescription("");
    navigate("/vswitch");
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
                backgroundColor: "#DDE6ED",
                boxShadow: " 1px 1px 20px 0px rgb(0,0,0, 0.5)",
              }}
            >
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
                  color="#526D82"
                  sx={{
                    fontFamily: "public sans",
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  V Switch
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    size="small"
                    value={title}
                    onChange={handleTitleChange}
                    label="Queue ID"
                    variant="outlined"
                    fullWidth
                    required
                    error={titleError}
                    helperText={titleError ? "ID is Required" : ""}
                    sx={{
                      marginY: "10px",
                      color: "#27374D",
                    }}
                  ></TextField>
                  <TextField
                    size="small"
                    value={description}
                    onChange={handleDescriptionChange}
                    label="Queue Description"
                    variant="outlined"
                    fullWidth
                    required
                    error={descriptionError}
                    helperText={
                      descriptionError ? "Description is required" : ""
                    }
                    multiline
                    rows={5}
                    sx={{ marginY: "10px" }}
                  ></TextField>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ margin: "10px" }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      type="submit"
                      disableElevation
                      startIcon={<CreateIcon />}
                      sx={{
                        backgroundColor: "#27374D",
                        color: "#DDE6ED",
                        fontFamily: "public sans",
                        fontSize: "16px",
                        fontWeight: 800,
                        borderRadius: "10px",
                        textTransform: "none",
                        width: "50%",
                        "&:hover": {
                          backgroundColor: "#9DB2BF",
                          color: "#27374D",
                        },
                      }}
                    >
                      Create
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      type="button"
                      onClick={handleCancle}
                      disableElevation
                      startIcon={<ClearIcon />}
                      sx={{
                        backgroundColor: "#27374D",
                        color: "#DDE6ED",
                        fontFamily: "public sans",
                        fontSize: "16px",
                        fontWeight: 800,
                        borderRadius: "10px",
                        textTransform: "none",
                        width: "50%",
                        "&:hover": {
                          backgroundColor: "#9DB2BF",
                          color: "#27374D",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default QueueForm;
