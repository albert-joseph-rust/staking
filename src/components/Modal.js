import {useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useWeb3React } from "@web3-react/core";
import { connectors } from "./Connectors";
import metamask from "../assets/img/metamask.png";
import walletconnect from "../assets/img/walletconnect.png";

export default function SelectWalletModal({ isOpen, closeModal }) {
  const { activate } = useWeb3React();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Button
            variant="outline"
            onClick={() => {
              activate(connectors.walletConnect);
              setProvider("walletConnect");
              closeModal();
            }}
            sx={{ width: "100%" }}
          >
            <Box component="img" src={walletconnect} alt="" style={{ width: "10%", height: "10%", borderRadius: "3px", marginRight: "10px" }} />
            <Typography id="transition-modal-description" sx={{ color: "#dfc15e" }}>
              Wallet Connect
                </Typography>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              activate(connectors.injected);
              setProvider("injected");
              closeModal();
            }}
            sx={{ width: "100%" }}
          >
            <Box component="img" src={metamask} alt="" style={{ width: "10%", height: "10%", borderRadius: "3px", marginRight: "10px" }} />
            <Typography id="transition-modal-description" sx={{ color: "#dfc15e" }}>
              Meta Mask
                </Typography>
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
