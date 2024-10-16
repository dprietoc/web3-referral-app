import { useEffect, useState } from "react";
import { getTokens } from "../../services/NFTQueryService";
import { NFT, UserMints } from "../../types";
import styles from "./NFTList.module.scss";
import { mintNFT } from "../../services/NFTMintingService";

type NFTListProps = {
  address: string | null;
  maxMintsCategory?: number;
};

const NFTList = ({ address, maxMintsCategory = 1 }: NFTListProps) => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [userMints, setUserMints] = useState<UserMints>({});

  useEffect(() => {
    getNFTs();
  }, []);

  const getNFTs = async () => {
    const tokens = await getTokens();
    setNFTs(tokens);
  };

  const checkMintAvailability = (nft: NFT) => {
    const { category, currentSupply, maxSupply } = nft;
    if (currentSupply === maxSupply) { return false; }
    if (!userMints[category]) { return true; }

    return userMints[category] < maxMintsCategory;
  };

  const onMintPressed = async (nft: NFT) => {
    const { success, error } = await mintNFT(nft);
    if (success) {
      updateUserMints(nft.category);
      alert(`${nft.name} minted by ${address}!`);
    } else {
      console.log("Mint error: ", error);
    }
  };

  const updateUserMints = (category: string) => {
    setUserMints((prevMints) => ({
      ...prevMints,
      [category]: (prevMints[category] || 0) + 1,
    }));
  };

  return (
    <>
      {nfts.length ? (
        <ul className={styles.nftListContainer}>
          {nfts.map((nft) => {
            const eligible = checkMintAvailability(nft);
            return (
              <li key={nft.id} className={styles.nftItem}>
                <h3>{`${nft.name} (${nft.category})`}</h3>
                <img
                  className={styles.nftImage}
                  src={nft.imageUrl}
                  alt={`${nft.name}`}
                />
                <div className={styles.nftDetails}>
                  {`Editions: ${nft.currentSupply}/${nft.maxSupply}`}
                </div>
                {eligible ? (
                  <button
                    className={styles.mintButton}
                    onClick={() => onMintPressed(nft)}
                    disabled={!address}
                  >
                    Mint NFT
                  </button>
                ) : (
                  <span>Limit Reached</span>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No NFTs available to mint.</p>
      )}
    </>
  );
};

export default NFTList;
