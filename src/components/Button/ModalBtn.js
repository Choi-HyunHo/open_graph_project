import styled from "styled-components";
import { useState } from "react";

import SuccessBtn from "./SuccessBtn";

const LinkBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 20vh;
`;

const ModalBtn = () => {
  // 모달 상태 관리
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <LinkBtnContainer>
      <SuccessBtn text={"URL 등록"} onClick={openModal}></SuccessBtn>
    </LinkBtnContainer>
  );
};

export default ModalBtn;
