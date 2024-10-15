import { useState } from "react";
import { connectWallet } from "../services/WalletService";

const WalletButton: React.FC = () => {
  const [address, setAddress] = useState<string>('');

  const connectMyWallet = async () => {
    const {address} = await connectWallet();
    if (address) {
      setAddress(address);
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
