import { Stack, Box, Typography, Container, IconButton } from "@mui/material";
// import { Icon } from "@iconify/react";
// import discordIcon from "@iconify/icons-cib/discord";
// import twitterIcon from "@iconify/icons-cib/twitter";
// import linkedin from "@iconify/icons-cib/linkedin";
// import instagram from "@iconify/icons-cib/instagram";
export default function MainFooter() {
  return (
    <Stack
      textAlign="center"
      sx={{
        pb: 2,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={3}>
            {/* <IconButton
              sx={{
                bgcolor: "white",
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.1)", bgcolor: "white" },
              }}
              target="_blank"
              href="https://www.facebook.com/gaming/DestinyWarNFTGame"
            >
            </IconButton> */}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 1 }}
        >
          {/* <Typography>Terms of Service</Typography> */}
          <Typography>Terms of Service</Typography>
        </Stack>
        <Stack alignItems="center">
          {/* <Typography>0x5df340b5d1618c543ac81837da1c2d2b17b3b5d8</Typography> */}
          <Typography>
            © 2022 MTW Tokens. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
