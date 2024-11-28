import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PeopleIcon from '@mui/icons-material/People';
import Navbar from "./Navbar";

const drawerWidth = 240;
const drawersList = [
  { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
  {
    name: "Students",
    path: "/admin/students",
    icon: <PeopleIcon />,
  },
  {
    name: "Hall Management",
    path: "/admin/hall",
    icon: <DashboardCustomizeIcon />,
  },
  {
    name: "Inquiries",
    path: "/admin/inquiries",
    icon: <MarkUnreadChatAltIcon />,
  },
];

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <Navbar />
      {/* Side Navigation */}
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
        <Box sx={{ overflow: "auto" }}>
          <List>
            {drawersList.map((item) => (
              <ListItem
                key={item.name}
                disablePadding
                component={Link}
                to={item.path}
                sx={{color:'ActiveBorder'}}
              >
                <ListItemButton
                  selected={item.path === location?.pathname}
                  sx={{
                    background: "primary.main",
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
