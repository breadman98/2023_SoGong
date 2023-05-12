import React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import styled from "styled-components";

const Test = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;
const Home = () => {
  return (
    <>
      <MainLayout>
        <Test>home</Test>
      </MainLayout>
    </>
  );
};

export default Home;
