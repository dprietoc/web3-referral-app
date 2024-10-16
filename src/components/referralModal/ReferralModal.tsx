import React from "react";
import Modal from "../../system/modal/Modal";
import ReferralModalContent from "./ReferralModalContent";
import { Project } from "../../types";
import { useModalContext } from "../../contexts/ModalContext";

export interface ReferralModalProps {
  project: Project | null;
  walletAddress: string | null;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ project, walletAddress}) => {
  const { showModal, setShowModal } = useModalContext();

  if (!project || !walletAddress) {
    return null;
  }

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      borderColor={project.primaryColor}
      color={project.secondaryColor}
    >
      <ReferralModalContent
        project={project}
        walletAddress={walletAddress}
        customStyles={{
          backgroundColor: project.secondaryColor,
          color: project.primaryColor,
        }}
      />
    </Modal>
  );
};

export default ReferralModal;
