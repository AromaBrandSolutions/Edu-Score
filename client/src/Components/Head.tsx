import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { School, TrendingUp, Group, Map } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6A11CB, #2575FC)",
        color: "white",
        textAlign: "center",
        py: 8,
        px: 3,
      }}
    >
      {/* Heading & CTA Buttons */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg, #6dd5ed, #ff758c)",
          WebkitBackgroundClip: "text",
          fontSize: { xs: "2rem", md: "3rem" },
          color: "primary",
        }}
      >
        Simply Powerful Online Exams
      </Typography>
      <Typography variant="body1" color="primary" mt={2}>
        Join our thriving community. Kickstart your career with curated jobs,
        expert guidance, and skill-building resources—all in one place.
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
          Explore Cources
        </Button>
        <Button variant="contained" color="primary">
          Join Free
        </Button>
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={3} justifyContent="center" mt={5}>
        {[
          {
            title: "Career Growth",
            desc: "Find roles that match your ambition and expertise",
            icon: <TrendingUp />,
          },
          {
            title: "Skill Development",
            desc: "Access curated resources to enhance your skills",
            icon: <School />,
          },
          {
            title: "Community Hub",
            desc: "Connect with peers and industry experts",
            icon: <Group />,
          },
          {
            title: "Learning Paths",
            desc: "Follow curated roadmaps to success",
            icon: <Map />,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                background:
                  "linear-gradient(135deg,rgb(255, 255, 255),rgb(162, 212, 255))",
                padding: 2,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroSection;
