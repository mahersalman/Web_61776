

import React, { useState } from 'react';
import { Web3ModalProvider } from './config/Web3ModalProvider';
import { ThemeProvider,ThemeContext } from './components/ThemeContext';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import WalletData from './components/WalletData';
function App() {
  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false,
  });

  const handleConnect = (address, network, isConnected) => {
    setWallet({
      Address: address,
      Network: network,
      isConnected: isConnected,
    });
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={`min-h-screen ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <Web3ModalProvider>
              <NavBar handleConnect={handleConnect} />
              {wallet.isConnected ? (
                <div>
                 {<WalletData wallet={wallet} />} 
                </div>
              ) : (
                 <Banner/> 
              )}
            </Web3ModalProvider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;