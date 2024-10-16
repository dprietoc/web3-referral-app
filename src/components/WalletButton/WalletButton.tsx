import Fuul from "fuul-sdk";
import styles from './WalletButton.module.scss';
import { useWeb3Context } from "../../contexts/Web3Context";
import { connectWallet } from "../../services/WalletService";

const apiKey = import.meta.env.VITE_PROJECT_API_KEY;

const WalletButton: React.FC = () => {
  const { address, setAddress, setProject} = useWeb3Context();

  const connectMyWallet = async () => {
    const {address} = await connectWallet();
    if (address) {
      setAddress(address);
      getProject();
    }
  };

  const getProject = async () => {
    const project = await Fuul.init(apiKey);
    if (project) {
      setProject(project);
      console.log(project);
    }
  };

  return (
    <div className={styles.walletContainer}>
      <button onClick={connectMyWallet}>
        {address ? `🟢 Connected: ${address}` : ' 🔌  Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletButton;
