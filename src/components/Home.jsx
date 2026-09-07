import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* =========================================================
   SUBTLE BACKGROUND PARTICLES
========================================================= */

const particles = [
  { left: "6%", top: "18%", size: 13, duration: 10, delay: "0s" },
  { left: "14%", top: "62%", size: 14, duration: 13, delay: "-3s" },
  { left: "23%", top: "34%", size: 16, duration: 11, delay: "-5s" },
  { left: "32%", top: "78%", size: 12, duration: 14, delay: "-2s" },
  { left: "42%", top: "15%", size: 13, duration: 12, delay: "-6s" },
  { left: "51%", top: "68%", size: 12, duration: 15, delay: "-4s" },
  { left: "61%", top: "25%", size: 14, duration: 11, delay: "-2s" },
  { left: "70%", top: "76%", size: 12, duration: 13, delay: "-1s" },
  { left: "80%", top: "16%", size: 13, duration: 15, delay: "-5s" },
  { left: "89%", top: "48%", size: 12, duration: 12, delay: "-8s" },
  { left: "18%", top: "88%", size: 13, duration: 14, delay: "-3s" },
  { left: "37%", top: "8%", size: 12, duration: 11, delay: "-6s" },
  { left: "57%", top: "90%", size: 14, duration: 16, delay: "-4s" },
  { left: "76%", top: "54%", size: 12, duration: 12, delay: "-2s" },
];

/* =========================================================
   TYPING ROLES
========================================================= */

const roles = [
  "MERN Stack Developer",
  "Generative AI Developer",
  "IoT Solutions Engineer",
];

/* =========================================================
   HOME
========================================================= */

