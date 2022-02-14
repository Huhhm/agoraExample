import styled from 'styled-components/native';

export const container = styled.View`
  flex: 1;
`;
export const Wrapper = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Container = styled.View`
  background-color:${props => props.theme.colors.darkGreen};
`;
export const headerGridLeft = styled.View`
  width: 40%;
  padding-left: 10px;
  paddin-right: 10px;
`;
export const headerGridRight = styled.View`
  width: 60%;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  
`;
export const headerLine = styled.View`
  height:80%;
  width:1px;
  background-color:#fff;

  
`;
export const headerImg = styled.Image`
  width: 100%;
  height: auto;
  flex: 1;
  resize-mode:contain;
`;
export const headerTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  padding-left: 10px;
  border-left-width:1px;
  border-color:#fff;
  padding-top:3px;
  padding-bottom:3px;
 
`;
export const headerTitleBox = styled.View`
justify-content: center;
`;
export const headerHelp1 = styled.TouchableOpacity`
margin-left:auto;
`;
export const headerHelp2 = styled.TouchableOpacity`
margin-left:2px;
`;
