import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: ${theme.spacings.large};

  @media ${theme.media.lteMedium} {
    grid-template-columns: 1fr;
    text-align: center;
  }
  ${Title} {

    margin-bottom: ${theme.spacings.xlarge};
  }
  `}


`;

export const TextContainer = styled.div`
  ${({ theme }) => css`


  @media (max-width: 768px) {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImgContainer = styled.div`

`;

export const Image = styled.img``;
