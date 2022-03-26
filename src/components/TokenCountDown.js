// material
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Hidden } from "@mui/material";
// hooks
import useCountdown from "hooks/useCountdown";

// ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   minHeight: "100%",
//   display: "flex",
//   alignItems: "center",
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

const NumberStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 140,
  height: 60,
  border: "1px solid #59f1f650",

}));

// ----------------------------------------------------------------------

export default function TokenCountDown() {
  const countdown = useCountdown(new Date(2022, 0, 20, 23));

  return (
    <Container>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Stack direction="row" justifyContent="center" spacing={3}>
          <NumberStyle>
            <Typography fontSize={24}>{countdown.days} DAYS </Typography>
          </NumberStyle>
          <NumberStyle>
            <Typography fontSize={24}>{countdown.hours} HRS </Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography fontSize={24}>{countdown.minutes} MINS </Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography fontSize={24}>{countdown.seconds} SECS</Typography>
          </NumberStyle>
        </Stack>
      </Box>
    </Container>
  );
}
