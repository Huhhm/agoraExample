import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({t, r, b, l, v, h, all}) => {
    return css`
      margin: ${all || t || v}px ${all || r || h}px ${all || b || v}px
        ${all || l || h}px;
    `;
  }}
`;
