import React, {useState} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import StudentItem from '../StudentItem';
import * as S from './styled';


const ListStudentBody = props => {
  return (
    <S.Container>
      <S.ScrollViewContainer>
        <S.mgTop40></S.mgTop40>
        <StudentItem name="John Doe" class="Remote Class" time="12/07 - 15:00" />
        <StudentItem name="Rose Mary" class="Remote Class" time="12/07 - 15:00"/>
        <StudentItem name="June Smith" class="Remote Class" time="12/07 - 15:00"/>  
        <StudentItem name="Peter Doe" class="Remote Class" time="12/07 - 15:00"/> 
        <StudentItem name="Otto Doe" class="Remote Class" time="12/07 - 15:00"/> 
      </S.ScrollViewContainer>
    </S.Container>
  );
};
export default ListStudentBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
