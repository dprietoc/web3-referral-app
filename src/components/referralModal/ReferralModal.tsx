import React, { useEffect, useState } from "react";
import { Project } from "../../types";
import styles from "./ReferralModal.module.scss";

export interface ReferralModalProps {
  isOpen: boolean;
  project: Project | null;
  walletAddress: string | null;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  project,
  walletAddress,
  onClose,
}) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const referralLink = `${window.location.origin}/?referrer=${walletAddress}`;
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen || !project) {
    return null;
  }

  const onCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setLinkCopied(true);
  }

  const onCloseButton = () => {
    setLinkCopied(false);
    onClose();
  }

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContent}
        style={{
          borderColor: project.primaryColor,
          color: project.secondaryColor,
        }}
      >
        <button className={styles.closeButton} 
          style={{color: project.primaryColor}}
          onClick={onCloseButton} title="close modal">
          X
        </button>
        <header>
          <img src={project.logoUrl} alt={`${project.name} logo`} />
          <h2>{project.name}</h2>
        </header>
        <p>{project.description}</p>
        <h4>Referral Reward:</h4>
        <p>{project.referralReward}</p>
        <h4>Incentives:</h4>
        <ul>
          {project.incentives.map((incentive, index) => (
            <li key={index}>{incentive}</li>
          ))}
        </ul>
        <div className={styles.referralLink}>
          <h4>Your Referral Link:</h4>
          <input type="text" value={referralLink} readOnly />
          <button onClick={onCopy}
            style={{
              backgroundColor: project.secondaryColor,
              color: project.primaryColor,
            }}
          >
            {linkCopied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
