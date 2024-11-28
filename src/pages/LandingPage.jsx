import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 20,
          px: 4,
          backgroundImage: `url('https://gia.info.gov.hk/general/202210/24/P2022102100288_photo_1226960.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to Heisenberg's Library
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            A serene space for focused study and learning. Join us to experience
            the perfect environment for your academic journey.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Why Choose Heisenberg's Library?
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
          Discover the unique features that make our study room the best choice
          for your academic needs.
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "Quiet Environment", description: "Focus like never before in a noise-free zone.", img: "https://content.jdmagicbox.com/comp/vijayawada/q7/0866px866.x866.170801212203.l5q7/catalogue/amigos-reading-hall-and-tutorials-labbipet-vijayawada-tutorials-130yumt.jpg" },
            { title: "Spacious Cabins", description: "Enjoy individual cabins for uninterrupted study.", img: "https://content.jdmagicbox.com/comp/vijayawada/q7/0866px866.x866.170801212203.l5q7/catalogue/amigos-reading-hall-and-tutorials-labbipet-vijayawada-tutorials-130yumt.jpg" },
            { title: "High-Speed Wi-Fi", description: "Stay connected with blazing fast internet.", img: "https://content.jdmagicbox.com/comp/vijayawada/q7/0866px866.x866.170801212203.l5q7/catalogue/amigos-reading-hall-and-tutorials-labbipet-vijayawada-tutorials-130yumt.jpg" },
            { title: "24/7 Access", description: "Study anytime with round-the-clock availability.", img: "https://content.jdmagicbox.com/comp/vijayawada/q7/0866px866.x866.170801212203.l5q7/catalogue/amigos-reading-hall-and-tutorials-labbipet-vijayawada-tutorials-130yumt.jpg" },
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", height: 150 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: "100%", objectFit: "cover" }}
                  image={feature.img}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: "primary.light", color: "primary.contrastText" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            What Our Members Say
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
            Hear from students who have thrived in our library environment.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: "John Doe",
                testimonial:
                  "Heisenberg's Library has completely transformed how I study. The peace and focus I get here are unmatched.",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Jane Smith",
                testimonial:
                  "The individual cabins are a blessing. I can concentrate for hours without distractions.",
                img: "https://via.placeholder.com/150",
              },
            ].map((testimony, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 2 }}>
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, fontStyle: "italic" }}
                    >
                      "{testimony.testimonial}"
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        image={testimony.img}
                        alt={testimony.name}
                      />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimony.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>
            Ready to Join Heisenberg's Library?
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
