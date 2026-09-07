import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//import Lottie from "lottie-react";
//import contactAnimation from "../assets/animation.json";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        background: "#252525",
        color: "white",
        py: { xs: 10, md: 15 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "92%",
          maxWidth: "1180px",
          mx: "auto",
        }}
      >
        {/* ================= HEADING ================= */}

        <Typography
          sx={{
            color: "#D4A017",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
          }}
        />

        <Typography
          component="h2"
          sx={{
            mt: 2,
            fontSize: {
              xs: 50,
              md: 78,
            },
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.06em",
            color: "#FFFFFF",
          }}
        >
          Let's Connect
        </Typography>

        {/* ================= CONTENT ================= */}

        <Box
          sx={{
            mt: 8,

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: 5,
              md: 8,
            },

            alignItems: "center",
          }}
        >
          {/* ================= LEFT SIDE ================= */}

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  md: 22,
                },

                lineHeight: 1.45,

                maxWidth: 500,

                mb: 5,

                color: "#FFFFFF",
              }}
            >
              Feel free to connect with me through
              any of the platforms below.
            </Typography>

            {/* ================= SOCIAL ICONS ================= */}

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
            >
              {/* ================= GITHUB ================= */}

              <IconButton
                component="a"
                href="https://github.com/vaitheeswaran02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  width: 90,
                  height: 42,

                  color: "#FFFFFF",

                  border: "1px solid #555555",

                  borderRadius: "30px",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#FFFFFF",

                    backgroundColor: "#D4A017",

                    borderColor: "#D4A017",

                    transform: "translateY(-5px)",

                    boxShadow:
                      "0 8px 20px rgba(212,160,23,0.25)",
                  },
                }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>

              {/* ================= LINKEDIN ================= */}

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/vaitheeswaran02/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  width: 90,
                  height: 42,

                  color: "#FFFFFF",

                  border: "1px solid #555555",

                  borderRadius: "30px",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#FFFFFF",

                    backgroundColor: "#D4A017",

                    borderColor: "#D4A017",

                    transform: "translateY(-5px)",

                    boxShadow:
                      "0 8px 20px rgba(212,160,23,0.25)",
                  },
                }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>

              {/* ================= WHATSAPP ================= */}

              <IconButton
                component="a"
                href="https://wa.me/9791023326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  width: 90,
                  height: 42,

                  color: "#FFFFFF",

                  border: "1px solid #555555",

                  borderRadius: "30px",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "#FFFFFF",

                    backgroundColor: "#D4A017",

                    borderColor: "#D4A017",

                    transform: "translateY(-5px)",

                    boxShadow:
                      "0 8px 20px rgba(212,160,23,0.25)",
                  },
                }}
              >
                <WhatsAppIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Box>

          {/* ================= RIGHT SIDE - LOTTIE ================= */}

        </Box>
      </Box>
    </Box>
  );
}

export default Contact;