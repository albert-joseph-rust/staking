import { useRef, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { Box, Stack, Typography, Container, Button, ButtonGroup, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Collapse, IconButton, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useMTWTokenContract, useSimpleStakingContract } from "hooks/useContract";
import { MTWTokenAddress, SimpleStakingAddress } from "contracts/address";

import "./style.css";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Homepage() {
  const { account } = useEthers();
  console.log(account)

  const [stakedTokens, setStakedTokens] = useState(0);
  const [unStakedTokens, setUnstakedTokens] = useState(0);
  const [days, setDays] = useState("000");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  // const [rewards, setRewards] = useState(0);
  const [approved, setApproved] = useState(false);
  const [ amount, setAmount ] = useState(0);
  const [ stakeResult, setStakeResult ] = useState([]);
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ periodType, setPeriodType ] = useState();
  const [ open, setOpen ] = useState(false);
  // const [ rewards, setRewards ] = useState(0);



  const MTWTokenContract = useMTWTokenContract();
  const SimpleStakingContract = useSimpleStakingContract();

  const handleAmount = async (event) => {
    setAmount(event.target.value)
    console.log(amount);
  }

  const handlePeriodType = async (event) => {
    setPeriodType(event.target.value);
    console.log(periodType);
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

  const handleStake = async (account, amount, periodType) => {
    console.log("StakingAmount:", amount);
    console.log("Account:", account);
    console.log("PeriodType:", periodType);
    try {
      await waiting(account, amount, periodType);
      toast.success("You staked Tokens successfully!");
      setAmount(0);
      fetchData();
      setApproved(true);
    } catch (error) {
        setOpen(true);
      console.log(error);
    }
  };
 
  const waiting = async(account, amount, periodType) => {
    await SimpleStakingContract.stake(account, amount, periodType);

  }

  const handleUnstake = async (tokenId) => {
    console.log("Unstake TokenID:", tokenId);
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
    console.log("Claim TokenID:", tokenId);
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

      // SimpleStakingContract.getStakedAmount(tokenId)
      //   .then((res) => {
      //     setStakedTokens(Number(res));
      //   })
      //   .catch((error) => {
      //     console.log("tokensStakedByowner Error: ", error);
      //     setStakedTokens();
      //   });

      SimpleStakingContract.getStakebyAddress(account)
        .then((res) => {
          console.log("getStakeByAddress: " , res);
          setStakeResult(res);
          
        })
        .catch((error) => {
          console.log("getStakebyAddress Error: ", error)
        })
      SimpleStakingContract.getCurrentTime()
      .then((res) => {
        console.log("getCurrentTime: " , res);
        setCurrentTime(res);
        
      })
      .catch((error) => {
        console.log("getCurrentTime Error: ", error)
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
      // var minutebump = Math.floor((((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? "expired" : ((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60));
      // var secondbump = Math.floor((((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? "expired" : ((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))%(1000*60));
      // setSeconds(secondbump);
      // setMinutes(minutesbump);
    } else {
      setStakedTokens();
      setUnstakedTokens();
    }
  }, [account]);
  
  // const setTimes = () =>{
    
  //   seconds = seconds -1 ;
  //   setSeconds(seconds.toString());
  //   if(seconds < 0) {
  //     setSeconds('59');
  //     setMinutes((minutes-1).toString());
  //   }
    
  //   setMinutes()
  // }

  // useEffect(() => {
      
  //     const interval = setInterval(() => {
  //       setTimes();
  //     }, 1000);

  //     return () => clearInterval(interval);
    
  // }, []);

  console.log("unStakedTokens:", unStakedTokens);
  console.log("StakedTokens:", stakedTokens);
  return (
    <Container maxWidth="lg" className="container" sx={{ pb:10 }}>
      <Stack alignItems="flex-end" sx={{ my: 3 }}>
        <Button variant="outlined" color="warning" startIcon={<AutorenewIcon />} onClick={()=>{fetchData()}}>
          Refresh
        </Button>
      </Stack>
      <Stack direction="column" spacing={5} alignItems="center">
        <Collapse in={open} sx={{ width:"65%" }}>
          <Alert severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Balance is not enough
          </Alert>
        </Collapse>
        {approved ? (
          <>
            <Stack sx={{ mt: 10, bgcolor: "black", p: 4, color: "#dfc15e", borderRadius: 2, width: "65%", margin: "auto", border: "1px solid #dfc15e", borderRadius: 2 }}>
              <Stack alignItems="center" spacing={5}>
                <Typography variant="h2" color="#dfc15e">
                  Stake MTW Tokens..
                </Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="center">
                    <TextField fullWidth id="outlined-basic" label="Put in Staking Amount" variant="outlined" onChange={handleAmount} value={amount} />
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color: "#dfc15e"}}>PeriodType</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" required onChange={handlePeriodType} >
                      <FormControlLabel value="0" control={<Radio />} label="5 Minutes" />
                      <FormControlLabel value="1" control={<Radio />} label="3 Months" />
                      <FormControlLabel value="2" control={<Radio />} label="6 Months"/>
                      <FormControlLabel value="3" control={<Radio />} label="1 Year" />
                    </RadioGroup>
                  </FormControl>
                  <Stack id="overlay" justifyContent="center" alignItems="center" sx={{ width: 1, height: 1, transition: "all 0.5s", }}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button variant="contained" className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor: "#dfc15e", color: "black" }} onClick={() => handleStake(account, Number(amount), Number(periodType))} >
                        Stake
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

          </>
        ) : (
          <Stack alignItems="center" sx={{ mt: 10, bgcolor: "black", p: 4, color: "#dfc15e", borderRadius: 2, width: "65%", margin: "auto", border: "1px solid #dfc15e" }} spacing={3}>
            <Typography variant="h3" sx={{ marginBottom:"80px" }}>Please approve to stake Tokens!</Typography>
            <Button className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" size="large" variant="contained" onClick={handleApprove} sx={{ bgcolor:"#dfc15e", color:"black" }}>
              Approve
            </Button>
          </Stack>
        )}
        {stakeResult.map((stakeresultrow, idx) => (
          <Stack flex={1} alignItems="center" sx={{ bgcolor: "black", p: 4, color: "#dfc15e", borderRadius: 2, width: "65%", margin: "auto", border: "1px solid #dfc15e" }} key={idx}>
            <Typography variant="title" color="#4b5563">
              { stakeresultrow.amount.toString() } staked metaworth
            </Typography>
          
            <Typography variant="h3" color="#4b5563">
              Earning { parseInt(stakeresultrow.amount.toString())/1000 }  MTWkey / {parseInt(stakeresultrow.periodType.toString())/60} Minutes
            </Typography>
            
            <Typography variant="h3" color="#4b5563">
            Remain Date: {(((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? "Expired" : ((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60) + "Miuntes" }
            </Typography>
            {/* <Typography variant="h3" color="#4b5563">
            {days + " : " + hours + " : " + minutes + " : " + seconds}
            </Typography> */}
            <Typography color="#4b5563">( 1 MTWkey: 1000MTW / 90 Days )</Typography>
            {(((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? (
                <ButtonGroup variant="contained" sx={{ mt: 2 }} aria-label="outlined primary button group">
                  <Button variant="contained" onClick={() => handleClaim(idx)} className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor:"#dfc15e", color: 'black' }}>
                    Claim
                  </Button>
                </ButtonGroup>
              ): null }
              {stakeresultrow.claimRewardAmount != 0 ? (
                <Button variant="contained" onClick={() => handleUnstake(idx)} className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor:"#dfc15e", color: 'black', mt: 5 }}>
                  UnStake
                </Button>
              ):null}
            
            
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
