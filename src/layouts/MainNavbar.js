import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  Hidden,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/Logo";
import ConnectButton from "components/ConnectButton";
// import { Icon } from "@iconify/react";
// import twitterFill from "@iconify/icons-cib/twitter";
// import discordFill from "@iconify/icons-cib/discord";
// import Whitepaper from "./whitepaper.pdf";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 84;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  // height: APP_BAR_MOBILE,
  margin: 0,
  background: "transparent",
  [theme.breakpoints.up("md")]: {
    // height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <AppBar
      position="static"
      sx={{ background: '#151513', boxShadow: "none", padding:"0px" }}
    >
      <ToolbarStyle disableGutters sx={{ padding: "0px" }}>
        <Container sx={{ display: "flex", alignItems: "center", minWidth:"100%", padding: "0px"}}>
          <Hidden mdDown>
            <MenuDesktop />
          </Hidden>
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
