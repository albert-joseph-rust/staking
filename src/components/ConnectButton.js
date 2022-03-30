import { Button, Box, Stack, Typography, Hidden } from "@mui/material";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { ethers } from "ethers";

export default function ConnectButton({ sx }) {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const balance = useEtherBalance(account);
  const bnbBalance = balance && ethers.utils.formatEther(balance);
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
              onClick={deactivate}
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
            onClick={activateBrowserWallet}
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
