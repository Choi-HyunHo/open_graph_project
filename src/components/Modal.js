import styled from "styled-components";

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
  display : flex;
  justify-content: space-between;
`

const CloseBtn = styled.button`
  border : none;
  background-color: #262626;
  font-size : 16px;
  cursor : pointer;
`

const Modal = ({showModal, closeModal}) => {

  return (
    <>
    {showModal === true ? 
        <ModalContainer>
          <ModalPosition>
            <h4>URL 링크 첨부</h4>
            <CloseBtn onClick={closeModal}>❌</CloseBtn>
          </ModalPosition>
        </ModalContainer>
      : null}
    </>
  )
};

export default Modal;
