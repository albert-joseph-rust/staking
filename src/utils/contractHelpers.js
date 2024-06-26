import { ethers } from "ethers";
import DwarCharacterAbi from "contracts/DwarCharacterAbi.json";
import DwarTokenAbi from "contracts/DwarTokenAbi.json";
import ERC20Abi from "contracts/ERC20Abi.json";
import {
  DwarCharacterAddress,
  DwarTokenAddress,
  BusdAddress
} from "contracts/address.js";
import getRpcUrl from "utils/getRpcUrl";

// const RPC_URL = getRpcUrl()
// const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getDwarCharacterContract = (signer) => {
  return getContract(DwarCharacterAbi, DwarCharacterAddress, signer);
};

export const getDwarTokenContract = (signer) => {
  return getContract(DwarTokenAbi, DwarTokenAddress, signer);
};

export const getERC20Contract = (signer) => {
  return getContract(ERC20Abi, BusdAddress, signer);
};
