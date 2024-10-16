import React, { useState } from "react";
import { Project } from "../../types";
import styles from "./ReferralModalContent.module.scss";

interface ReferralModalContentProps {
  project: Project;
  walletAddress: string;
  customStyles?: {
    color: string;
    backgroundColor: string;
  };
}

const ReferralModalContent: React.FC<ReferralModalContentProps> = ({
  project,
  walletAddress,
  customStyles,
}) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const referralLink = `${window.location.origin}/?referrer=${walletAddress}`;

  const onCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setLinkCopied(true);
  };

  return (
    <div className={styles.referralModalContent}>
      <header>
        <img src={project.logoUrl} alt={`${project.name} logo`} />
        <h2>{project.name}</h2>
      </header>
      <p>{project.description}</p>
      <h4>Referral Reward:</h4>
      <p
        className={styles.referralReward}
        style={{ color: customStyles?.color }}
      >
        {project.referralReward}
      </p>
      <h4>Incentives:</h4>
      <ul>
        {project.incentives.map((incentive, index) => (
          <li key={index}>{incentive}</li>
        ))}
      </ul>
      <div className={styles.referralLink}>
        <h4>Your Referral Link:</h4>
        <input
          type="text"
          style={{ backgroundColor: customStyles?.color }}
          value={referralLink}
          readOnly
        />
        <button onClick={onCopy} style={customStyles}>
          {linkCopied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default ReferralModalContent;
