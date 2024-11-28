import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E3B55",
        color: "#FFFFFF",
        padding: "40px 20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Navigation Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Home
          </Link>
          <Link href="#about" color="inherit" underline="hover" display="block">
            About Us
          </Link>
          <Link
            href="#features"
            color="inherit"
            underline="hover"
            display="block"
          >
            Features
          </Link>
          <Link
            href="#contact"
            color="inherit"
            underline="hover"
            display="block"
          >
            Contact
          </Link>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: info@heisenbergs-library.com
          </Typography>
          <Typography variant="body2">Phone: +91-123-456-7890</Typography>
          <Typography variant="body2">Address: Srinagar, India</Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Heisenberg's Library. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
