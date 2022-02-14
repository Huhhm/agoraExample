import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  
`;
export const ScrollViewContainer = styled.View`
  margin-top: 30px;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  margin-right: ${(props) => props.theme.spacing[2]}px;
  flex-direction:row;
  flex-wrap:wrap;
`;

export const mgTop40 = styled.View`
  margin-top: 40px;
`;
