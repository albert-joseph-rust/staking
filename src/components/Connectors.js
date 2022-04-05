import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const injected = new InjectedConnector({
  supportedChainIds: [56, 97]
});

// export const walletconnector = new WalletConnectConnector({
//   rpcUrl: `https://bsc-dataseed1.ninicoin.io`,
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true
// });
const walletconnect = new WalletConnectConnector({
  // rpc: { 56: "https://bsc-dataseed1.ninicoin.io" },
  rpc: {
    56: "https://bsc-dataseed.binance.org",
   },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
})

export const connectors = {
  injected: injected,
  walletConnect: walletconnect
};

