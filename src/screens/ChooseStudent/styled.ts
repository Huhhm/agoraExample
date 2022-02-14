import styled from 'styled-components/native';


export const TitleTextContainer = styled.View`
  align-items:center;
  border-bottom-width:1px;
  border-color:${(props) => props.theme.colors.borderLineGray};
  padding-bottom:30px;
  margin-top:10px;
`;
export const WelcomeUserText = styled.Text`
    font-size:30px;
    font-weight:bold;
    color:#000;
    margin-top:15px;
    margin-bottom:10px
`;
export const Title2 = styled.Text`
  font-size:14px;
`;