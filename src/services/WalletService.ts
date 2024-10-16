export enum EthereumMethod {
  CONNECT = "eth_requestAccounts",
  GET_WALLET = "eth_accounts",
}

export const WALLET_STATUS = {
  CONNECTED: 'Connected',
  NO_ETHEREUM_BROWSER: 'No Ethereum browser detected, install MetaMask',
  CONNECTION_ERROR: 'Connection error',
  CONNECT_WALLET: 'Connect to your wallet for minting NFTs',
};

export interface ConnectWalletResponse {
  status: string;
  address: string | null;
  error?: string;
}

export const requestWallet = async (method: EthereumMethod): Promise<ConnectWalletResponse> => {
  if (!window.ethereum) {
    return {
      address: null,
      status: WALLET_STATUS.NO_ETHEREUM_BROWSER,
    };
  }

  try {
    const addressArray = await window.ethereum.request({method});
    if (!addressArray.length) {
      return {
        address: null,
        status: WALLET_STATUS.CONNECT_WALLET,
      }
    } else {
      return {
        address: addressArray[0],
        status: WALLET_STATUS.CONNECTED,
      };
    }
  } catch (error) {
    return {
      address: null,
      status: WALLET_STATUS.CONNECTION_ERROR,
      error: error instanceof Error ? error.message : '',
    };
  }
};

export const addWalletListener = async (onChange: (response: ConnectWalletResponse) => void) => {
  if (!window.ethereum) {
    onChange({
      address: null,
      status: WALLET_STATUS.NO_ETHEREUM_BROWSER,
    });
  }

  try {
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      if (accounts.length) {
        onChange({
          address: accounts[0],
          status: WALLET_STATUS.CONNECTED,
        }); 
      } else {
        onChange({
          address: null,
          status: WALLET_STATUS.CONNECT_WALLET,
        });
      }
    });
  } catch (error) {
    onChange({
      address: null,
      status: WALLET_STATUS.CONNECTION_ERROR,
      error: error instanceof Error ? error.message : '',
    });
  }
};