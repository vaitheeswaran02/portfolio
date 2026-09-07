import { Box, Typography, Button } from "@mui/material";

const skills = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive and modern web applications.",
  },
  {
    number: "02",
    title: "AI / Machine Learning",
    description:
      "Practical machine learning projects and intelligent solutions.",
  },
  {
    number: "03",
    title: "IoT Development",
    description:
      "Hardware-connected systems, automation and monitoring.",
  },
  {
    number: "04",
    title: "App Development",
    description:
      "Mobile and application development using modern technologies.",
  },
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        borderTop: "1px solid #D5D4CE",
        width: "92%",
        maxWidth: "1180px",
        mx: "auto",
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: 45,
            md: 72,
          },
          fontWeight: 800,
          letterSpacing: "-0.06em",
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: { xs: 6, md: 10 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 22,
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            I am a final-year Computer Science and
            Engineering student passionate about
            building practical and innovative
            technology solutions.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#6B6B6B",
              fontSize: 15,
            }}
          >
            My interests include web development,
            artificial intelligence, machine learning
            and IoT. I enjoy developing responsive
            applications and solving real-world
            problems through technology.
          </Typography>

          <Button
            variant="text"
            sx={{
              mt: 3,
              px: 0,
              borderBottom: "2px solid #D4A017",
              borderRadius: 0,
            }}
            href="#contact"
          >
            Let's Work Together ↗
          </Button>
        </Box>

        <Box>
          {skills.map((skill) => (
            <Box
              key={skill.number}
              sx={{
                py: 3,
                borderTop: "1px solid #D5D4CE",
                display: "grid",
                gridTemplateColumns: "50px 1fr",
              }}
            >
              <Typography
                sx={{
                  color: "#A87900",
                  fontWeight: 700,
                  fontSize: 11,
                }}
              >
                {skill.number}
              </Typography>

              <Box>
                <Typography fontWeight={700}>
                  {skill.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6B6B6B",
                    fontSize: 13,
                    mt: 0.5,
                  }}
                >
                  {skill.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
