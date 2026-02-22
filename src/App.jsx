import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { RequestAirdrop } from './components/RequestAirdrop';
import { ShowBalance } from './components/ShowBalance';
import { SendTokens } from './components/SendTokens';
import { SignMessage } from './components/SignMessage';

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>

          <div className="main-container">

            <div className="card">

              <h1 className="title">
                Solana Devnet Airdrop
              </h1>

              <p className="subtitle">
                Connect your wallet and request SOL instantly
              </p>

              <WalletMultiButton className="wallet-btn"/>


              <RequestAirdrop />
              <ShowBalance />
              <SendTokens />
              <SignMessage />

            </div>

          </div>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App