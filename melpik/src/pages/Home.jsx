// src/pages/Home.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to My App!</Title>
      <Description>This is the home page.</Description>
    </Container>
  );
};

export default Home;
