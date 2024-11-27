import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    // Use navigate to navigate to a different route
    navigate(url);
  };
  const isAuthenticated = false;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        padding: "16px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Box
        display={"flex"}
        flexGrow={0.1}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
        justifyContent={"center"}
      >
        {/* <img src={require("./../assets/white-logo.png")} width={100} /> */}
        {/* <GooglePlayButton fullWidth />
        <AppStoreButton fullWidth /> */}
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          width={"100%"}
          mt={"auto"}
          padding={"10px"}
        >
          {/* <FaFacebook color="white" size={24} />
          <FaGoogle color="white" size={24} />
          <FaApple color="white" size={24} /> */}
        </Box>
      </Box>
      {!isAuthenticated && (
        <Box flexGrow={1}>
          <Box textAlign={"center"} color={"white"}>
            <Typography fontWeight={"bold"}>
              2023 Hisenbergs Library . All Rights Reserved
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
