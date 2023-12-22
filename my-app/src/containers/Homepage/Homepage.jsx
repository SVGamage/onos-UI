import React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#27374D",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
    </Box>
  );
};

export default Homepage;
