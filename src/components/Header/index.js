import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.div`
  flex: 1;
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

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  li{
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
    
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <Container>
      <Head>
        <Image src="/Marca-completa.png" alt="Logo Brain Br" width={202} height={97} />
        <Menu>
          <li>
            Sobre nós
          </li>
          <li>
            Idealizadoras
          </li>
          <li>
            Temas
          </li>
          <li>
            Curso Destaque
          </li>
          <li>
            Outros Cursos
          </li>
          <li>
            Minha Conta
          </li>
        </Menu>
      </Head>
    </Container>
  );
}
