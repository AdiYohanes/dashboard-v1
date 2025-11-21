"use client";

import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import KostSelector from "./KostSelector";

const MENU_GROUPS = [
  {
    title: "MAIN",
    items: [
      { text: "Dashboard", icon: <DashboardIcon /> },
      { text: "Unit Kost", icon: <HomeWorkIcon /> },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { text: "Users", icon: <PersonIcon /> },
      { text: "Settings", icon: <SettingsIcon /> },
    ],
  },
];

export default function Sidebar({ drawerWidth }: { drawerWidth: number }) {
  const [selectedKost, setSelectedKost] = useState("kost1");

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* HEADER */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          px: 2.5,
          py: 3,
          mb: 1,
        }}
      >
        <Box display="flex" flexDirection="row" mb={2}>
          <Avatar
            sx={{
              width: 44,
              height: 44,
              bgcolor: "#00C853",
              mr: 2,
              boxShadow: "0 4px 12px rgba(0, 200, 83, 0.3)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900, color: "white" }}>
              S
            </Typography>
          </Avatar>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                color: "#00c853",
                lineHeight: 1.1,
                fontSize: "1rem",
              }}
            >
              SYANTIKA
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#757575",
                fontWeight: 500,
                letterSpacing: "1px",
                fontSize: "0.7rem",
              }}
            >
              KOST RESIDENCE
            </Typography>
          </Box>
        </Box>

        {/* Modern Kost Selector */}
        <KostSelector
          selectedKost={selectedKost}
          setSelectedKost={setSelectedKost}
        />
      </Toolbar>

      <Divider />

      {/* MENU LISTS */}
      <List component="nav">
        {MENU_GROUPS.map((group, index) => (
          <Box key={index}>
            <ListSubheader
              sx={{
                bgcolor: "transparent",
                fontWeight: 700,
                fontSize: "0.75rem",
                color: "#9e9e9e",
                textTransform: "uppercase",
                letterSpacing: "1px",
                mt: 2,
                lineHeight: "32px",
              }}
            >
              {group.title}
            </ListSubheader>

            {group.items.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton sx={{ py: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: "#616161" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
