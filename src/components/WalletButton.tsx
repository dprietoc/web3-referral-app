import Fuul from "fuul-sdk";
import { useState } from "react";
import { connectWallet } from "../services/WalletService";

const WalletButton: React.FC = () => {
  const [address, setAddress] = useState<string>('');

  const connectMyWallet = async () => {
    const {address} = await connectWallet();
    if (address) {
      setAddress(address);
      getProject();
    }
  };

  const getProject = async () => {
    const project = await Fuul.init('123-456-789');
    if (project) {
      console.log(project);
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'right' }}>
      <button onClick={connectMyWallet} style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {address ? `Connected: ${address}` : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default WalletButton;
