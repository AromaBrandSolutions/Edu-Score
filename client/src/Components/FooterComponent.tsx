
import { Grid, Typography, Card, CardContent } from "@mui/material";

const FooterComponent = () => {
  return (
    <div style={{ background: "#0a1930", color: "white", padding: "40px 20px" }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section: Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">Eduscore</Typography>
          <Typography variant="body2" color="gray">
            Welcome to Educore. Find verified internships.
          </Typography>
          <Typography variant="h6" fontWeight="bold" style={{ marginTop: "20px" }}>Contact Us</Typography>
          <Typography variant="body2" color="gray">contact@eduscore.in</Typography>
          <Typography variant="body2" color="gray">ads@eduscore.in</Typography>
          <Typography variant="body2" color="gray">collaboration@eduscore.in</Typography>
        </Grid>

        {/* Internship Section */}
        <Grid item xs={12} md={2}>
          <Card variant="outlined" style={{ borderColor: "white", backgroundColor: "transparent", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="white">-Internship</Typography>
              <Typography variant="body2" color="gray">-About Eduscore</Typography>
              <Typography variant="body2" color="gray">-Support Us</Typography>
              <Typography variant="body2" color="gray">-Advertising Info</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} md={2}>
          <Card variant="outlined" style={{ borderColor: "white", backgroundColor: "transparent", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="white">Resources</Typography>
              <Typography variant="body2" color="gray">-Help Center</Typography>
              <Typography variant="body2" color="gray">-Contact Support</Typography>
              <Typography variant="body2" color="gray">-FAQs</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Roadmap Section */}
        <Grid item xs={12} md={2}>
          <Card variant="outlined" style={{ borderColor: "white", backgroundColor: "transparent", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="white">-Roadmap</Typography>
              <Typography variant="body2" color="gray">-Privacy Policy</Typography>
              <Typography variant="body2" color="gray">-Terms of Use</Typography>
              <Typography variant="body2" color="gray">-Refund & Cancellation</Typography>
              <Typography variant="body2" color="gray">-Shipping & Delivery</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;
