import P from 'prop-types';
import * as S from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { useState } from 'react';
export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  const [isDark, setIsDark] = useState(background);
  return (
    <SectionBackground background={isDark}>
      {isDark ? (
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Light
        </button>
      ) : (
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Dark
        </button>
      )}
      <S.Container background={isDark}>
        <S.TextContainer>
          <Heading uppercase colorDark={!isDark} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextContainer>
        <S.ImgContainer>
          <S.Image src={srcImg} alt={title} />
        </S.ImgContainer>
      </S.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
