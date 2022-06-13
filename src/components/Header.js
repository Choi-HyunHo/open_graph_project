import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  margin: 10px 0;
`;

const Header = ({ center }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{center}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
