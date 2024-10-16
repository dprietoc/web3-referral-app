import { useEffect } from "react";
import { useWeb3Context } from "../../contexts/Web3Context";
import Fuul from "fuul-sdk";
import Button from "../../system/button/Button";
import { addWalletListener, ConnectWalletResponse, EthereumMethod, requestWallet } from "../../services/WalletService";
import styles from './WalletButton.module.scss';

const apiKey = import.meta.env.VITE_PROJECT_API_KEY;

const WalletButton: React.FC = () => {
  const { address, walletStatus, setAddress, setProject, setWalletStatus} = useWeb3Context();

  useEffect(() => {
    checkWalletStatus();
    addWalletListener(handleAccountChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccountChanged = ({address, status}: ConnectWalletResponse) => {
    setAddress(address);
    setWalletStatus(status);
  }

  const checkWalletStatus = async () => {
    const {address, status} = await requestWallet(EthereumMethod.GET_WALLET);
    setAddress(address);
    setWalletStatus(status);
  };

  const connectMyWallet = async () => {
    const {address, status} = await requestWallet(EthereumMethod.CONNECT);
    if (address) {
      setAddress(address);
      getProject();
    }
    setWalletStatus(status);
  };

  const getProject = async () => {
    const project = await Fuul.init(apiKey);
    console.log('SDK Project: ', project);
    if (project) {
      setProject(project);
    }
  };

  return (
    <div className={styles.walletContainer}>
      {!address && <p>{walletStatus}</p>}
      <Button onClick={connectMyWallet}>
        {address ? `🟢 Connected: ${address}` : '🦊 Connect Wallet'}
      </Button>
    </div>
  );
};

export default WalletButton;
