import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../provider/AuthContext";

const PublicRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={"/admin"} />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoutes;
