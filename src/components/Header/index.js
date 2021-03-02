import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  height: 75px;
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

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  
  a{
    color: ${({ theme }) => theme.colors.mainText};
    font-weight: 500;
    text-decoration: none;
    margin-right: 14px;
    cursor: pointer;
    font-size: 18px;
    :hover {
      transition: 250ms ease-in-out;
      color: ${({ theme }) => theme.colors.contrastText};
    }
    :after {
      display:block;
      content: '';
      border-bottom: solid 3px ${({ theme }) => theme.colors.contrastText};
      transform: scaleX(0);
      transition: 250ms ease-in-out;
    }
    :hover:after {
      transform: scaleX(1);
    }

    :last-child{
      background-color: ${({ theme }) => theme.colors.contrastText};
      color: ${({ theme }) => theme.colors.mainText};
      font-size: 16px;
      padding: 8px;
      padding-bottom: 5px;
      :hover {
        transition: 250ms ease-in-out;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <Head>
        <Link href="/">
          <Logo src="/Marca-completa.png" alt="Logo Brain Br" width={135} height={65} priority />
        </Link>
        <Menu>
          <a className="normalLI" href="/sobre">
            Sobre nós
          </a>
          <Link className="normalLI" href="/idealizadoras">
            Idealizadoras
          </Link>
          <Link className="normalLI" href="/temas">
            Temas
          </Link>
          <Link className="normalLI" href="/curso-destaque">
            Curso Destaque
          </Link>
          <Link className="normalLI" href="/outros-cursos">
            Outros Cursos
          </Link>
          <Link className="normalLI" href="/minha-conta">
            Minha Conta
          </Link>
          <Link className="highlightedLI" href="/contato">
            CONTATO
          </Link>
        </Menu>
      </Head>
    </Container>
  );
}
