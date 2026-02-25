import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export function ConsumerWebFrame({children}: Props) {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
}

const Outer = styled.View`
  flex: 1;
  background-color: #f3f5f8;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
`;

const Inner = styled.View`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e9edf3;
`;
