import React, { createContext, useContext, useState } from 'react';
import QuickViewModal from '../components/QuickViewModal';
import InquireModal from '../components/InquireModal';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'quickView' or 'contactForm'
    data: null,
  });

  const openModal = (type, data = null) => {
    setModalState({
      isOpen: true,
      type,
      data,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null,
    });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <QuickViewModal
        isOpen={modalState.isOpen && modalState.type === 'quickView'}
        onClose={closeModal}
        product={modalState.data?.product}
        language={modalState.data?.language}
      />
      <InquireModal
        isOpen={modalState.isOpen && modalState.type === 'contactForm'}
        onClose={closeModal}
        product={modalState.data?.product}
        language={modalState.data?.language}
      />
    </ModalContext.Provider>
  );
};


