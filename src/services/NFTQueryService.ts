import { NFT } from "../types";

export const getTokens = async (): Promise<NFT[]> => {
  try {
    const response = await fetch('https://mockapi.dprietoc.workers.dev/api/tokens');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.nfts) {
      throw new Error('No NFTs found');
    }

    return data.nfts;
  } catch(error) {
    console.log('Failed to fetch tokens: ', error);
    return [];
  }
}