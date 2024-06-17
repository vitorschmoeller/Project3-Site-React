import P from 'prop-types';
import * as S from './styles';
import { Heading } from '../Heading/index';
export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase={true}>
      <S.Container href={link}>
        {/* se srcImg existir ele faz isso */}
        {srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
