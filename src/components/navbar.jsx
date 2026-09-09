import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;
      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      setActiveSection(id);
    }

    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
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

        {/* DESKTOP NAVIGATION */}
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
          {links.map((link) => {
            const isActive = activeSection === link.id;
            const isContact = link.id === "contact";

            return (
              <Button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                sx={{
                  minWidth: isContact ? "120px" : "auto",
                  height: isContact ? "40px" : "36px",
                  px: isContact ? 2.5 : 1.5,
                  borderRadius: isContact ? "22px" : "8px",
                  color: isContact
                    ? isActive
                      ? "#FFFFFF"
                      : "#252525"
                    : isActive
                      ? "#A87900"
                      : "#252525",
                  fontSize: "11px",
                  fontWeight: isContact ? 700 : 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  backgroundColor: isContact
                    ? isActive
                      ? "#A87900"
                      : "#D4A017"
                    : isActive
                      ? "rgba(212,160,23,0.12)"
                      : "transparent",
                  borderBottom: !isContact && isActive
                    ? "2px solid #D4A017"
                    : "2px solid transparent",
                  boxShadow: isContact
                    ? "0 3px 8px rgba(212,160,23,0.18)"
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isContact
                      ? "#A87900"
                      : "rgba(212,160,23,0.08)",
                    color: isContact ? "#FFFFFF" : "#A87900",
                    transform: "translateY(-1px)",
                    boxShadow: isContact
                      ? "0 5px 12px rgba(212,160,23,0.25)"
                      : "none",
                  },
                }}
              >
                {link.name}
              </Button>
            );
          })}
        </Box>

        {/* MOBILE MENU BUTTON */}
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
            "&:hover": {
              color: "#D4A017",
              backgroundColor: "rgba(212,160,23,0.08)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* MOBILE DRAWER */}
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
            backgroundColor: "rgba(244,243,239,0.96)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
          },
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>
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
                  backgroundColor: "rgba(212,160,23,0.08)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <ListItem
                  key={link.id}
                  disablePadding
                  sx={{ mb: 0.5 }}
                >
                  <ListItemButton
                    onClick={() => scrollToSection(link.id)}
                    sx={{
                      borderRadius: "10px",
                      py: 1.3,
                      color: isActive ? "#A87900" : "#252525",
                      backgroundColor: isActive
                        ? "rgba(212,160,23,0.12)"
                        : "transparent",
                      borderLeft: isActive
                        ? "3px solid #D4A017"
                        : "3px solid transparent",
                      "&:hover": {
                        backgroundColor: "rgba(212,160,23,0.08)",
                        color: "#A87900",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontSize: "14px",
                        fontWeight: isActive ? 700 : 600,
                        letterSpacing: "0.04em",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
