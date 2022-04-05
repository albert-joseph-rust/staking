
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { NetworkConnector } from './NetworkConnector';


// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const POLLING_INTERVAL = 8000
const RPC = isMainnet
  ? {
      [56]: 'https://bsc-dataseed1.ninicoin.io',
    }
  : {
      [97]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    };

export const network = new NetworkConnector({
  defaultChainId: 56,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        56, // BSC main network
      ]
    : [
        97, // BSC testnet
      ],
});

export const walletconnect = new WalletConnectConnector({
  // rpc: { 56 : RPC },
  rpc: {
    56: "https://bsc-dataseed.binance.org",
   },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

// export const walletconnect = new WalletConnectConnector({
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
//   infuraId: process.env.REACT_APP_INFURA_ID,
//   rpc: { 1: RPC },
//   chainId: 1,
//   supportedChainIds: [1],
// })


