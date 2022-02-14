import styled from 'styled-components/native';

export const StudentContainer = styled.TouchableOpacity`
  width: ${props =>
    props.theme.screen_size.width > 784
      ? (props.theme.screen_size.width - 32 - 64) * 0.5
      : (props.theme.screen_size.width - 160) * 0.25};
  background-color: ${props => props.theme.colors.white};
  shadow-color: ${props => props.theme.colors.black};
  border-radius: 15px;
  shadow-opacity: 0.5;
  shadow-radius: 3.84px;
  elevation: 5;
  align-items: center;
  margin-left: ${props => props.theme.spacing[2]}px;
  margin-right: ${props => props.theme.spacing[2]}px;
  margin-bottom: ${props => props.theme.spacing[1]}px;
  margin-top:${props => props.theme.spacing[4]}px;
  padding-top: ${props => props.theme.spacing[4]}px;
  padding-bottom: ${props => props.theme.spacing[4]}px;
`;
export const StudentName = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  font-weight: bold;
`;
export const StudentClassType = styled.Text`
  margin-top: 10px;
  font-size: 14px;
`;
export const StudentClassTime = styled.Text`
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
`;
export const ModalContainer = styled.View`
  
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.screen_size.width}px;
  height: ${props => props.theme.screen_size.height}px;
  background-color: ${props => props.theme.colors.darkGray};
`;
export const ModalWrapper = styled.View`
  width: ${props => props.theme.screen_size.width - 32}px;
  height: ${props => props.theme.screen_size.height * 0.9}px;
  background-color: ${props => props.theme.colors.white};
  shadow-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.border_radius.small}px;
  shadow-opacity: 0.5;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const ModalHeader = styled.View`
  border-bottom-width: ${props => props.theme.spacing[1] / 4}px;
  border-color: ${props => props.theme.colors.borderLineGray};
`;
export const ModalTitle = styled.Text`
  font-size: ${props => props.theme.font_size.medium}px;
  font-weight: 500;
  padding-top: ${props => props.theme.spacing[2.5]}px;
  padding-bottom: ${props => props.theme.spacing[2.5]}px;
  padding-left: ${props => props.theme.spacing[1]}px;
`;
export const Exit = styled.TouchableOpacity`
  position: absolute;
  right: ${props => props.theme.spacing[1]};
  top: ${props => props.theme.spacing[1.5] + 3};
`;
export const ModalSection = styled.View`
  padding-left: ${props => props.theme.spacing[2]}px;
  padding-right: ${props => props.theme.spacing[2]}px;
  margin-top: ${props => props.theme.spacing[2]}px;
  
`;
export const ModalSectionText = styled.Text`
  font-weight: bold;
  font-size: ${props => (props.theme.font_size.large * 2) / 3}px;
  margin-top:${props => props.theme.spacing[2]}px;
`;
export const ModalPicker = styled.View`
  width: ${props => props.theme.screen_size.width - 64}px;
  margin-top: ${props => props.theme.spacing[4]}px;
  align-items: center;
  border-radius: ${props => props.theme.border_radius.small}px;
  border-width: ${props => props.theme.spacing[0.5] / 4}px;
`;
export const Span = styled.Text`

`;
export const ModalButton = styled.Text`
    position:absolute;
    flex-direction:row;
    bottom:${props => props.theme.spacing[4]}px;
    right:${props => props.theme.spacing[4]}px;
`;
export const ModalButtonAcceptText = styled.Text`
   padding-top:${props => props.theme.spacing[1]}px;
   padding-bottom:${props => props.theme.spacing[1]}px;
   padding-left:${props => props.theme.spacing[2]}px;
   padding-right:${props => props.theme.spacing[2]}px;
   color:${props => props.theme.colors.white};
`;
export const ModalButtonCancelText = styled.Text`
padding-top:${props => props.theme.spacing[1]}px;
padding-bottom:${props => props.theme.spacing[1]}px;
padding-left:${props => props.theme.spacing[2]}px;
padding-right:${props => props.theme.spacing[2]}px;
`;
export const ModalButtonCancelWrapper = styled.TouchableOpacity`
      border-width:${props => props.theme.spacing[0.5]/4}px;
      border-color:${props => props.theme.colors.borderLineGray};
`;
export const ModalButtonAcceptWrapper = styled.TouchableOpacity`
      background-color:${props => props.theme.colors.blue};
      border-width:${props => props.theme.spacing[0.5]/4}px;
      border-color:${props => props.theme.colors.blue};
`;
