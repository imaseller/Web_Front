import React from 'react';
import styled, { keyframes } from 'styled-components';
import Theme from '../styles/Theme.js'; // default export이므로 중괄호 없이 import

// 스피너 애니메이션
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// 스피너 스타일
const Spinner = styled.div`
  margin: 0 auto;
  border: 16px solid #f3f3f3; // 회색 외부 테두리
  border-top: 16px solid ${Theme.colors.yellow}; // Theme의 pink5 색상 적용
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite; // 스핀 애니메이션
`;

// 로딩 화면 전체 레이아웃
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Theme.colors.background}; // Theme에서 배경색 적용
`;

// 로딩 컴포넌트
const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default Loading;
