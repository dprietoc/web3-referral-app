import WalletButton from './components/WalletButton/WalletButton';
import NFTList from './components/NFTList/NFTList';
import { useWeb3Context, Web3Provider } from './contexts/Web3Context';
import './App.css'

const App = () => (
  <Web3Provider>
    <MainApp />
  </Web3Provider>
);

const MainApp = () => {
  const { address } = useWeb3Context();
  return (
    <>
      <WalletButton />
      <NFTList address={address} />
    </>
  )
}

export default App
