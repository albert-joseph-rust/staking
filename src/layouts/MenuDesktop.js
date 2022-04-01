import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import {
  Stack,
  Container,
  Typography,
  Link,
  Paper,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/styles";
import ConnectButton from "components/ConnectButton";
// import Whitepaper from "./whitepaper.pdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "components/Logo";
// import { Icon } from "@iconify/react";
// import discordIcon from "@iconify/icons-cib/discord";
// import twitter from "@iconify/icons-cib/twitter";
// import linkedin from "@iconify/icons-cib/linkedin";
// import instagram from "@iconify/icons-cib/instagram";
// ----------------------------------------------------------------------

const LinkStyle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 900,
  letterSpacing: 2,
  fontSize: 20,
  padding: 8,
  border: "3px solid transparent",
  color: "white",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": { color: "yellow", borderBottom: "3px solid yellow" },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      sx={{ width: "100%", position: "relative", borderBottom: "2px solid #dfc15e", padding:"10px"}}
    >
      <Stack direction="row" spacing={4}>
        <Logo />
      </Stack>
      {/* <Stack>
          <Typography variant="h1" color="#dfc15e" sx={{ fontFamily: "'Zen Dots', cursive" }}>
            METAWORTH STAKING
          </Typography>
      </Stack> */}
      <ConnectButton />
    </Stack>
  );
}
