import { useState, useEffect, useRef } from "react";
// material
import {
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

export default function About() {
  return (
    <>
      <Stack sx={{ background: "url(/images/about1.png)" }}>
        <Container maxWidth="lg" sx={{ py: 20 }}>
          <Stack alignItems="center">
            <Typography variant="title" fontSize={60}>
              HEROFI
            </Typography>
            <Typography
              color="#2cf1f5"
              fontSize={24}
              sx={{ letterSpacing: 4, mt: 1 }}
            >
              THE KING OF MULTIVERSE
            </Typography>

            <Box sx={{ p: 5, border: "1px solid #2cf1f5", mt: 4 }}>
              <Typography align="center">
                To join the Multiverse, players need to have at least one hero
                from HeroFi and use NFT Space Travel Essence. <br /> HeroFi is a
                mobile aRPG game in which players can earn tokens through
                PvP/PvE battles between Heroes.
                <br /> Each Hero is unique and equally accessible to anyone.
                There is no initial investment barrier in HeroFi.
              </Typography>
            </Box>

            <Grid container sx={{ mt: 4 }} spacing={3}>
              <Grid item md={3}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "#171717",
                      height: 180,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography fontSize={20} align="center">
                      Balance between Gameplay & Finance
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={3}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "#171717",
                      height: 180,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography fontSize={20} align="center">
                      Free to play
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={3}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "#171717",
                      height: 180,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography fontSize={20} align="center">
                      Easy to earn
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={3}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "#171717",
                      height: 180,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography fontSize={20} align="center">
                      Burn mechanism of ROFI – No inflation
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Stack>
      <Stack
        sx={{
          background: "url(/images/about4.png)",
          backgroundAttachment: "fixed",
          position: "relative",
          backgroundSize: '100% 120%'
        }}
      >
        {/* <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            bgcolor: "black",
            opacity: 0.77,
          }}
        /> */}
        <Container maxWidth="lg" sx={{ py: 20, zIndex: 1 }}>
          <Stack alignItems="center">
            <Grid container direction="row-reverse" spacing={10}>
              <Grid item md={5}>
                <Typography color="#ff7a00" fontSize={45} fontWeight="bold">
                  GAMEPLAY
                </Typography>
                <Typography fontSize={20} sx={{ pr: 5 }}>
                  HeroFi revolves around the epic hero era of fierce battles.
                  Challenge yourself with a wide variety of game modes:
                  Campaign, PvP, Tower, coming with monthly updates and real
                  money rewards.
                </Typography>
                <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                  <Stack
                    sx={{
                      px: 5,
                      py: 2,
                      bgcolor: "#171717",
                      fontWeight: "bold",
                      border: "3px solid rgba(255, 255,255, 0.1)",
                      cursor: "pointer",
                    }}
                  >
                    READ MORE
                  </Stack>
                  <Stack
                    sx={{
                      px: 5,
                      py: 2,
                      bgcolor: "#171717",
                      fontWeight: "bold",
                      border: "3px solid rgba(255, 255,255, 0.1)",
                      cursor: "pointer",
                    }}
                  >
                    GAME PLOT
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={7}>
                <video
                  width="100%"
                  height="100%"
                  loop
                  muted="muted"
                  autoPlay="true"
                >
                  <source src="/images/intro.mp4" type="video/mp4" />
                </video>
              </Grid>
            </Grid>

            <Grid container sx={{ mt: 4 }} spacing={3}>
              <Grid item md={4}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="flex-start"
                    sx={{
                      bgcolor: "#171717",
                      py: 3,
                      px: 3,
                      height: 318,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    spacing={1}
                  >
                    <Box
                      component="img"
                      src="/images/campain.png"
                      sx={{ width: 120, height: 120 }}
                    />
                    <Typography color="#ff7a00" fontSize={20} fontWeight="bold">
                      CAMPAIGN MODE
                    </Typography>
                    <Typography fontSize={18} align="center">
                      Battle hell armies to earn items and materials to upgrade
                      your team.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item md={4}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="flex-start"
                    sx={{
                      bgcolor: "#171717",
                      py: 3,
                      px: 3,
                      height: 318,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    spacing={1}
                  >
                    <Box
                      component="img"
                      src="/images/pvp.png"
                      sx={{ width: 120, height: 120 }}
                    />
                    <Typography color="#ff7a00" fontSize={20} fontWeight="bold">
                      PVP MODE
                    </Typography>
                    <Typography fontSize={18} align="center">
                      Become the One Above All through intense PvP arena
                      battles! Join open tournaments for real prize money!
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item md={4}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="flex-start"
                    sx={{
                      bgcolor: "#171717",
                      py: 3,
                      px: 3,
                      height: 318,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    spacing={1}
                  >
                    <Box
                      component="img"
                      src="/images/tower.png"
                      sx={{ width: 120, height: 120 }}
                    />
                    <Typography color="#ff7a00" fontSize={20} fontWeight="bold">
                      TOWER MODE
                    </Typography>
                    <Typography fontSize={18} align="center">
                      Climb the tower and collect Rofi tokens hidden in each
                      floor.
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
