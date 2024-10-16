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
      <h1>Web3 Referral App</h1>
      <WalletButton />
      <NFTList address={address} maxMintsCategory={2}/>
    </>
  )
}

export default App
