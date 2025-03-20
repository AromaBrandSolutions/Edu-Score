import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button,Drawer,  TextField, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work"; // Internship icon
import RouteIcon from "@mui/icons-material/Route"; // Roadmaps icon
import MenuBookIcon from "@mui/icons-material/MenuBook"; // Courses icon
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; // Resources icon
import SchoolIcon from "@mui/icons-material/School"; // EduScore icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="static"
    sx={{
      backgroundColor: "#0a1930",
      boxShadow: 1,
      maxHeight: "600px",
      px: 3, // Horizontal padding for better spacing
    }}>
      <Toolbar sx={{
      display: "flex",
      justifyContent: "space-between", // Aligns items to the left & right
      alignItems: "center", // Centers items vertically
      minHeight: "50px",
    }}>
           

          
        {/* Mobile Menu Button */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        
        {/* Logo */}
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}>
      <SchoolIcon /> EduScore
    </Typography>
        
        {/* Navbar Links for Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, fontSize: "1 rem" }}>
          <Button color="inherit"startIcon={<WorkIcon />} >Internship</Button>
          <Button color="inherit"startIcon={<RouteIcon />}>Roadmaps</Button>
          <Button color="inherit"startIcon={<MenuBookIcon />}>Cources</Button>
          <Button color="inherit"startIcon={<LibraryBooksIcon />}>Resources</Button>
        </Box>
        
           {/* Exam Key Input & Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
              {/* <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: "20px", px: 2, py: 1 }}>
                <TextField variant="standard" placeholder="Student Exam Key" InputProps={{ disableUnderline: true }} sx={{ flex: 1, mr: 1 }} />
                <Button
                    variant="text"
                    sx={{
                      color: "Black",
                      "&:hover": {
                        backgroundColor: "gray",
                      
                        
                      },
                    }}
                >  
                →
                </Button>
          </Box> */}
          
          <Button variant="text" color="inherit" sx={{ borderRadius: "50px" ,alignItems:'end' }}>Student Sign In</Button>
          <Button variant="text" color="inherit" sx={{ borderRadius: "50px" ,alignItems:"end"}}>Teacher Sign In</Button>
        </Box>
      </Toolbar>
      
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, p: 3 }}>
          <IconButton onClick={() => setIsOpen(false)} sx={{ float: "right" }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4, fontSize: "1.1rem" }}>
            <Button color="inherit">Internship</Button>
            <Button color="inherit">Roadmaps</Button>
            <Button color="inherit">Cources</Button>
            <Button color="inherit">Resources</Button>
            <TextField variant="outlined" placeholder="Student Exam Key" fullWidth />
            <Button variant="contained" color="primary" fullWidth>Submit</Button>
            <Button variant="outlined" color="inherit" fullWidth>Sign Up</Button>
            <Button color="inherit" fullWidth>Teacher Sign In</Button>
          </Box>
        </Box>
      </Drawer> 
    </AppBar>
  );
}
