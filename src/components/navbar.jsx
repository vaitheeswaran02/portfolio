import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact Me", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        /* =========================================
           TRANSPARENT GLASS NAVBAR
        ========================================= */
            backgroundColor: "rgba(244, 243, 239, 0.62)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "#252525",
            boxShadow: "none",
            height: "70px",
            justifyContent: "center",

      }}
      
    >
      <Toolbar
        sx={{
          width: "92%",

          maxWidth: "1180px",

          mx: "auto",

          minHeight: "64px !important",

          height: "64px",

          px: "0 !important",

          justifyContent: "space-between",
        }}
      >
        {/* =========================================
            LOGO
        ========================================= */}

        <Typography
          onClick={() => scrollToSection("home")}
          sx={{
            fontSize: {
              xs: "22px",
              md: "24px",
            },

            fontWeight: 800,

            letterSpacing: "-2px",

            color: "#252525",

            cursor: "pointer",

            transition: "all 0.3s ease",

            "&:hover": {
              color: "#D4A017",
            },
          }}
        >
          VAITHESH
        </Typography>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            alignItems: "center",

            gap: 2.5,
          }}
        >
          {links.map((link) => (
            <Button
              key={link.id}
              onClick={() =>
                scrollToSection(link.id)
              }
              variant={
                link.id === "contact"
                  ? "contained"
                  : "text"
              }
              sx={{
                minWidth:
                  link.id === "contact"
                    ? "120px"
                    : "auto",

                height:
                  link.id === "contact"
                    ? "40px"
                    : "36px",

                px:
                  link.id === "contact"
                    ? 2.5
                    : 1.5,

                borderRadius:
                  link.id === "contact"
                    ? "22px"
                    : "8px",

                color:
                  link.id === "contact"
                    ? "#252525"
                    : "#252525",

                fontSize: "11px",

                fontWeight:
                  link.id === "contact"
                    ? 700
                    : 600,

                letterSpacing: "0.06em",

                textTransform: "uppercase",

                backgroundColor:
                  link.id === "contact"
                    ? "#D4A017"
                    : "transparent",

                boxShadow:
                  link.id === "contact"
                    ? "0 3px 8px rgba(212,160,23,0.18)"
                    : "none",

                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor:
                    link.id === "contact"
                      ? "#A87900"
                      : "rgba(212,160,23,0.08)",

                  color:
                    link.id === "contact"
                      ? "#FFFFFF"
                      : "#A87900",

                  transform:
                    "translateY(-1px)",

                  boxShadow:
                    link.id === "contact"
                      ? "0 5px 12px rgba(212,160,23,0.25)"
                      : "none",
                },
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}

        <IconButton
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            color: "#252525",

            width: "40px",

            height: "40px",

            borderRadius: "50%",

            transition: "all 0.3s ease",

            "&:hover": {
              color: "#D4A017",

              backgroundColor:
                "rgba(212,160,23,0.08)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* =========================================
          MOBILE DRAWER
      ========================================= */}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "280px",
              sm: "320px",
            },

            backgroundColor:
              "rgba(244,243,239,0.96)",

            backdropFilter: "blur(15px)",

            WebkitBackdropFilter:
              "blur(15px)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",

            p: 2,
          }}
        >
          {/* CLOSE BUTTON */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "flex-end",

              mb: 1,
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              sx={{
                color: "#252525",

                "&:hover": {
                  color: "#D4A017",

                  backgroundColor:
                    "rgba(212,160,23,0.08)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE LINKS */}

          <List>
            {links.map((link) => (
              <ListItem
                key={link.id}
                disablePadding
                sx={{
                  mb: 0.5,
                }}
              >
                <ListItemButton
                  onClick={() =>
                    scrollToSection(link.id)
                  }
                  sx={{
                    borderRadius: "10px",

                    py: 1.3,

                    transition:
                      "all 0.25s ease",

                    "&:hover": {
                      backgroundColor:
                        "rgba(212,160,23,0.08)",

                      color: "#A87900",

                      transform:
                        "translateX(4px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontSize: "14px",

                      fontWeight: 600,

                      letterSpacing: "0.04em",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

