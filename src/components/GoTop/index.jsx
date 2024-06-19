import * as S from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
export const GoTop = () => {
  return (
    <S.Container href="#" aria-label="Go to top" title="go to top">
      <KeyboardArrowUp />
    </S.Container>
  );
};
