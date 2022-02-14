import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import Header from '../../components/Header';
import ListStudentBody from '../../components/ListStudentBody';
import * as S from './styled'


const ChooseStudent = props => {
  return (
    <SafeAreaView style={styles.container}>
      
            <Header />
            <ScrollView>
            <S.TitleTextContainer>
            <S.WelcomeUserText>Welcome Bradish</S.WelcomeUserText>
            <S.Title2>Choose a student to start with.</S.Title2>
          </S.TitleTextContainer>
            <ListStudentBody />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
