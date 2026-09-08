import { Box, Typography } from "@mui/material";

function Footer() {
  
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: "28px 4%",
        background: "#1A1A1A",
        color: "#AAAAAA",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        fontSize: "11px",

        "@media (max-width: 600px)": {
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        },
      }}
    >
      
      <Typography
        sx={{
          color: "#D4A017",
          fontWeight: 800,
          fontSize: "18px",
        }}
      >
        Vaithesh
      </Typography>

      <Typography fontSize="11px">
        © 2026 Vaitheeswaran. All rights reserved.
      </Typography>

      <Typography
        component="a"
        href="#home"
        sx={{
          color: "#AAAAAA",
          textDecoration: "none",
          fontSize: "11px",

          "&:hover": {
            color: "#D4A017",
          },
        }}
      >
        Back to Top ↑
        
      </Typography>
    </Box>
  );
}

export default Footer;
