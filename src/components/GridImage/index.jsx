import P from 'prop-types';
import * as S from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
export const GridImage = ({
  background = false,
  title,
  description,
  grid = [],
}) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((g) => (
            <S.GridElement key={`${g.srcImg}${g.altText}`}>
              <S.Image src={g.srcImg} alt={g.altText}></S.Image>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string,
      srcImg: P.string,
    }),
  ).isRequired,
};
