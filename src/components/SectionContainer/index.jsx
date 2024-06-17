import P from 'prop-types';
import * as S from './styles';
export const SectionContainer = ({ children }) => {
  return (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
