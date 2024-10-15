import WalletButton from './components/WalletButton/WalletButton';
import { Web3Provider } from './contexts/Web3Context';
import './App.css'

const App = () => (
  <Web3Provider>
    <MainApp />
  </Web3Provider>
);

const MainApp = () => {
  return (
    <>
      <WalletButton />
    </>
  )
}

export default App
