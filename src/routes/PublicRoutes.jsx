import { Container } from "@mui/material";
import { Navigate, Outlet, } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../provider/AuthContext";

const PublicRoutes = () => {
  const {user} = useAuth();

  if (user) {
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
