import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Adjust based on your layout
        bgcolor: "background.default",
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          textAlign: "center",
          mb: 2,
        }}
      >
        Welcome to Heisenberg's Library
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        This is your one-stop dashboard to manage students, cabins, and halls
        efficiently. Enjoy seamless and intuitive control over your library
        system!
      </Typography>
    </Box>
  );
};

export default Dashboard;
