import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
import { NFT, Project } from '../types';

export type UserMints = Record<string, number>;

interface Web3ContextType {
  address: string | null;
  nfts: NFT[];
  project: Project | null;
  walletStatus: string | null;
  setAddress: (address: string | null) => void;
  setNFTs: (nfts: NFT[]) => void;
  setProject: (project: Project) => void;
  setWalletStatus: (status: string) => void;
}

const Web3Context = createContext<Web3ContextType>({
  address: null,
  nfts: [],
  project: null,
  walletStatus: null,
  setAddress: () => {},
  setNFTs: () => {},
  setProject: () => {},
  setWalletStatus: () => {},
});

export const Web3Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [walletStatus, setWalletStatus] = useState<string | null>(null);

  return (
    <Web3Context.Provider value={{ address, setAddress, nfts, setNFTs, project, setProject, walletStatus, setWalletStatus}}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => useContext(Web3Context);
