import styled from "styled-components";

const SuccessStyle = styled.button`
  all: unset;
  background-color: 
  font-size: 30px;
  color: black;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
`;

const SuccessBtn = ({ text, onClick }) => {
  return <SuccessStyle onClick={onClick}>{text}</SuccessStyle>;
};

export default SuccessBtn;
