import React, { ReactNode } from 'react';
import { Container } from './styles';

interface BoxInfoProps {
  title: string,
  children: ReactNode
}

const BoxInfo = ({ children, title }:BoxInfoProps) => (
  <Container>
    <div className="header-box">
      <span>{title}</span>
    </div>
    {children}
  </Container>
);

export default BoxInfo;
