import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const ModalButton = styled.button`
  border : none;
  background-color: white;
  font-size : 16px;
  cursor : pointer;
`

const ModalBtn = () => {
  // 모달 상태 관리
  const [showModal, setShowModal] = useState(false);
  

  const openModal = () => {
    setShowModal(true);
  };


  return (
    <>
      <ModalButton onClick={openModal}>🔗</ModalButton>
      <Modal showModal={showModal}/>
    </>
  );
};

export default ModalBtn;
