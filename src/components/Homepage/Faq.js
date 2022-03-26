// material
import { useState } from "react";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { varFadeInUp, MotionInView } from "components/animate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import MintButton from "components/MintButton";
// ----------------------------------------------------------------------

const FAQS = [
  {
    title: "WHERE CAN I VIEW MY NFTS?",
    description:
      "Once minted, simply connect to your OpenSea account to view your NFTs.",
  },
  {
    title: "WHERE CAN I VIEW MY NFTS?",
    description:
      "Once minted, simply connect to your OpenSea account to view your NFTs.",
  },
  {
    title: "WHERE CAN I VIEW MY NFTS?",
    description:
      "Once minted, simply connect to your OpenSea account to view your NFTs.",
  },
  {
    title: "WHERE CAN I VIEW MY NFTS?",
    description:
      "Once minted, simply connect to your OpenSea account to view your NFTs.",
  },
  {
    title: "WHERE CAN I VIEW MY NFTS?",
    description:
      "Once minted, simply connect to your OpenSea account to view your NFTs.",
  },
];
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "15px",
  background: "transparent",
  backdropFilter: "blur(80px)",
  border: `1px solid rgba(255, 255, 255, 0.4)`,
  transition: "all 0.5s",
  "&:hover": { border: "1px solid #ff7a00" },
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "2rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "12px",
  height: 85,
  paddingLeft: "55px",
  paddingRight: "30px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  margin: "0px 55px",
  padding: "28px 0px",
  borderTop: "1px solid rgba(255, 255, 255, 0.25)",
}));
// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3" textAlign="center" sx={{ mb: 10 }}>
          FREEQUENTLY ASKED QUESTIONS
        </Typography>
      </MotionInView>
      <Box>
        {/* <Accordion
          expanded={expanded === `panel0`}
          onChange={handleChange(`panel0`)}
        >
          <AccordionSummary>
            <Typography fontFamily="Amarante" fontSize={20}>
              Q. Can I deduct the Mint of an Ent NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16} color="black">
              <Typography component="span">Ans: </Typography>
              Yes, you'll be able to deduct the donation itself but not
              transaction fees. To receive tax documentation from a donation (of
              any size!) please fill out{" "}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkvTTDsD6TpqIdnxvps5a7Dm94cz9fXBnNTKEdZGoNiHO0jA/viewform"
                target="_blank"
                fontSize={16}
              >
                this form.
              </Link>
              . We also will release event details for 2022 events at the start
              of the new year. Stay tuned!
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        {FAQS.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary>
              <Typography fontSize={20}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={18} color="#CCC">
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* <Accordion
          expanded={expanded === `panel4`}
          onChange={handleChange(`panel4`)}
        >
          <AccordionSummary>
            <Typography fontFamily="Amarante" fontSize={20}>
              Q. How else can I participate in the charity without minting?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              <Typography component="span">Ans: </Typography>
              You can purchase Ent NFT merch from the{" "}
              <Link
                href="https://entnft.bigcartel.com/"
                target="_blank"
                fontSize={16}
                color="#00f0ff"
              >
                {" "}
                Official Merch Store
              </Link>
              . We also will release event details for 2022 events at the start
              of the new year. Stay tuned!
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Container>
  );
}
