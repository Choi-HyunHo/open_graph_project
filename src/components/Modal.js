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
  color: white;
`;

const ModalPosition = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: #262626;
  font-size: 16px;
  cursor: pointer;
`;

const UrlInputContainer = styled.div`
  margin: 100px 0;
`;

const UrlInputStyle = styled.input`
  background: none;
  width: 35vw;
  height: 40px;
  color: white;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  &::placeholder {
    font-size: 15px;
    color: c8c8c8;
  }
`;

const SubmitBtnStyle = styled.button`
  margin-top: 100px;
  width: 35vw;
  height: 5vh;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Modal = ({ showModal, closeModal }) => {
  const [url, setUrl] = useState("");

  return (
    <>
      {showModal === true ? (
        <ModalContainer>
          <ModalPosition>
            <h4>URL 링크 첨부</h4>
            <CloseBtn onClick={closeModal}>❌</CloseBtn>
          </ModalPosition>
          <UrlInputContainer>
            <UrlInputStyle
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="http://"
              required
            />
            <SubmitBtnStyle>확인</SubmitBtnStyle>
          </UrlInputContainer>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
