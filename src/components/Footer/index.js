import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.headerFooterBg};
`;

const Foot = styled.header`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.mainText};

  span {
    font-size: 18px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Foot>
        <h2>
          Brain-Br
        </h2>
        <span>
          CNPJ: 40.334.793/0001-08
        </span>
      </Foot>
    </Container>
  );
}
