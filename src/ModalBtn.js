import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const ModalButton = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;

const ModalBtn = () => {
  // 모달 상태 관리
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalButton onClick={openModal}>🔗</ModalButton>
      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default ModalBtn;
