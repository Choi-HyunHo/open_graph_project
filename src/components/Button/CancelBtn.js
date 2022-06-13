import styled from "styled-components";

const CancelStyle = styled.button`
all: unset;
background-color: 
font-size: 20px;
color: #fd565f;
transition: all 0.3s ease;
cursor: pointer;
border: none;
  }
`;

const CancelBtn = ({ text, onClick }) => {
  return <CancelStyle>{text}</CancelStyle>;
};

export default CancelBtn;
