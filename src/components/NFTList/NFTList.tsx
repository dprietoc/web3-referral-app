import { useEffect, useState } from "react";
import { NFT } from "../../types";
import { getTokens } from "../../services/NFTQueryService";
import styles from "./NFTList.module.scss";

type NFTListProps = {
  address: string | null;
};

const NFTList = ({ address }: NFTListProps) => {
  const [nfts, setNFTs] = useState<NFT[]>([]);

  useEffect(() => {
    getNFTs();
  }, []);

  const getNFTs = async () => {
    const tokens = await getTokens();
    setNFTs(tokens);
  };

  const onMintPressed = async (nft: NFT) => {
    alert(`${nft.name} minted by ${address}!`);
  };

  return (
    <>
      {nfts.length ? (
        <ul className={styles.nftListContainer}>
          {nfts.map((nft) => (
            <li key={nft.id} className={styles.nftItem}>
              <h3> {nft.name} ({nft.category}) </h3>
              <img className={styles.nftImage}
                src={nft.imageUrl}
                alt={`${nft.name}`}
              />
              <span className={styles.nftDetails}>
                {`Editions: ${nft.currentSupply}/${nft.maxSupply}`}
              </span>
              <button className={styles.mintButton} onClick={() => onMintPressed(nft)}>
                Mint NFT
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No NFTs available to mint.</p>
      )}
    </>
  );
};

export default NFTList;
