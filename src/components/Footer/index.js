import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.headerFooterBg};
`;

const Head = styled.header`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Image)`
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <Head>

      </Head>
    </Container>
  );
}
