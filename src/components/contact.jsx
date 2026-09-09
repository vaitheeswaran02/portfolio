import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Lottie } from "lottie-react";
import contactAnimation from "../assets/Support.json";

const socialButtonSx = {
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
    boxShadow: "0 8px 20px rgba(212,160,23,0.25)",
  },
};

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        background: "#252525",
        color: "#FFFFFF",
        py: {
          xs: 10,
          md: 15,
        },
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
          }}
        >
          Let's Connect
        </Typography>

        <Box
          sx={{
            mt: 8,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: {
              xs: 6,
              md: 8,
            },
            alignItems: "center",
          }}
        >
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
              Feel free to connect with me through any of the platforms below.
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
            >
              <IconButton
                component="a"
                href="https://github.com/vaitheeswaran02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={socialButtonSx}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/vaitheeswaran02/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={socialButtonSx}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/9791023326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={socialButtonSx}
              >
                <WhatsAppIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              width: "100%",
              minHeight: {
                xs: 300,
                sm: 370,
                md: 480,
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 300,
                  sm: 350,
                  md: 450,
                },
                height: {
                  xs: 300,
                  sm: 400,
                  md: 500,
                },
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Lottie
                src={contactAnimation}
                loop
                autoplay
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
