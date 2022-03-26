import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Grid } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

const SPECS = [
  {
    title: "Innovation",
    description:
      "With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases.",
  },
  {
    title: "Innovation",
    description:
      "With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases.",
  },
  {
    title: "Innovation",
    description:
      "With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases.",
  },
  {
    title: "Innovation",
    description:
      "With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases.",
  },
  {
    title: "Innovation",
    description:
      "With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases.",
  },
];

export default function Roadmap() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack justifyContent="center" sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography align="center" variant="h3">
              THE SPECS
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography align="center" sx={{ mt: 3 }}>
              Our goal is to make sure your investment is highly profitable. To
              do so, we will set up <br /> several strategies (reducing supply,
              staking, marketing & community push <br /> simultaneously) in
              order to increase the floor price.
            </Typography>
          </MotionInView>
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {SPECS.map((item, index) => (
            <Stack
              flex={1}
              key={index}
              sx={{ border: "1px solid rgba(255, 255, 255, 0.3)", p: 3 }}
            >
              <Typography align="center" variant="h4">
                {item.title}
              </Typography>
              <Typography align="center" fontSize={14} sx={{ mt: 2 }}>
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </>
  );
}
