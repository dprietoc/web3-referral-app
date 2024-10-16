import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface ModalContextProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  showModal: false,
  setShowModal: () => {},
});

export default function ModalProvider ({ children } : PropsWithChildren) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
