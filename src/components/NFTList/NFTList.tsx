import { useEffect, useState } from "react";
import { useModalContext } from "../../contexts/ModalContext";
import { getTokens } from "../../services/NFTQueryService";
import { mintNFT } from "../../services/NFTMintingService";
import { NFT, UserMints } from "../../types";
import styles from "./NFTList.module.scss";
import Card from "../../system/card/Card";

type NFTListProps = {
  address: string | null;
  maxMintsCategory?: number;
};

const NFTList = ({ address, maxMintsCategory = 1 }: NFTListProps) => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [userMints, setUserMints] = useState<UserMints>({});
  const { setShowModal } = useModalContext();

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
      setShowModal(true);
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
              <Card key={nft.id} 
                imageSrc={nft.imageUrl}
                title={nft.name}
                category={nft.category}
                editions={`${nft.currentSupply}/${nft.maxSupply}`}
                buttonText={eligible ? "Mint NFT" : "Limit Reached"}
                onButtonClick={() => onMintPressed(nft)}
                disabled={!address || !eligible}
              />
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
