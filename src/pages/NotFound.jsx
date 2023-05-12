import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackToPage = styled.span`
  color: ${(props) => props.theme.colors.gray_aa};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.red_74};
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const BackPage = (path) => {
    navigate(path);
    // navigate(-1) or navigate("/")
  };

  return (
    <>
      <div>Not Found</div>
      <BackToPage onClick={() => BackPage(-1)}>
        back to previous page
      </BackToPage>
      <br />
      <BackToPage onClick={() => BackPage("/")}>back to home page</BackToPage>
    </>
  );
};

export default NotFound;
