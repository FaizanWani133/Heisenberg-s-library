import { useState } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";

const Navbar = () => {
  const isAuthenticated = true;
  return (
    <AppBar
      position={isAuthenticated ? "fixed" : "static"}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ ml: "auto", gap: "10px" }}>
        {!isAuthenticated ? (
          <>
            <Button color="inherit" variant="outlined">
              Admin Login
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" variant="outlined">
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
