import ModalProvider from "../../contexts/ModalContext";
import { useWeb3Context, Web3Provider } from "../../contexts/Web3Context";
import NFTList from "../NFTList/NFTList";
import ReferralModal from "../referralModal/ReferralModal";
import WalletButton from "../walletButton/WalletButton";
import "./App.scss";

const App = () => (
  <Web3Provider>
    <ModalProvider>
      <MainApp />
    </ModalProvider>
  </Web3Provider>
);

const MainApp = () => {
  const { address, project } = useWeb3Context();

  return (
    <>
      <header>
        <h1>Web3 Referral App ✨</h1>
        <WalletButton />
      </header>
      <NFTList address={address} maxMintsCategory={2} />
      <ReferralModal walletAddress={address} project={project}
      />
    </>
  );
};

export default App;
