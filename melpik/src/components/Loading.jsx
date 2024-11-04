import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

const Loading = () => {
  return <Loader>Loading...</Loader>;
};

export default Loading;
