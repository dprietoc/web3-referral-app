const WALLET_STATUS = {
  CONNECTED: 'Connected',
  NO_ETHEREUM_BROWSER: 'No Ethereum browser detected, install MetaMask',
  CONNECTION_ERROR: 'Connection error',
};

interface ConnectWalletResponse {
  status: string;
  address: string | null;
  error?: string;
}

export const connectWallet = async (): Promise<ConnectWalletResponse> => {
  if (!window.ethereum) {
    return {
      address: null,
      status: WALLET_STATUS.NO_ETHEREUM_BROWSER,
    };
  }

  try {
    const addressArray = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return {
      status: WALLET_STATUS.CONNECTED,
      address: addressArray[0],
    };
  } catch (error) {
    return {
      address: null,
      status: WALLET_STATUS.CONNECTION_ERROR,
      error: error instanceof Error ? error.message : '',
    };
  }
};
