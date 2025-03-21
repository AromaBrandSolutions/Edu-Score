import {
  TextField,
  InputAdornment,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Search,
  Work,
  Notifications,
  School,
  Groups,
  LinkedIn,
  WhatsApp,
  Telegram,
  OpenInNew,
} from "@mui/icons-material";

const MissionComponent = () => {
  const features = [
    {
      title: "Career Guidance",
      desc: "Personalized career paths",
      icon: <Work color="primary" />,
    },
    {
      title: "Job Alerts",
      desc: "Real-time opportunities",
      icon: <Notifications color="secondary" />,
    },
    {
      title: "Learning Resources",
      desc: "Curated learning paths",
      icon: <School color="success" />,
    },
    {
      title: "Community",
      desc: "Expert network access",
      icon: <Groups color="warning" />,
    },
  ];

  const socialStats = [
    { platform: "LinkedIn", count: "10K+", icon: <LinkedIn color="primary" /> },
    { platform: "WhatsApp", count: "5K+", icon: <WhatsApp color="success" /> },
    { platform: "Telegram", count: "8K+", icon: <Telegram color="info" /> },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      {/* Search Bar and Find Jobs Button */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={9}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search jobs (e.g. Internships, Developer, Data Analyst, Microsoft, etc.)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<Work />}>
            Find Jobs
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {/* Left Container: Mission & Features */}
        <Grid item xs={12} md={8}>
          <Card variant="outlined" style={{ padding: "20px", height: "100%" }}>
            <Typography variant="h5" fontWeight="bold">
              Our Mission
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Empowering tech careers through innovation
            </Typography>

            {/* Career Guidance, Job Alerts, Learning Resources, Community */}
            <Grid container spacing={3} style={{ marginTop: "20px" }}>
              {features.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card variant="outlined">
                    <CardContent
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {item.icon}
                      <div>
                        <Typography variant="h6" fontWeight="bold">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.desc}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* Right Container: Social Media Stats */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined" style={{ padding: "10px", height: "100%" }}>
            <Grid container spacing={1}>
              {socialStats.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Card variant="outlined" style={{ padding: "10px" }}>
                    <CardContent
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {item.icon}
                        <div>
                          <Typography variant="h6" fontWeight="bold">
                            {item.count}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {item.platform}
                          </Typography>
                        </div>
                      </div>
                      <OpenInNew color="action" />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MissionComponent;
