import {CenteredView} from 'styled-native-kit';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Right = styled.View`
  width: ${props => props.theme.screen_size.width * 0.45}px;
`;

export const Video = styled.View`
  width: 100%;
  height: 100%;
`;
export const RightRow2 = styled.View`
  margin-left: ${props => props.theme.spacing[2]}px;
  margin-right: ${props => props.theme.spacing[2]}px;
  border-radius: ${props => props.theme.border_radius.large}px;
  flex-direction: row;
  align-items: flex-start;
`;
export const RightUser = styled.View`
  margin-left: ${props => props.theme.spacing[4]}px;
  margin-right: ${props => props.theme.spacing[4]}px;
  align-items: center;
  margin-top: ${props => props.theme.spacing[2.5]}px;
  height: 125px;
`;

export const ButtonContainer = styled.View`
  width: 65%;
  flex-direction: row;
  margin-top: 45px;
`;
export const Spacing05 = styled.View`
  flex: 0.5;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
`;
export const Image = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 50px;
`;

export const LocalUser = styled.View`
  margin-top:30px;
  width: 80px;
  height:80px;
  border-radius: 60px;
  overflow: hidden;
`;
export const Teacher = styled.View`
border-radius: 20px;
height: 100%;
width: 100%;
overflow: hidden;
`;