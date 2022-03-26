import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Grid } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

const ROADMAPS = [
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
  {
    title: "METAVERSE DEVELOPMENT",
    description:
      "Expanding our presence in the metaverse and creating a Billionaire Club currency to shape the future of our community. All NFTs acquired will be used safely.",
  },
];

export default function Roadmap() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack justifyContent="center" sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography align="center" variant="h3">
              OUR ROADMAP
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

        <Stack>
          {ROADMAPS.map((item, index) => (
            <Grid
              key={index}
              container
              alignItems="center"
              sx={{ borderTop: "1px solid white", py: 4 }}
            >
              <Grid item md={5} xs={12}>
                <Typography
                  variant="h4"
                  color={index % 2 === 0 ? "yellow" : "white"}
                >
                  {item.title}
                </Typography>
              </Grid>
              <Grid item md={7} xs={12}>
                <Typography>{item.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </>
  );
}
