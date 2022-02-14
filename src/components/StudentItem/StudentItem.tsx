import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Modal,
  Image,
  Alert,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import * as S from './styled';
import * as json from '../../json';
import {zoomuser} from './images';
import { useNavigation } from '@react-navigation/native';
import ScreenRoutes from '../../navigation/routes'

const StudentItem = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);

  const toggleMicSwitch = () =>
    setIsMicEnabled(previousState => !previousState);
  const toggleCameraSwitch = () =>
    setIsCameraEnabled(previousState => !previousState);
  const [selectedMicValue, setSelectedMicValue] = useState('Default');
  const [selectedCameraValue, setSelectedCameraValue] = useState('Default');
  return (
    <S.StudentContainer onPress={() => setModalVisible(true)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <S.ModalContainer>
          <S.ModalWrapper>
            <S.ModalHeader>
              <S.ModalTitle>{json.title.SystemCheck}</S.ModalTitle>
            </S.ModalHeader>
            <S.Exit onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={30} color="#000" />
            </S.Exit>
            <S.ModalSection>
              <S.ModalSectionText>Check Microphone</S.ModalSectionText>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isMicEnabled ? '#f5dd4b' : '#f4f3f4'}
                style={{
                  marginLeft: 12,
                  position: 'absolute',
                  right: 30,
                  top: 3,
                  transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleMicSwitch}
                value={isMicEnabled}
              />
              <S.ModalPicker>
                <Picker
                  selectedValue={selectedMicValue}
                  style={{
                    height: 50,
                    width: width - 64,
                    borderWidth: 1,
                    borderColor: '#000',
                  }}
                  onValueChange={(selectedMicValue, itemIndex) =>
                    setSelectedMicValue(selectedMicValue)
                  }>
                  <Picker.Item label="Default" value="default" />
                  <Picker.Item label="value2" value="value2" />
                </Picker>
              </S.ModalPicker>
            </S.ModalSection>

            <S.ModalSection>
              <S.ModalSectionText>Check Microphone</S.ModalSectionText>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isCameraEnabled ? '#f5dd4b' : '#f4f3f4'}
                style={{
                  marginLeft: 12,
                  position: 'absolute',
                  right: 30,
                  top: 3,
                  transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleCameraSwitch}
                value={isCameraEnabled}
              />
              <S.ModalPicker>
                <Picker
                  selectedValue={selectedCameraValue}
                  style={{
                    height: 50,
                    width: width - 64,
                    borderWidth: 1,
                    borderColor: '#000',
                  }}
                  onValueChange={(selectedCameraValue, itemIndex) =>
                    setSelectedCameraValue(selectedCameraValue)
                  }>
                  <Picker.Item label="Default" value="default" />
                  <Picker.Item label="value2" value="value2" />
                </Picker>
              </S.ModalPicker>
            </S.ModalSection>
            <S.ModalSection>
              <Image
                source={zoomuser}
                style={{
                  width: width * 0.7,
                  height: (width * 0.7 * 1075) / 1911,
                }}
              />
            </S.ModalSection>
            <S.ModalSection>
              <S.ModalSectionText>
                Class Status:{' '}
                <S.Span>
                  No class in progress. We will notify you once the class start.
                  <ActivityIndicator style={{marginLeft: 10}} />
                </S.Span>
              </S.ModalSectionText>
            </S.ModalSection>

            <S.ModalButton>
              <S.ModalButtonCancelWrapper
                onPress={() => setModalVisible(!modalVisible)}>
                <S.ModalButtonCancelText>Cancel</S.ModalButtonCancelText>
              </S.ModalButtonCancelWrapper>
              <View style={{width: 32}}></View>
              <S.ModalButtonAcceptWrapper onPress={() => navigation.navigate(ScreenRoutes.CLASS)}>
                <S.ModalButtonAcceptText>Accept</S.ModalButtonAcceptText>
              </S.ModalButtonAcceptWrapper>
            </S.ModalButton>
          </S.ModalWrapper>
        </S.ModalContainer>
      </Modal>
      <Icon name="user" size={70} color="#541b86" />
      <S.StudentName>{props.name}</S.StudentName>
      <S.StudentClassType>Class:{props.class}</S.StudentClassType>
      <S.StudentClassTime>Start Time:{props.time}</S.StudentClassTime>
    </S.StudentContainer>
  );
};
export default StudentItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