function Home() {
  /* =======================================================
     TYPING EFFECT STATE
  ======================================================= */

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =======================================================
     TYPING EFFECT
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 45 : 90;

    // Pause after completely typing
    if (!isDeleting && displayText === currentRole) {
      speed = 1800;
    }

    // Pause before next role
    if (isDeleting && displayText === "") {
      speed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Add one character
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );

        // Start deleting after complete text
        if (displayText === currentRole) {
          setIsDeleting(true);
        }
      } else {
        // Remove one character
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );

        // Move to next role
        if (displayText === "") {
          setIsDeleting(false);

          setRoleIndex(
            (prevIndex) => (prevIndex + 1) % roles.length
          );
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",

        minHeight: "100vh",

        width: "92%",

        maxWidth: "1180px",

        mx: "auto",

        pt: {
          xs: 14,
          md: 15,
        },

        pb: 8,

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 0.9fr",
        },

        alignItems: "center",

        gap: {
          xs: 6,
          md: 9,
        },

        overflow: "hidden",

        /* =================================================
           PARTICLE ANIMATION
        ================================================= */

        "@keyframes particleFloat": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: 0.12,
          },

          "25%": {
            transform: "translate(15px, -25px) scale(1.2)",
            opacity: 0.3,
          },

          "50%": {
            transform: "translate(-10px, -50px) scale(0.9)",
            opacity: 0.18,
          },

          "75%": {
            transform: "translate(20px, -75px) scale(1.1)",
            opacity: 0.26,
          },

          "100%": {
            transform: "translate(0px, -100px) scale(1)",
            opacity: 0,
          },
        },

        /* =================================================
           PROFILE BORDER ANIMATION
        ================================================= */

        "@keyframes rotateProfileBorder": {
          from: {
            transform: "rotate(0deg)",
          },

          to: {
            transform: "rotate(360deg)",
          },
        },

        /* =================================================
           REDUCED MOTION
        ================================================= */

        "@media (prefers-reduced-motion: reduce)": {
          "& .particle-animation": {
            animation: "none !important",
          },

          "& .profile-border-animation": {
            animation: "none !important",
          },

          "& .typing-cursor": {
            animation: "none !important",
          },
        },
      }}
    >
      {/* =====================================================
          SUBTLE FLOATING PARTICLES
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          inset: 0,

          overflow: "hidden",

          pointerEvents: "none",

          zIndex: 0,
        }}
      >
        {particles.map((particle, index) => (
          <Box
            key={index}
            className="particle-animation"
            sx={{
              position: "absolute",

              left: particle.left,

              top: particle.top,

              width: particle.size,

              height: particle.size,

              borderRadius: "50%",

              background:
                index % 3 === 0
                  ? "#D4A017"
                  : "#fc800b",

              opacity: 0.13,

              animation:
                `particleFloat ${particle.duration}s ease-in-out infinite`,

              animationDelay: particle.delay,

              boxShadow:
                index % 3 === 0
                  ? "0 0 8px rgba(212,160,23,0.22)"
                  : "none",
            }}
          />
        ))}
      </Box>

      {/* =====================================================
          LEFT SIDE CONTENT
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,
        }}
      >
        {/* HEY I'M */}

        <Typography
          sx={{
            color: "#A87900",

            fontSize: "11px",

            fontWeight: 700,

            letterSpacing: "0.2em",

            mb: 2,
          }}
        >
          <h1>👋 HI! I'M</h1>
        </Typography>

        {/* NAME */}

        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "52px",
              sm: "65px",
              md: "82px",
            },

            lineHeight: 0.95,

            color: "#252525",

            fontWeight: 800,

            letterSpacing: "-0.04em",
          }}
        >
          Vaitheeswaran
        </Typography>

        {/* =================================================
            TYPING ROLE
        ================================================= */}

        <Box
          sx={{
            mt: 3,

            minHeight: {
              xs: "45px",
              md: "52px",
            },

            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "23px",
                md: "27px",
              },

              fontWeight: 700,

              color: "#D4A017",

              lineHeight: 1.3,

              display: "flex",

              alignItems: "center",
            }}
          >
            {displayText}

            {/* TYPING CURSOR */}

            <Box
              component="span"
              className="typing-cursor"
              sx={{
                display: "inline-block",

                width: "3px",

                height: {
                  xs: "24px",
                  sm: "28px",
                  md: "32px",
                },

                backgroundColor: "#D4A017",

                marginLeft: "6px",

                animation: "blinkCursor 0.7s infinite",

                "@keyframes blinkCursor": {
                  "0%, 49%": {
                    opacity: 1,
                  },

                  "50%, 100%": {
                    opacity: 0,
                  },
                },
              }}
            />
          </Typography>
        </Box>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
          sx={{
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={() => scrollTo("projects")}
            endIcon={<ArrowForwardIcon />}
          >
            View Projects
          </Button>

          <Button
            variant="outlined"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </Button>
        </Stack>

        {/* =================================================
            SOCIAL ICONS
        ================================================= */}

        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mt: 5,
          }}
        >
          {/* GITHUB */}

          <IconButton
            component="a"
            href="https://github.com/vaitheeswaran02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              width: "58px",

              height: "42px",

              borderRadius: "25px",

              border: "1px solid #D4A017",

              color: "#252525",

              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "#D4A017",

                color: "#FFFFFF",

                transform: "translateY(-3px)",

                boxShadow:
                  "0 6px 15px rgba(212,160,23,0.25)",
              },
            }}
          >
            <GitHubIcon
              sx={{
                fontSize: "21px",
              }}
            />
          </IconButton>

          {/* LINKEDIN */}

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/vaitheeswaran02/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              width: "58px",

              height: "42px",

              borderRadius: "25px",

              border: "1px solid #D4A017",

              color: "#252525",

              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "#D4A017",

                color: "#FFFFFF",

                transform: "translateY(-3px)",

                boxShadow:
                  "0 6px 15px rgba(212,160,23,0.25)",
              },
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "21px",
              }}
            />
          </IconButton>

          {/* EMAIL */}

          <IconButton
            component="a"
            href="mailto:vaitheeswaran.devp@gmail.com"
            aria-label="Email"
            sx={{
              width: "58px",

              height: "42px",

              borderRadius: "25px",

              border: "1px solid #D4A017",

              color: "#252525",

              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "#D4A017",

                color: "#FFFFFF",

                transform: "translateY(-3px)",

                boxShadow:
                  "0 6px 15px rgba(212,160,23,0.25)",
              },
            }}
          >
            <EmailIcon
              sx={{
                fontSize: "21px",
              }}
            />
          </IconButton>
        </Stack>
      </Box>

      {/* =====================================================
          PROFILE AREA
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          width: "100%",

          minHeight: {
            xs: 400,
            md: 550,
          },

          background: "transparent",

          overflow: "visible",
        }}
      >
        {/* =================================================
            ROTATING MUSTARD BORDER
        ================================================= */}

        <Box
          className="profile-border-animation"
          sx={{
            position: "absolute",

            width: {
              xs: 292,
              sm: 352,
              md: 432,
            },

            height: {
              xs: 292,
              sm: 352,
              md: 432,
            },

            borderRadius: "50%",

            background:
              "conic-gradient(from 0deg, #D4A017 0deg, #D4A017 65deg, transparent 65deg, transparent 100deg, #D4A017 100deg, #D4A017 180deg, transparent 180deg, transparent 220deg, #D4A017 220deg, #D4A017 300deg, transparent 300deg, transparent 330deg, #D4A017 330deg, #D4A017 360deg)",

            animation:
              "rotateProfileBorder 5s linear infinite",

            zIndex: 0,
          }}
        />

        {/* =================================================
            WHITE INNER RING
        ================================================= */}

        <Box
          sx={{
            position: "absolute",

            width: {
              xs: 282,
              sm: 342,
              md: 422,
            },

            height: {
              xs: 282,
              sm: 342,
              md: 422,
            },

            borderRadius: "50%",

            background: "#FFFFFF",

            zIndex: 1,
          }}
        />

        {/* =================================================
            PROFILE IMAGE
        ================================================= */}

        <Box
          component="img"
          src="/assets/profile2.png"
          alt="Vaitheeswaran"
          sx={{
            position: "relative",

            width: {
              xs: 270,
              sm: 330,
              md: 410,
            },

            height: {
              xs: 270,
              sm: 330,
              md: 410,
            },

            objectFit: "cover",

            objectPosition: "center top",

            borderRadius: "50%",

            zIndex: 2,

            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
