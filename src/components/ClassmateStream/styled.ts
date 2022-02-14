import styled from 'styled-components/native';
import {CenteredView} from 'styled-native-kit';

const Container = styled(CenteredView)`
  flex-direction: row;
  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.colors.clouds};
`;

const Video = styled.View`
  width: 70px;
  height: 70px;
  margin: 0 20px;
  border-radius:40px;
  overflow:hidden;
`;

export {Container, Video};
