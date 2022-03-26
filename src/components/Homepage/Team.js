import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Grid } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

const SPECS = [
  {
    name: "Janek Pihu",
    role: "The Co-Founder",
    avatar: "TIGER_MASK_GOLD",
    color: "#d5631e",
  },
  {
    name: "Janek Pihu",
    role: "The Co-Founder",
    avatar: "DeerMaskDarkGreen",
    color: "#6634b3",
  },
  {
    name: "Janek Pihu",
    role: "The Co-Founder",
    avatar: "Elephant_Silver",
    color: "#361bb4",
  },
  {
    name: "Janek Pihu",
    role: "The Co-Founder",
    avatar: "RED_BUFFALO_MASK_",
    color: "#cd3b76",
  },
];

export default function Roadmap() {
  return (
    <>
      <Stack sx={{ bgcolor: "#151515", py: 10 }}>
        <Container maxWidth="xl">
          <Stack justifyContent="center" sx={{ mb: 5 }}>
            <MotionInView variants={varFadeInUp}>
              <Typography align="center" variant="h2" color="#ff7a00">
                OUR TEAM
              </Typography>
            </MotionInView>
            {/* <MotionInView variants={varFadeInUp}>
              <Typography align="center" sx={{ mt: 3 }}>
                The Billionaire club was created by a team of digital native:
                Entrepreneurs, Blockchain experts, Marketing wizards, and
                Artists… We are committed to delivering a cutting-edge
                experience and making this project a success.
              </Typography>
            </MotionInView> */}
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {SPECS.map((item, index) => (
              <Stack flex={1} key={index}>
                <Stack
                  sx={{
                    p: "10px",
                    border: `1px solid ${
                      index % 2 === 0 ? "#ff7a00" : "#2cf1f5"
                    }`,
                  }}
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      p: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={`/images/Masks/Genesis/${item.avatar}.png`}
                    />
                    <Typography
                      align="center"
                      variant="h4"
                      sx={{
                        mt: 2,
                        color: `${index % 2 === 0 ? "#ff7a00" : "#2cf1f5"}`,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography align="center" fontSize={14}>
                      {item.role}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
