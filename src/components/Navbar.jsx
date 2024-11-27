import { AppBar, Button, Toolbar, } from "@mui/material";
import { useAuth } from "../provider/AuthContext";
import AuthModal from "./AuthModal";
import { useState } from "react";

const Navbar = () => {
  const { user ,logout} = useAuth();
  const [showLogin,setShowModal] = useState(false)

  function toggleAuthModal(){
    setShowModal(prev=>!prev) 
  }
  return (
    <AppBar
      position={user ? "fixed" : "static"}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ ml: "auto", gap: "10px" }}>
        {!user ? (
          <>
            <Button color="inherit" variant="outlined" onClick={toggleAuthModal}>
              Admin Login
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" variant="outlined" onClick={logout}>
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
      <AuthModal isOpen={showLogin && !user} onClose={toggleAuthModal}/>
    </AppBar>
  );
};

export default Navbar;
