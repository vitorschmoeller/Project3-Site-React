import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import * as S from './styles';
import { TextComponent } from '../TextComponent';
export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((g) => (
            <S.GridElement key={g.title}>
              <Heading size="medium" as="h3">
                {g.title}
              </Heading>
              <TextComponent>{g.description}</TextComponent>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string,
      description: P.string,
    }),
  ).isRequired,
  background: P.bool,
};
