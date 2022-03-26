import { useRef, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { Box, Stack, Typography, Container, Button, ButtonGroup, TextField } from "@mui/material";

import { useMTWTokenContract, useSimpleStakingContract } from "hooks/useContract";
import { MTWTokenAddress, SimpleStakingAddress } from "contracts/address";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Homepage() {
  const { account } = useEthers();
  console.log(account)

  const [stakedTokens, setStakedTokens] = useState(0);
  const [unStakedTokens, setUnstakedTokens] = useState(0);
  // const [rewards, setRewards] = useState(0);
  const [approved, setApproved] = useState(false);
  const [ amount, setAmount ] = useState(0);
  const [ stakeResult, setStakeResult ] = useState([]);
  // const [ rewards, setRewards ] = useState(0);

  const MTWTokenContract = useMTWTokenContract();
  const SimpleStakingContract = useSimpleStakingContract();

  const tokenId = 0;

  const handleAmount = async (event) => {
    setAmount(event.target.value)
    console.log(amount);
  }

  const handleApprove = async () => {
    console.log("MTWTokenContract=>", MTWTokenContract)
    console.log("SimpleStakingAddress=>", SimpleStakingAddress)
    try {
      await MTWTokenContract.approve(SimpleStakingAddress, ethers.constants.MaxUint256);
      toast.success("Approved successfully!");
      fetchData();
      setApproved(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleStake = async (account, amount) => {
    console.log("StakingAmount:", amount);
    console.log("Account:", account);
    try {
      await SimpleStakingContract.stake(account, amount);
      toast.success("You staked Tokens successfully!");
      setAmount(0);
      fetchData();
      setApproved(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnstake = async (tokenId) => {
    try {
      await SimpleStakingContract.unstaking(tokenId);
      // await tx.wait();
      toast.success("You unstaked Tokens successfully!");
      // fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClaim = async (tokenId) => {
    try {
      await SimpleStakingContract.claim(tokenId);
      toast.success("You unstaked Tokens successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async () => {
    console.log("fetchdata account", account)
    try {
      
      MTWTokenContract.balanceOf(account)
        .then((res) => {
          setUnstakedTokens(Number(res));
        })
        .catch((error) => {
          console.log("balanceofOwner Error: ", error);
          setUnstakedTokens();
        });

      SimpleStakingContract.getStakedAmount(tokenId)
        .then((res) => {
          setStakedTokens(Number(res));
        })
        .catch((error) => {
          console.log("tokensStakedByowner Error: ", error);
          setStakedTokens();
        });

      SimpleStakingContract.getStakebyAddress(account)
        .then((res) => {
          console.log("getStakeByAddress: " , res);
          setStakeResult(res);
        })
        .catch((error) => {
          console.log("getStakebyAddress Error: ", error)
        })

      setApproved(approved);
      // setApproved(true);
    } catch (error) {
      console.log("error:", error);
      setApproved(false);
    }
  };

  useEffect(() => {
    if (account) {
      console.log('kjkjljlkjkljjkjkjlkjlkjklj')
      fetchData();
    } else {
      setStakedTokens();
      setUnstakedTokens();
    }
  }, [account]);
  
  console.log("unStakedTokens:", unStakedTokens);
  console.log("StakedTokens:", stakedTokens);
  return (
    <Container maxWidth="lg">
      {/* <Stack direction="row" spacing={5} sx={{ mt: 5 }}> */}
      <Stack flex={1} alignItems="center" sx={{ bgcolor: "#d1d5db", p: 4, borderRadius: 2 }}>
          <Typography variant="title" color="#4b5563" fontSize={28}>
            Staking liquidity rewards
          </Typography>
          <Typography variant="h4" color="#4b5563" align="center">
            Step 1: Approve the contract to enable staking.
          </Typography>
          <Typography variant="h4" color="#4b5563">
            Step 2: Once complete, stake your tokens.
          </Typography>
          <Typography variant="h4" color="#4b5563">
            Step 3: Claim rewards every 90 days!
          </Typography>
        </Stack>
        <Stack alignItems="flex-end" sx={{ mt: 10 }}>
        <Button variant="outlined" color="warning" startIcon={<AutorenewIcon />} onClick={()=>{fetchData()}}>
          Refresh
        </Button>
      </Stack>

      {approved ? (
        <>
          <Stack sx={{ mt: 2, bgcolor: "#d1d5db", p: 4, borderRadius: 2 }}>
            <Stack alignItems="center" spacing={5}>
              <Typography variant="h2" color="#4b5563">
                Stake MTW Tokens..
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="center">
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                  <TextField id="outlined-basic" label="Put in Staking Amount" variant="outlined" onChange={handleAmount} value={amount} />
                </Box>
                <Stack id="overlay" justifyContent="center" alignItems="center" sx={{ width: 1, height: 1, transition: "all 0.5s", }}>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button variant="contained" onClick={() => handleStake(account, Number(amount))} >
                      Stake
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

        </>
      ) : (
        <Stack alignItems="center" sx={{ mt: 10 }} spacing={3}>
          <Typography variant="h3">Please approve to stake Tokens!</Typography>
          <Button size="large" variant="contained" onClick={handleApprove} sx={{ width: 160, height: 60 }}>
            Approve
          </Button>
        </Stack>
      )}
      {stakeResult.map((stakeresultrow, idx) => (
        <Stack flex={1} alignItems="center" sx={{ bgcolor: "#d1d5db", p: 4, borderRadius: 2, mt:5 }} key={idx}>
          <Typography variant="title" color="#4b5563">
            { stakeresultrow.amount.toString() } staked metaworth
          </Typography>
         
          <Typography variant="h3" color="#4b5563">
            Earning { parseInt(stakeresultrow.amount.toString())/1000 }  MTWkey / 90 days
          </Typography>
          <Typography color="#4b5563">( 1 MTWkey: 1000MTW / 90 Days )</Typography>
          <ButtonGroup variant="contained" sx={{ mt: 2 }} aria-label="outlined primary button group">
            <Button variant="contained" onClick={() => handleUnstake(idx)} >
              UnStake
            </Button>
            <Button variant="contained" onClick={() => handleClaim(idx)} >
              Claim
            </Button>
          </ButtonGroup>
        </Stack>
      ))}
        
      {/* </Stack> */}
      
    </Container>
  );
}
