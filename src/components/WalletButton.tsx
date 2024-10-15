import Fuul from "fuul-sdk";
import { Project } from "fuul-sdk/dist/types";
import { useState } from "react";
import { connectWallet } from "../services/WalletService";

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
    <div style={{ marginTop: '20px', textAlign: 'right' }}>
      <button onClick={connectMyWallet} style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {address ? `Connected: ${address}` : 'Connect Wallet'}
      </button>
      {project && <pre>{JSON.stringify(project)}</pre>}
    </div>
  );
};

export default WalletButton;
