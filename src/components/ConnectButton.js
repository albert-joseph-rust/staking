import React, {useState, useEffect} from 'react';
import { Button, Box, Stack, Typography, Hidden } from "@mui/material";
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal';
import { ethers } from "ethers";

import { useDisclosure } from "@chakra-ui/react";
import SelectWalletModal from "./Modal";
import { connectors } from "./Connectors";
import { useWeb3React } from "@web3-react/core";

export default function ConnectButton({ sx }) {
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const disconnect = () => {
    localStorage.removeItem("provider");
    refreshState();
    deactivate();
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    // localStorage.removeItem("provider");
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  
  return (
    <>
      {account ? (
        <>
          <Stack
            sx={{
              padding: "2px",
            }}
          >
            <Button
              className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root"
              variant="outlined"
              onClick={disconnect}
              color="warning"
              sx={{
                bgcolor: "#dfc15e",
                borderRadius: 3,
                color: "black",
                px: 2,
                py: 1,
                ...sx,
              }}
            >
              {`${account.slice(0, 5)}...${account.slice(-5)}`}
            </Button>
          </Stack>
        </>
      ) : (
        <Stack
          sx={{
            padding: "2px",
          }}
        >
          <Button
            className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root"
            variant="outlined"
            color="warning"
            onClick={onOpen}
            sx={{
              bgcolor: "#dfc15e",
              borderRadius: 3,
              color: "black",
              px: 2,
              py: 1,
              ...sx,
            }}
          >
            Connect Wallet
          </Button>
        </Stack>
      )}
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  );
}
