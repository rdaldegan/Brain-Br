import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
`;

const Img = styled(Image)`
  pointer-events: none;
`;

export default function Home() {
  return (
    <Div>
      <Img src="/pg-inicial.png" layout="fill" objectFit="cover" objectPosition="center center" priority />
    </Div>
  );
}
