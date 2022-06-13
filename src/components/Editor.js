import styled from "styled-components";
import { useState } from "react";

// components
import Header from "./Header";
import User from "./User"
import Title from "./Title"
import ModalBtn from "./ModalBtn";

const EditorDiv = styled.div`
  height: 100vh;
  width: 38vw;
`;

const Editor = (open) => {
  //   const [urlData, setUrlData] = useState("");

  return (
    <EditorDiv>
      <Header left={"<"} center={"URL 등록"} right={">"} />
      <User left={"밝은_코브라"} right={'🔻'}/>
      <Title/>
      <ModalBtn/>
    </EditorDiv>
  );
};

export default Editor;
