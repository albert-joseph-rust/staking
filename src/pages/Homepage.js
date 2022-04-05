import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { useEthers } from "@usedapp/core";
import { Box, Stack, Typography, Container, Button, ButtonGroup, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Collapse, IconButton, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useMTWTokenContract, useSimpleStakingContract } from "hooks/useContract";
import { MTWTokenAddress, SimpleStakingAddress } from "contracts/address";
import bgContent from "../assets/img/sec2-bg.jpg";
import bgTitle from "../assets/img/sec-title-bg.jpg";
import bgBoby from "../assets/img/sec-content-bg.jpg";
import { useWeb3React } from "@web3-react/core";
import "./style.css";

import { ethers } from "ethers";
import { toast } from "react-toastify";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Homepage() {
  // const { account } = useEthers();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();
  console.log(account);

  const [stakedTokens, setStakedTokens] = useState(0);
  const [unStakedTokens, setUnstakedTokens] = useState(0);
  const [days, setDays] = useState("000");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  // const [rewards, setRewards] = useState(0);
  const [approved, setApproved] = useState(false);
  const [ amount, setAmount ] = useState(0);
  const [ withdrawamount, setWithdrawamount] = useState(0);
  const [ stakeResult, setStakeResult ] = useState([]);
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ periodType, setPeriodType ] = useState();
  const [ open, setOpen ] = useState(false);
  const [ withdrawopen, setWithdrawOpen ] = useState(false);
  // const [ rewards, setRewards ] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const MTWTokenContract = useMTWTokenContract();
  const SimpleStakingContract = useSimpleStakingContract();

  const handleAmount = async (event) => {
    setAmount(event.target.value)
    console.log(amount);
  }

  const handlewithdrawAmount = async (event) => {
    setWithdrawamount(event.target.value)
    console.log(withdrawamount);
  }

  const handlePeriodType = async (event) => {
    setPeriodType(event.target.value);
    console.log(periodType);
  }

  const handleApprove = async () => {
    console.log("MTWTokenContract=>", MTWTokenContract)
    try {      

      await MTWTokenContract.approve(SimpleStakingAddress, ethers.constants.MaxUint256);
      toast.success("Approved successfully!");
      fetchData();
      setApproved(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdraw = async (account, withdrawamount) => {
    let bigAmount = (parseFloat(withdrawamount) * Math.pow(10,18)).toString();
    console.log("WithDraw Amount:",bigAmount);
    console.log("Account address:", account);
    try {
      await SimpleStakingContract.withdraw(account, bigAmount);
      toast.success("Withdraw successfully!");
      setWithdrawamount(0);
    } catch (error) {
      setWithdrawOpen(true);
      console.log(error);
    }
  };

  const handleStake = async (account, amount, periodType) => {
    console.log("StakingAmount:", amount);
    console.log("Account:", account);
    console.log("PeriodType:", periodType);
    try {
      await await SimpleStakingContract.stake(account, amount, periodType);
      toast.success("You staked Tokens successfully!");
      setAmount(0);
      fetchData();
      setApproved(true);
    } catch (error) {
        setOpen(true);
      console.log(error);
    }
  };

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
    } else {
      setStakedTokens();
      setUnstakedTokens();
    }
  }, [account]);
  console.log("unStakedTokens:", unStakedTokens);
  console.log("StakedTokens:", stakedTokens);
  return (
    <Box>
    {/* <Container maxWidth="lg" className="container" sx={{ pb:10 }} > */}
      {/* <Box style={{ backgroundImage: `url(${bgTitle})`, backgroundSize: "100% 100%", backgroundPosition: "top" }}> */}
      

      <Box position="relative">
        <Box component="img" src={bgTitle} alt="" style={{ width: "100%", height: "300px" }}/>
        <Box position="absolute" width="100%" top={30}>
          <Stack alignItems="center">
              <Typography variant="title" color="#dfc15e" sx={{ fontSize: { sm: 36, md: 48, lg: 56, xl: 68 }, fontFamily: "'Contrail One', sans-serif" }}>
                Metaworth Staking
              </Typography>
          </Stack>
          <Stack alignItems="center" sx={{ mt: 3 }}>
            <Button variant="outlined" color="warning" startIcon={<AutorenewIcon />} onClick={()=>{fetchData()}}>
              Refresh
            </Button>
          </Stack>
        </Box>
      </Box>
      
      
      
      <Stack direction="column" spacing={5} alignItems="center" style={{ backgroundImage: `url(${bgBoby})`, backgroundSize: "100%"}}>
        <Collapse in={open} sx={{ width:"85%" }}>
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
            <Stack sx={{ mt: 10, bgcolor: "rgba(0,0,0,0.8)", p: 4, color: "#dfc15e", borderRadius: 2, width: "85%", margin: "auto", border: "1px solid #dfc15e", borderRadius: 2 }}>
              <Stack alignItems="center" spacing={5}>
                <Typography variant="h2" color="#dfc15e">
                  Stake MTW Tokens..
                </Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="center">
                    <TextField fullWidth id="outlined-basic" label="Put in Staking Amount" variant="outlined" onChange={handleAmount} value={amount} />
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{color: "#dfc15e"}}>PeriodType</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" required onChange={handlePeriodType} >
                      {/* <FormControlLabel value="0" control={<Radio />} label="5 Minutes" /> */}
                      <FormControlLabel value="1" control={<Radio />} label="3 Months" />
                      <FormControlLabel value="2" control={<Radio />} label="6 Months"/>
                      <FormControlLabel value="3" control={<Radio />} label="1 Year" />
                    </RadioGroup>
                  </FormControl>
                  <Stack id="overlay" justifyContent="center" alignItems="center" sx={{ width: 1, height: 1, transition: "all 0.5s", }}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button variant="contained" className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor: "#dfc15e", color: "#574713", fontFamily: "'Roboto', sans-serif", borderRadius: 10 }} onClick={() => handleStake(account, Number(amount), Number(periodType))} >
                        STAKE
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

          </>
        ) : (
          <Stack alignItems="center" sx={{ mt: 10, bgcolor: "rgba(0,0,0,0.8)", p: 4, color: "#dfc15e", borderRadius: 2, width: "85%", margin: "auto", border: "1px solid #dfc15e" }} spacing={3}>
            <Typography variant="h3" sx={{ marginBottom:"80px" }}>Please approve to stake Tokens!</Typography>
            <Button className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" size="large" variant="contained" onClick={handleApprove} sx={{ bgcolor:"#dfc15e", color:"#574713", fontFamily: "'Roboto', sans-serif", borderRadius: 10 }}>
              APPROVE
            </Button>
          </Stack>
        )}
        <Slider {...settings}>
          {stakeResult && stakeResult.map((stakeresultrow, idx) => (
            <Stack flex={1} alignItems="center" sx={{ bgcolor: "rgba(0,0,0,0.8)", p: 4, color: "#dfc15e", borderRadius: 2, width: "85%", margin: "auto", border: "1px solid #dfc15e" }} key={idx}>
              <Typography variant="title" color="#4b5563">
                { stakeresultrow.amount.toString() } staked metaworth
              </Typography>
            
              <Typography variant="h3" color="#4b5563">
                Earning { parseInt(stakeresultrow.amount.toString())/1000 }  MTWkey / {parseInt(stakeresultrow.periodType.toString())/(60*60*24)} Days
              </Typography>
              
              <Typography variant="h3" color="#4b5563">
              Remain Date: {Math.ceil((((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? "Expired" : ((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60*60*24)) + "Days" }
              </Typography>
              <Typography color="#4b5563">( 1 MTWkey: 1000MTW / 90 Days )</Typography>
              {(((parseInt(stakeresultrow.periodType.toString())*1000) - (currentTime - (stakeresultrow.claimTime.length==0 ? parseInt(stakeresultrow.beginTime.toString()):parseInt(stakeresultrow.claimTime[stakeresultrow.claimTime.length-1]?.toString()))))/(1000*60)) < 0 ? (
                  <ButtonGroup variant="contained" sx={{ mt: 2 }} aria-label="outlined primary button group">
                    <Button variant="contained" onClick={() => handleClaim(idx)} className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor:"#dfc15e", color:"#574713", fontFamily: "'Roboto', sans-serif", borderRadius: 10 }}>
                      CLAIM
                    </Button>
                  </ButtonGroup>
                ): null }
                {stakeresultrow.claimRewardAmount != 0 ? (
                  <Button variant="contained" onClick={() => handleUnstake(idx)} className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor:"#dfc15e", color:"#574713", fontFamily: "'Roboto', sans-serif", borderRadius: 10, mt: 5 }}>
                    UNSTAKE
                  </Button>
                ):null}    
            </Stack>
          ))}
        </Slider>
        <Stack flex={1} alignItems="center" sx={{ bgcolor: "rgba(0,0,0,0.8)", p: 4, color: "#dfc15e", borderRadius: 2, width: "85%", border: "1px solid #dfc15e"}}>
          <Typography variant="h3" color="#4b5563">
            MetaKey : A Key to Metaverse
          </Typography>
          <Typography variant="h3" color="#4b5563">
            Stake MTW : Earn MetaKey
          </Typography>
          <Typography variant="h3" color="#4b5563">
            One MetaKey : One Land
          </Typography>
          <Typography variant="h3" color="#4b5563">
            One Land : 1000 MTW
          </Typography>
        </Stack>
        <Collapse in={withdrawopen} sx={{ width:"85%" }}>
          <Alert severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setWithdrawOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Withdraw error!
          </Alert>
        </Collapse>
        {account == "0xb295663B39Bd5a4cE1F6E64D5096d46E95c7d83C" ? (
            <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ width:"85%" }}>
                <TextField fullWidth id="outlined-basic" label="Put in Withdraw Amount" variant="outlined" onChange={handlewithdrawAmount} value={withdrawamount} />
              <Stack id="overlay" justifyContent="center" alignItems="center" sx={{ width: 1, height: 1, transition: "all 0.5s", }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button variant="contained" className="css-1ew3bh9-MuiButtonBase-root-MuiButton-root" sx={{ bgcolor: "#dfc15e", color:"#574713", fontFamily: "'Roboto', sans-serif", borderRadius: 10, margin: "20px" }} onClick={() => handleWithdraw(account, withdrawamount)} >
                    Withdraw
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
              ):null}
      </Stack>
    {/* </Container> */}
  </Box>
  );
}
