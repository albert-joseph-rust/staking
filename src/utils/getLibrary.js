import { Web3Provider } from '@ethersproject/providers';
import type { Web3Provider as ProviderType } from '@ethersproject/providers';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default getLibrary;