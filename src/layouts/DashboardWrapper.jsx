import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaBuysellads } from "react-icons/fa";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  AppBar,
  Button,
  Tooltip,
  InputBase,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { BellIcon, Handbag, Search, SearchIcon } from "lucide-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StorefrontIcon from "@mui/icons-material/Storefront";


// Import Images
import Logo from "../assets/logo6.png";
import { Logout } from "iconsax-react";

const drawerFullWidth = 250;
const drawerMiniWidth = 90;

export default function DashboardLayout({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sidebar items
 const sidebarItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
  { label: "Message", icon: <MailOutlineIcon />, path: "/message" },
  { label: "Products", icon: <Inventory2Icon />, path: "/products" },
  { label: "Reports", icon: <BarChartIcon />, path: "/reports" },
  { label: "Marketplace", icon: <StorefrontIcon />, path: "/marketplace" },
];
  const getPageTitle = (path) => {
    const item = sidebarItems.find((i) => i.path === path);
    return item ? item.label : "Dashboard";
  };

  const activePageTitle = getPageTitle(location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const getSelected = (isSelected) => ({
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "6px",
    borderTopLeftRadius: 33,
    borderBottomLeftRadius: 33,
    backgroundColor: isSelected ? "#D4A574" : "transparent",
  });

  return (
    <Box sx={{ display: "flex", height: "100vh", bg: "#000" }}>
      <CssBaseline />

      {/* HEADER */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${isSidebarOpen ? drawerFullWidth : drawerMiniWidth
            }px)`,
          ml: `${isSidebarOpen ? drawerFullWidth : drawerMiniWidth}px`,
          backgroundColor: "#FFFFFF",
          color: "Black",
          boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", paddingBlock: "19px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight="bold"
            fontSize="16px"
          >
            {activePageTitle}
          </Typography>
          {/* Search + Notification */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-#B7B7B9/40 w-4 h-4" />
              <input
                type="text"
                placeholder="Search…"
                className="pl-8 pr-2 py-1.5 rounded-xl border border-transparent bg-[#F5F5F5] text-#B7B7B9  focus:outline-none"
              />
            </div>

            {/* Notification Icon */}
            <button className="text-white p-1">
              <BellIcon className="w-4 h-4" />
            </button>
          </div>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: isSidebarOpen ? drawerFullWidth : drawerMiniWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isSidebarOpen ? drawerFullWidth : drawerMiniWidth,
            boxSizing: "border-box",
            transition: "width 0.3s",
            backgroundColor: "#ffffff",
            overflowX: "hidden",
            padding: "8px 0px 8px 16px",
            position: "relative",
            color: "black",
          },
        }}
      >
        {/* Toggle */}
        <IconButton
          onClick={toggleSidebar}
          edge="start"
          sx={{
            position: "fixed",
            top: "46vh",
            left: isSidebarOpen
              ? `${drawerFullWidth - 6}px`
              : `${drawerMiniWidth - 6}px`,
            zIndex: 1300,
            padding: 0,
          }}
        >
          <Box
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B7B7B9]
               shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] 
               group-hover:scale-110 transition-all duration-300 ease-in-out text-[Black]"
          >
            {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </Box>
        </IconButton>

        <Toolbar
          sx={{
            p: 0,
            borderBottom: "1px solid #B7B7B9",
            mb: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              width={60}
              style={{ display: "block" }}
            />
          </Box>
        </Toolbar>

        {/* Sidebar Content */}
        <Box
          sx={{
            height: "100vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <List>
            {sidebarItems.map((item) => (
              <Tooltip
                // key={item.label}
                // title={!isSidebarOpen ? item.label : ""}
                // placement="right"
              >
                <ListItemButton
                  onClick={() => handleNavigate(item.path)}
                  selected={location.pathname.startsWith(item.path)}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "Balck !important",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#B7B7B9 !important",
                    },

                    color: location.pathname.startsWith(item.path)
                      ? "#4B5563"
                      : "#4B5563",

                    "& .MuiListItemIcon-root": {
                      color: location.pathname.startsWith(item.path)
                        ? "#4B5563"
                        : "#4B5563",
                    },

                    "&:hover": {
                      backgroundColor: location.pathname.startsWith(item.path)
                        ? "black"
                        : "rgba(255, 255, 255, 0.12)",
                    },

                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={getSelected(location.pathname.startsWith(item.path))}
                  />
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {isSidebarOpen && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        noWrap: true,
                        fontSize: "0.875rem",
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            ))}
            {/* <Divider sx={{ mt: 2, borderColor: "#1A1A1A" }} /> */}
            <ListItemButton
              // onClick={handleLogout}
              sx={{
                color: "#4B5563",
                // "&:hover": {
                //   color : "#4B5563",
                //   backgroundColor: "#4B5563",
                // },
                borderRadius: "8px",
              }}
            >
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#4B5563" }} />
              </ListItemIcon>
              {isSidebarOpen && (
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    noWrap: true,
                    fontSize: "0.875rem",
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 4,
          py: 2,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "White",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            pr: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
