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

export default function Tokenomics() {
  return (
    <>
      <Stack sx={{ background: "url(/images/about1.png)" }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Stack alignItems="center">
            <video width="150px" loop muted="muted" autoPlay="true">
              <source src="idle.webm" type="video/mp4" />
            </video>
            <Typography variant="title" fontSize={60} color="#2cf1f5">
              TOKENOMICS
            </Typography>
            <Typography fontSize={18} sx={{ letterSpacing: 1, mt: 1 }}>
              $ROFI Token is a currency based on blockchain that players can
              earn and become an investor
            </Typography>

            <Grid container sx={{ mt: 4 }} spacing={3}>
              <Grid item md={6}>
                <Stack sx={{ p: "10px", border: "1px solid #ff7a00" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "transparent",
                      height: 220,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography
                      fontSize={60}
                      fontWeight={700}
                      align="center"
                      color="#ff7a00"
                    >
                      100,000,000
                    </Typography>
                    <Typography fontSize={20} align="center">
                      TOTAL SUPPLY HEROEGG TOKENS
                    </Typography>
                    <Typography fontWeight="bold" fontSize={40} align="center">
                      TO HATCH EGGS
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={6}>
                <Stack sx={{ p: "10px", border: "1px solid #2cf1f5" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      bgcolor: "transparent",
                      height: 220,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography
                      fontSize={60}
                      fontWeight={700}
                      align="center"
                      color="#2cf1f5"
                    >
                      288,000
                    </Typography>
                    <Typography fontWeight="bold" fontSize={40} align="center">
                      $FEM/DAY
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
