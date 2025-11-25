import React from 'react';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { base } from 'wagmi/chains';
import { Web3Modal } from '@web3modal/react';
import { publicProvider } from 'wagmi/providers/public';
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork, useSendTransaction, usePrepareSendTransaction } from 'wagmi';
import { ethers } from 'ethers';
import './App.css';

const chains = [base];
const { publicClient } = configureChains(chains, [publicProvider()]);
const config = createConfig({ autoConnect: true, publicClient });

function WalletSection() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  return (
    <div>
      {isConnected ? (
        <>
          <div>Connecté : {address}</div>
          <div>Réseau : {chain?.name} ({chain?.id})</div>
          {chain?.id !== base.id && switchNetwork && (
            <button onClick={() => switchNetwork(base.id)}>Basculer vers Base</button>
          )}
          <button onClick={() => disconnect()}>Déconnecter</button>
        </>
      ) : (
        <>
          {connectors.map((connector) => (
            <button key={connector.id} onClick={() => connect({ connector })}>
              Connecter {connector.name}
              {isLoading && pendingConnector?.id === connector.id && ' (connexion...)'}
            </button>
          ))}
          {error && <div>{error.message}</div>}
        </>
      )}
    </div>
  );
}

function TxSection() {
  const { address, isConnected } = useAccount();
  const [to, setTo] = React.useState('');
  const [value, setValue] = React.useState('0.00001');
  const { config: txConfig } = usePrepareSendTransaction({
    to: to || address,
    value: value ? ethers.utils.parseEther(value) : undefined,
    chainId: base.id,
  });
  const { sendTransaction, isLoading, isSuccess, data } = useSendTransaction(txConfig);

  return (
    <div>
      <input placeholder="Destinataire" value={to} onChange={e => setTo(e.target.value)} />
      <input placeholder="Montant (ETH)" value={value} onChange={e => setValue(e.target.value)} />
      <button disabled={!isConnected || !sendTransaction} onClick={() => sendTransaction?.()}>Envoyer tx</button>
      {isLoading && <div>Envoi en cours...</div>}
      {isSuccess && <div>Tx envoyée : <a href={`https://basescan.org/tx/${data?.hash}`} target="_blank" rel="noopener noreferrer">{data?.hash}</a></div>}
    </div>
  );
}

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="card">
        <h1>Base — Empreinte DeFi faible coût</h1>
        <WalletSection />
        <hr />
        <TxSection />
        <Web3Modal projectId="YOUR_PROJECT_ID" ethereumClient={config} />
      </div>
    </WagmiConfig>
  );
}

export default App;
