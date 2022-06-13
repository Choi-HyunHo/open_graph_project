import styled from "styled-components";
import { useState } from "react";


const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 38vw;
    padding: 16px;
    background: #262626;
    text-align: center;
    color : white;
`;

const ModalPosition = styled.div`
  disflex : flex;
  justfi-content : space-between;
`

const CloseBtn = styled.button`
  border : none;
  background-color: white;
  font-size : 16px;
  cursor : pointer;
`

const Modal = ({showModal}) => {

  const [closeModal, setCloseModal] = useState(true);

  const noOpenModal = () =>{
    setCloseModal(false)
  }


  return (
    <>
    {showModal ? 
        <ModalContainer>
          <ModalPosition>URL 링크 첨부</ModalPosition>
          <CloseBtn onClick={noOpenModal} value={closeModal}>x</CloseBtn>
        </ModalContainer>
      : null}
    </>
  )
};

export default Modal;
