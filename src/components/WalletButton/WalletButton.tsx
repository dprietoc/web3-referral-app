import Fuul from "fuul-sdk";
import { Project } from "fuul-sdk/dist/types";
import { useState } from "react";
import { connectWallet } from "../../services/WalletService";
import styles from './WalletButton.module.scss';

const apiKey = import.meta.env.VITE_PROJECT_API_KEY;

const WalletButton: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [project, setProject] = useState<Project | null>(null);

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
    }
  };

  return (
    <div className={styles.walletContainer}>
      <button onClick={connectMyWallet}>
        {address ? `Connected: ${address}` : 'Connect Wallet'}
      </button>
      {project && <pre>{JSON.stringify(project)}</pre>}
    </div>
  );
};

export default WalletButton;
