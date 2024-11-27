import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Avatar } from "@mui/material";
import { useAuth } from "../provider/AuthContext";

const drawerWidth = 240;

const drawersList = [
  { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
  {
    name: "Students",
    path: "/admin/students",
    icon: <ShoppingBagIcon />,
  },
  {
    name: "Hall Management",
    path: "/admin/hall",
    icon: <RestaurantOutlinedIcon />,
  },
  {
    name: "Inquiries",
    path: "/admin/inquiries",
    icon: <DeliveryDiningOutlinedIcon />,
  },
];

export default function SideNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  return (
    <Box display={"flex"}>
      <CssBaseline />
      <Navbar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ height: "100%" }}>
          <List sx={{ height: "100%" }}>
            {drawersList.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  selected={item.path === location?.pathname}
                  onClick={() => navigate(item.path)}
                  sx={{
                    background: "primary.main",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* <ListItem disablePadding sx={{ mt: "auto", mb: 0 }}>
              <ListItemButton
                sx={{
                  background: "primary.main",
                }}
              >
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                <ListItemText primary={user.email} />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, bgcolor: "background.default" }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
