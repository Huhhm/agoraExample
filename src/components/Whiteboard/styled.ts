import styled from 'styled-components/native';

export const Left = styled.View`
  width: ${props => props.theme.screen_size.width * 0.55}px;
`;
export const LeftBoard = styled.View`
  background-color: ${props => props.theme.colors.boardLightGray};
  height: ${props => props.theme.screen_size.width * 0.3}px;
  border-color: ${props => props.theme.colors.black};
  border-width: ${props => props.theme.spacing[0.5] / 4}px;
  border-radius: ${props => props.theme.border_radius.small}px;
  margin-left: ${props => props.theme.spacing[4]}px;
  margin-right: ${props => props.theme.spacing[4]}px;
  margin-top: ${props => props.theme.spacing[4] }px;
`;


