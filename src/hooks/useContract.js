import { useMemo } from "react";
import ERC20Abi from "contracts/abi/ERC20Abi.json";
import PirateAbi from "contracts/abi/PirateAbi.json";
import StakeAbi from "contracts/abi/StakeAbi.json";

import MTWkeyTokenAbi from "contracts/abi/MTWkeyTokenAbi.json";
import MTWTokenAbi from "contracts/abi/MTWTokenAbi.json";
import SimpleStakingAbi from "contracts/abi/SimpleStakingAbi.json";

import { getContract } from "utils";
import { useEthers } from "@usedapp/core";
import useActiveWeb3React from "./useActiveWeb3React";
import { PirateAddress, StakeAddress } from "contracts/address";

import { MTWkeyTokenAddress, MTWTokenAddress, SimpleStakingAddress } from "contracts/address";

// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();
  // const { library, account } = useEthers();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useTokenContract(tokenAddress, withSignerIfPossible = true) {
  return useContract(tokenAddress, ERC20Abi, withSignerIfPossible);
}

export function usePirateContract(withSignerIfPossible = true) {
  return useContract(PirateAddress, PirateAbi, withSignerIfPossible);
}

export function useStakeContract(withSignerIfPossible = true) {
  return useContract(StakeAddress, StakeAbi, withSignerIfPossible);
}

export function useMTWTokenContract(withSignerIfPossible = true) {
  return useContract(MTWTokenAddress, MTWTokenAbi, withSignerIfPossible);
}



export function useSimpleStakingContract(withSignerIfPossible = true) {
  return useContract(SimpleStakingAddress, SimpleStakingAbi, withSignerIfPossible);
}

export function useMTWkeyTokenContract(withSignerIfPossible = true) {
  return useContract(MTWkeyTokenAddress, MTWkeyTokenAbi, withSignerIfPossible);
}