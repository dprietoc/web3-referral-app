export type {Project} from 'fuul-sdk/dist/types';

export interface NFT {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  maxSupply: number;
  currentSupply: number;
}