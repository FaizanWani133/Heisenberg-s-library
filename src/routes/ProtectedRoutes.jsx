import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import SideNav from "../components/SideNav";
import { useAuth } from "../provider/AuthContext";

const ProtectedRoute = () => {
  const {user} = useAuth();
  return user ? (
    <Container maxWidth="xl" disableGutters sx={{ position: "relative" }}>
      <SideNav />
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
