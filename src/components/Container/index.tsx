import React, { PropsWithChildren } from 'react';
import { Container } from './styles';

const ContainerComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};


export default ContainerComponent;