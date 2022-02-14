import styled from 'styled-components/native';
import {CenteredView} from 'styled-native-kit';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom:30px;
`;

export const WhiteboardLayout = styled.View`
  flex: 1;
`;

export const HostVideoStreamLayout = styled.View`
  flex: 1;
`;

export const Footer = styled(CenteredView)`
  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.colors.clouds};
`;


