import { Container } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicRoutes = () => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Navigate to={"/admin"} />;
  }
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default PublicRoutes;
