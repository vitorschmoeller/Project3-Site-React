import { useState } from 'react';
import P from 'prop-types';
import * as S from './styles';
import { SectionContainer } from '../SectionContainer/index';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  console.log(visible);
  return (
    <>
      <S.Button
        aria-label="Open/Close menu"
        type="button"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </S.Button>
      <S.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink
              link={logoData.link}
              text={logoData.text}
              srcImg={logoData.srcImg}
            />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </>
  );
};

Menu.propTypes = {
  //através do spread acessamos a todas as tipagens do navlink e aplicamos dentro
  //das propTypes de Menu e ele serve para tiparmos o componente links pois
  //Ele retorna um prop de mesmo nome
  ...NavLinks.propTypes,
  //P.shape é um método do proptypes que retornar um objeto no caso estamos aplicando
  //todas as tipagens dentro de logolink que existe dentro das props de LogoLink para logoData
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
