import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`

    display: flex;
    flex-flow: row wrap;
    font-size: ${theme.font.sizes.medium};

    @media ${theme.media.lteMedium}{
      flex-flow: column wrap;
      align-content: center;
    }

    /* @media (max-width: 768px) {
      display: block;
      text-align: center;
    } */
    `}
`;
