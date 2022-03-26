import { Button, Box, Stack, Typography, Hidden } from "@mui/material";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { ethers } from "ethers";

// export function BusdBalance() {
//   const { account } = useEthers();
//   const busdBalanceBigNumber = useTokenBalance(BusdAddress, account);
//   const busdBalance =
//     busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
//   return busdBalance;
// }

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
              background: "linear-gradient(270deg,#ff9dff,#00fbf5)",
              padding: "2px",
            }}
          >
            <Button
              variant="outlined"
              onClick={deactivate}
              color="warning"
              // startIcon={
              //   <Box component="img" src="/metamask.png" sx={{ width: 20 }} />
              // }
              sx={{
                background: "linear-gradient(90deg,#7f18bb,#35249b)",
                borderRadius: 0,
                color: "white",
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
            background: "linear-gradient(270deg,#ff9dff,#00fbf5)",
            padding: "2px",
          }}
        >
          <Button
            variant="outlined"
            color="warning"
            onClick={activateBrowserWallet}
            // startIcon={
            //   <Box component="img" src="/metamask.png" sx={{ width: 20 }} />
            // }
            sx={{
              background: "linear-gradient(90deg,#7f18bb,#35249b)",
              borderRadius: 0,
              color: "white",
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
