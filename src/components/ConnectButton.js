import {useState, useEffect} from 'react';
import { Button, Box, Stack, Typography, Hidden } from "@mui/material";
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal';
import { ethers } from "ethers";

export default function ConnectButton({ sx }) {
  const { account, activate, deactivate } = useEthers()
  // const ens = useLookupAddress()
  const [showModal, setShowModal] = useState(false)
  const [activateError, setActivateError] = useState('')
  const { error } = useEthers()
  useEffect(() => {
    if (error) {
      setActivateError(error.message)
    }
  }, [error])

  const activateProvider = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: 'Metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: 'https://bridge.walletconnect.org',
          infuraId: '14a0951f47e646c1b241aa533e150219',
        },
      },
    }

    const web3Modal = new Web3Modal({
      providerOptions,
    })
    try {
      const provider = await web3Modal.connect()
      await activate(provider)
      setActivateError('')
    } catch (error) {
      setActivateError(error.message)
    }
  }

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
              onClick={() => deactivate()}
              color="warning"
              sx={{
                // background: "linear-gradient(90deg,#7f18bb,#35249b)",
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
            // onClick={activateBrowserWallet}
            onClick={activateProvider}
            sx={{
              // background: "linear-gradient(90deg,#7f18bb,#35249b)",
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

    </>
  );
}
