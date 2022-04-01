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
        width: "100%",
        py: 2,
        borderTop: "2px solid #dfc15e",
        background: '#151513'
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={3}>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Typography>Terms of Service</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography>
            © 2022 MTW Tokens. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
