import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

const skills = [
  {
    number: "01",
    title: "MERN Stack Development",
    description: "Responsive and modern web applications.",
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
    description: "Hardware-connected systems, automation and monitoring.",
  },
  {
    number: "04",
    title: "Java Development",
    description: "Object-oriented programming and software development.",
  },
  {
    number: "05",
    title: "Version Control",
    description: "Using Git and GitHub for collaborative development.",
  },
  {
    number: "06",
    title: "App Development",
    description:
      "Mobile and application development using modern technologies.",
  },
];

const verticalMarquee = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
`;

const marqueeSkills = [...skills, ...skills];

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
            I am a final-year Computer Science and Engineering student
            passionate about building practical and innovative technology
            solutions.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#6B6B6B",
              fontSize: 15,
            }}
          >
            My interests include web development, artificial intelligence,
            machine learning and IoT. I enjoy developing responsive
            applications and solving real-world problems through technology.
          </Typography>

          <Button
            variant="text"
            href="#contact"
            sx={{
              mt: 3,
              px: 0,
              color: "#A87900",
              borderBottom: "2px solid #D4A017",
              borderRadius: 0,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#D4A017",
              },
            }}
          >
            Let's Work Together ↗
          </Button>
        </Box>

        {/* VERTICAL SKILLS MARQUEE */}
        <Box
          sx={{
            mt: {
              xs: 0,
              md: -17,
            },
            height: {
              xs: "auto",
              md: 480,
            },
            overflow: {
              xs: "visible",
              md: "hidden",
            },
          }}
        >
          <Box
            sx={{
              animation: {
                xs: "none",
                md: `${verticalMarquee} 18s linear infinite`,
              },
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {marqueeSkills.map((skill, index) => (
              <Box
                key={`${skill.number}-${index}`}
                sx={{
                  py: 3,
                  borderTop: "1px solid #D5D4CE",
                  display: {
                    xs: index >= skills.length ? "none" : "grid",
                    md: "grid",
                  },
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
                  <Typography fontWeight={700}>{skill.title}</Typography>

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
    </Box>
  );
}

export default About;
