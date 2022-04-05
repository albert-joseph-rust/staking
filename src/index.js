// scroll bar
import "simplebar/src/simplebar.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Providers
import { SearchProvider } from "./contexts/SearchContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Provider as ReduxProvider } from "react-redux";
import { Mainnet, DAppProvider } from '@usedapp/core'

import { store } from "redux/store";
import { BrowserRouter } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ToastContainer } from "react-toastify";

import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { ChakraProvider } from "@chakra-ui/react";
import { ethers } from "ethers";
import getLibrary from "./utils/getLibrary";
import Web3ReactManager from 'components/Web3ReactManager';
import { NetworkContextName } from './constants';

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

ReactDOM.render(
  <StrictMode>
    {/* <DAppProvider config={config}> */}
      <SearchProvider>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <BrowserRouter>
              <ChakraProvider>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <Web3ProviderNetwork getLibrary={getLibrary}>
                      <Web3ReactManager>
                        <App />
                      </Web3ReactManager>
                    </Web3ProviderNetwork>
                </Web3ReactProvider>
              </ChakraProvider>
              <ToastContainer />
            </BrowserRouter>
          </LocalizationProvider>
        </ReduxProvider>
      </SearchProvider>
    {/* </DAppProvider> */}
  </StrictMode>,
  document.getElementById("root")
);
