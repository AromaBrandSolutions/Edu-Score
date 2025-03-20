import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import myImage from "../assets/img1.png"; // Import the image

const HomeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fef8f2", // Light cream background
        padding: "50px 20px",
      }}
    >
      {/* Centered Container with Side Spacing */}
      <Box sx={{ maxWidth: "1200px", margin: "auto" }}>  
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Eduscore <br />
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil officiis beatae explicabo odit a voluptatibus praesentium error laudantium nostrum, excepturi ullam quae illo. Ea sapiente officiis suscipit autem necessitatibus.
            </Typography>

            {/* Buttons */}
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: "10px" }}
              >
                Button 1
              </Button>
              <Button variant="outlined" color="inherit">
                Button 2
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Image Section */}
          <Grid item xs={12} md={6}>
            <img 
              src={myImage} 
              alt="Eduscore" 
              style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} 
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeSection;
