import React from 'react';
import {
  View, 
  StyleSheet,
} from 'react-native';

import {HEADERLOGO} from './images';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styled'
import * as json from '../../json'

const Header = (props) => {
  return (
  
      <S.Container>
        <S.Wrapper>
          <S.headerGridLeft>
            <S.headerImg source={HEADERLOGO} />
          </S.headerGridLeft>
          <S.headerGridRight>
          <S.headerLine></S.headerLine>
            <S.headerTitleBox>
            <S.headerTitle>{json.title.Account}</S.headerTitle>
            </S.headerTitleBox>
            <S.headerHelp1 ><Icon name="globe-outline" size={40} color="#fff" /></S.headerHelp1>
            <S.headerHelp2 ><Icon name="help-circle-outline" size={40} color="#fff" /></S.headerHelp2>
            
          </S.headerGridRight>
        </S.Wrapper>
      </S.Container>

)
  };
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
