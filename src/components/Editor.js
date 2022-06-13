import styled from "styled-components";

// components
import Header from "./Header";
import User from "./User"
import Title from "./Title"

const EditorDiv = styled.div`
  height: 100vh;
  width: 38vw;
`;

const Editor = () => {

  return (
    <EditorDiv>
      <Header left={"<"} center={"URL 등록"} right={">"} />
      <User left={"밝은_코브라"} right={'🔻'}/>
      <Title/>
    </EditorDiv>
  );
};

export default Editor;
