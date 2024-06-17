import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    text-decoration: none;
    align-items: center;
    /* inherits diz que vai herdar do component pai */
    color: inherit;

    > img {
      max-height: 3rem;
    }
  `}
`;
