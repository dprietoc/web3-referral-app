import data from '../mocks/NFTs.json';

export const getTokens = async () => {
  return data.nfts;
}