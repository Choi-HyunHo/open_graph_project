import styled from "styled-components";
import { useState } from "react";

// components
import Header from "./Header";
import ModalBtn from "./Button/ModalBtn";

const EditorDiv = styled.div`
  height: 100vh;
  width: 35vw;
`;

const Editor = (open) => {
  //   const [urlData, setUrlData] = useState("");

  return (
    <EditorDiv>
      <Header center={"URL"} />
      <ModalBtn />
    </EditorDiv>
  );
};

export default Editor;
