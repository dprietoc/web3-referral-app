import { ethers } from "ethers";
import { NFT } from "../types";

interface MintNFTResponse {
  signature?: string;
  success: boolean;
  error?: string;
}

export const mintNFT = async (nft: NFT): Promise<MintNFTResponse> => {
  try {
    if (!window.ethereum) {
      throw new Error("Ethereum wallet is not available");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const message = `Mint NFT >> ${nft.id}@${nft.name} signature`;
    const signature = await signer.signMessage(message); 

    return {
      signature,
      success: true
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error while minting NFT',
    }
  }
};
