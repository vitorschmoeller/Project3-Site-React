import { Heading } from '../../components/Heading';
import { LogoLink } from '../../components/LogoLink';

import * as S from './styles';

import React from 'react';

const Home = () => {
  return (
    <S.Wrapper>
      <Heading>O texto que eu quero</Heading>
      <LogoLink
        link="https://google.com.br"
        text="Olá link"
        srcImg="aaa"
      ></LogoLink>
    </S.Wrapper>
  );
};

export default Home;
