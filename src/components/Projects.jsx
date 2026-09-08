import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    
    
    title: "RFID Smart Attendance System",

    image: "/assets/project4.jpeg",

    techStack:
      "ESP32, MFRC522 RFID Reader, Python, PySerial, I2C LCD, Microsoft Excel",

    features:
      "RFID-based attendance tracking, automatic student identification, real-time attendance recording, serial communication, LCD display and Excel data storage.",

    github:
      "https://github.com/vaitheeswaran02/Embedded/tree/main/project",


  },

  {
    
    
    title: "Car Price Prediction",

    image: "/assets/project3.png",

    techStack:
      "Python, Machine Learning, Random Forest, Linear Regression, Streamlit",

    features:
      "Car price prediction using supervised learning models, data preprocessing, feature encoding, model evaluation and an interactive Streamlit interface.",

    github:
      "https://github.com/vaitheeswaran02/MlProject.git",


  },

  {
    
    
    title: "Credict Card Fraud Detection",

    image: "/assets/project2.png",

    techStack:
      "Python, Machine Learning, Random Forest, Logistic Regression, Streamlit",

    features:
      "Credit card fraud detection using machine learning models, data preprocessing, feature engineering, model evaluation and an interactive Streamlit interface.",

    github:
      "https://github.com/vaitheeswaran02/MlProject.git",

    youtube: "",
  },

  {
    
    
    title: "Vip Bank",

    image: "/assets/project4.png",

    techStack:
      "Java, Spring Boot, MySQL, RESTful API, Thymeleaf",

    features:
      "Bank management system with user authentication, account management, transaction processing, and a web-based interface.",

    github:
      "https://github.com/vaitheeswaran02",

    youtube: "",
  },
];

/* =========================================================
   PROJECT SHOWCASE CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <Box
      sx={{
        flex: {
          xs: "0 0 88vw",
          sm: "0 0 650px",
          md: "0 0 900px",
        },

        width: {
          xs: "88vw",
          sm: "650px",
          md: "900px",
        },

        minWidth: {
          xs: "88vw",
          sm: "650px",
          md: "900px",
        },

        boxSizing: "border-box",

        px: {
          xs: 1,
          sm: 2,
          md: 3,
        },
      }}
    >
      {/* =================================================
          PROJECT TITLE
      ================================================= */}

      <Box
        sx={{
          textAlign: "center",

          mb: {
            xs: 4,
            md: 5,
          },
        }}
      >
        <Typography
          sx={{
            color: "#A87900",

            fontSize: "11px",

            fontWeight: 700,

            letterSpacing: "0.2em",

            textTransform: "uppercase",

            mb: 1,
          }}
        >
          {project.number} / {project.type}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontSize: {
              xs: "28px",
              sm: "36px",
              md: "44px",
            },

            lineHeight: 1.05,

            fontWeight: 800,

            letterSpacing: "-0.04em",

            color: "#252525",
          }}
        >
          {project.title}
        </Typography>
      </Box>

      {/* =================================================
          IMAGE + DETAILS
      ================================================= */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.15fr 0.85fr",
          },

          gap: {
            xs: 3,
            md: 5,
          },

          alignItems: "center",
        }}
      >
        {/* =================================================
            PROJECT IMAGE
        ================================================= */}

        <Box
          sx={{
            width: "100%",

            height: {
              xs: "210px",
              sm: "270px",
              md: "330px",
            },

            borderRadius: "10px",

            overflow: "hidden",

            backgroundColor: "#F4F3EF",

            border:
              "1px solid rgba(212,160,23,0.25)",

            boxShadow:
              "0 12px 35px rgba(0,0,0,0.08)",

            transition: "all 0.35s ease",

            "&:hover": {
              borderColor: "#D4A017",

              transform: "translateY(-4px)",

              boxShadow:
                "0 18px 40px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",

              height: "100%",

              objectFit: "cover",

              display: "block",

              transition:
                "transform 0.5s ease",

              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>

        {/* =================================================
            PROJECT INFORMATION
        ================================================= */}

        <Box>
          {/* TECH STACK */}

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: "#D4A017",

                fontSize: {
                  xs: "16px",
                  md: "18px",
                },

                fontWeight: 700,

                mb: 0.8,
              }}
            >
              Tech Stack
            </Typography>

            <Typography
              sx={{
                color: "#555",

                fontSize: {
                  xs: "13px",
                  md: "14px",
                },

                lineHeight: 1.7,
              }}
            >
              {project.techStack}
            </Typography>
          </Box>

          {/* FEATURES */}

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: "#D4A017",

                fontSize: {
                  xs: "16px",
                  md: "18px",
                },

                fontWeight: 700,

                mb: 0.8,
              }}
            >
              Features
            </Typography>

            <Typography
              sx={{
                color: "#555",

                fontSize: {
                  xs: "13px",
                  md: "14px",
                },

                lineHeight: 1.7,
              }}
            >
              {project.features}
            </Typography>
          </Box>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <Stack
            direction="row"
            spacing={1.5}
          >
           

            {/* GITHUB */}

            <Button
              component="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              endIcon={<ArrowOutwardIcon />}
              variant="outlined"
              sx={{
                flex: 1,

                minHeight: "44px",

                borderRadius: "7px",

                borderColor: "#D4A017",

                color: "#A87900",

                fontWeight: 700,

                fontSize: "12px",

                textTransform: "none",

                "&:hover": {
                  backgroundColor:
                    "rgba(212,160,23,0.08)",

                  borderColor: "#A87900",
                },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

function Projects() {
  /*
    Duplicate the projects so the marquee
    can loop continuously without an empty gap.
  */

  const marqueeProjects = [
    ...projects,
    ...projects,
  ];

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",

        py: {
          xs: 10,
          md: 14,
        },

        backgroundColor: "#FFFFFF",

        color: "#252525",

        overflow: "hidden",
      }}
    >
      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <Box
        sx={{
          width: "92%",

          maxWidth: "1180px",

          mx: "auto",

          mb: {
            xs: 7,
            md: 9,
          },
        }}
      >
        <Typography
          sx={{
            color: "#A87900",

            fontSize: "11px",

            fontWeight: 700,

            letterSpacing: "0.2em",

            textTransform: "uppercase",
          }}
        >

        </Typography>

        <Typography
          component="h2"
          sx={{
            mt: 2,

            fontSize: {
              xs: "50px",
              sm: "65px",
              md: "78px",
            },

            lineHeight: 0.95,

            fontWeight: 800,

            letterSpacing: "-0.06em",

            color: "#252525",
          }}
        >
          Projects
        </Typography>
      </Box>

      {/* =================================================
          HORIZONTAL MARQUEE
      ================================================= */}

      <Box
        sx={{
          width: "100%",

          overflow: "hidden",

          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",

            width: "max-content",

            gap: {
              xs: 2,
              md: 4,
            },

            animation:
              "projectHorizontalMarquee 35s linear infinite",

            /*
              IMPORTANT:
              Pause animation when cursor
              enters the project area.
            */

            "&:hover": {
              animationPlayState: "paused",
            },

            "@keyframes projectHorizontalMarquee": {
              from: {
                transform: "translateX(0)",
              },

              to: {
                transform:
                  "translateX(calc(-50% - 8px))",
              },
            },

            /* =========================================
               MOBILE
            ========================================= */

            "@media (max-width: 650px)": {
              animationDuration: "28s",
            },

            /* =========================================
               REDUCED MOTION
            ========================================= */

            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          {marqueeProjects.map((project, index) => (
            <ProjectCard
              key={`${project.number}-${index}`}
              project={project}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;