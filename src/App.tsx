import { useWeb3Context, Web3Provider } from "./contexts/Web3Context";
import ModalProvider, { useModalContext } from "./contexts/ModalContext";
import WalletButton from "./components/walletButton/WalletButton";
import NFTList from "./components/NFTList/NFTList";
import ReferralModal from "./components/referralModal/ReferralModal";
import "./App.css";

const App = () => (
  <Web3Provider>
    <ModalProvider>
      <MainApp />
    </ModalProvider>
  </Web3Provider>
);

const MainApp = () => {
  const { showModal, setShowModal } = useModalContext();
  const { address, project } = useWeb3Context();

  return (
    <>
      <h1>Web3 Referral App</h1>
      <WalletButton />
      <NFTList address={address} maxMintsCategory={2} />
      <ReferralModal
        walletAddress={address}
        project={project}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default App;
