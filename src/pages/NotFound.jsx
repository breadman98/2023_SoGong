import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackToPreviousText = styled.span`
  color: ${(props) => props.theme.colors.mainGray};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.red_74};
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  const BackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div>Not Found</div>
      <BackToPreviousText onClick={BackPage}>
        back to previous page
      </BackToPreviousText>
    </>
  );
};

export default NotFound;
