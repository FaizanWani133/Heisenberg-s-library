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
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is small (mobile)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {drawersList.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            component={Link}
            to={item.path}
          >
            <ListItemButton
              selected={item.path === location?.pathname}
              sx={{
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  minWidth: isMobile ? "unset" : "56px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={item.name} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}
      <Navbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Navbar>

      {/* Side Navigation */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isMobile ? 70 : drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {drawerContent}
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
