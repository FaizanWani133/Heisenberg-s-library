import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import SideNav from "../components/SideNav";

const ProtectedRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Container maxWidth="xl" disableGutters sx={{ position: "relative" }}>
      <SideNav />
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
