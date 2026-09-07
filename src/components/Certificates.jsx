import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

const certificates = [
  {
    
    title: "Python Programming",
    issuer: "NPTEL",
    image: "/certificates/certificate1.jpeg",
    pdf: "/certificates/certificate1.pdf",
  },
  {
    
    title: "Web Development",
    issuer: "Add Certificate Issuer",
    image: "/certificates/certificate2.jpeg",
    pdf: "/certificates/certificate2.pdf",
  },
  {
   
    title: "Machine Learning",
    issuer: "Add Certificate Issuer",
    image: "/certificates/certificate3.jpeg",
    pdf: "/certificates/certificate3.pdf",
  },
  {
   
    title: "Java Programming",
    issuer: "Add Certificate Issuer",
    image: "/certificates/certificate4.jpg",
    pdf: "/certificates/certificate4.pdf",
  },
  {
   
    title: "AI / Data Science",
    issuer: "Add Certificate Issuer",
    image: "/certificates/certificate5.jpeg",
    pdf: "/certificates/certificate5.pdf",
  },
];

function CertificateCard({ certificate }) {
  return (
    <Card
      sx={{
        flex: {
          xs: "0 0 calc(100vw - 30px)",
          sm: "0 0 calc((100vw - 40px) / 2)",
          lg: "0 0 360px",
        },

        minHeight: 450,

        border: "1px solid #D5D4CE",
        borderRadius: 0,

        background: "#FFFFFF",

        overflow: "hidden",

        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "#D4A017",
          boxShadow:
            "0 15px 30px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={certificate.image}
        alt={certificate.title}
        sx={{
          width: "100%",
          aspectRatio: "1.4 / 1",
          objectFit: "cover",

          borderBottom:
            "3px solid #D4A017",
        }}
      />

      <CardContent
        sx={{
          padding: 3,
        }}
      >
        <Typography
          sx={{
            color: "#A87900",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          {certificate.number}
        </Typography>

        <Typography
          sx={{
            marginTop: 1.5,
            fontSize: 20,
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#252525",
          }}
        >
          {certificate.title}
        </Typography>

        <Typography
          sx={{
            marginTop: 0.7,
            color: "#6B6B6B",
            fontSize: 12,
          }}
        >
          {certificate.issuer}
        </Typography>

        <Button
          href={certificate.pdf}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            marginTop: 2,
            padding: 0,

            color: "#252525",

            borderBottom:
              "2px solid #D4A017",

            borderRadius: 0,

            "&:hover": {
              color: "#A87900",
              background: "transparent",
            },
          }}
        >
          View Certificate ↗
        </Button>
      </CardContent>
    </Card>
  );
}

function Certificates() {

  /*
   * Duplicate certificates to create
   * a seamless infinite marquee.
   */
  const marqueeCertificates = [
    ...certificates,
    ...certificates,
  ];

  return (
    <Box
      id="certificates"
      sx={{
        width: "100%",
        py: {
          xs: 10,
          md: 15,
        },

        background: "#F4F3EF",

        borderTop:
          "1px solid #D5D4CE",

        overflow: "hidden",
      }}
    >
      {/* HEADING */}

      <Box
        sx={{
          width: "92%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: "#A87900",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
          }}
        >
        
        </Typography>

        <Typography
          sx={{
            marginTop: 2,

            fontSize: {
              xs: 50,
              md: 78,
            },

            lineHeight: 0.95,

            fontWeight: 800,

            letterSpacing: "-0.06em",

            color: "#252525",
          }}
        >
          Certificates
        </Typography>
      </Box>

      {/* MARQUEE */}

      <Box
        sx={{
          width: "100%",

          marginTop: 8,

          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",

            gap: "20px",

            width: "max-content",

            animation:
              "certificateMarquee 30s linear infinite",

            "&:hover": {
              animationPlayState: "paused",
            },

            "@keyframes certificateMarquee": {

              from: {
                transform: "translateX(0)",
              },

              to: {
                transform:
                  "translateX(calc(-50% - 10px))",
              },
            },

            "@media (max-width: 650px)": {

              animationDuration: "24s",
            },

            "@media (prefers-reduced-motion: reduce)": {

              animation: "none",
            },
          }}
        >

          {marqueeCertificates.map(
            (certificate, index) => (
              <CertificateCard
                key={`${certificate.number}-${index}`}
                certificate={certificate}
              />
            )
          )}

        </Box>
      </Box>
    </Box>
  );
}

export default Certificates;
