import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import * as json from '../../json';
import * as S from './styled';
import {setUser} from '../../store/reducers/userProfileReducer';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../store/reducers';
import { useNavigation } from '@react-navigation/native';
import ScreenRoutes from '../../navigation/routes'

const LoginBody = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(
    (state: IRootState) => state.userProfileReducer.userProfile,
  );
  const navigation = useNavigation();
  const _login = () => {
    var currentUser = json.user.filter(value =>{
      return value.displayName == userName && value.password == password
    })
    if (
      currentUser.length == 0
    ) {
      Alert.alert('Wrong username or password');
    } else {
      Alert.alert('login success');
      dispatch(
        setUser({
          ...user,
          role: currentUser[0].role,
          userInfo: {
            ...user.userInfo,
            displayName: currentUser[0].displayName,
            userId: currentUser[0].userId,
          },
        }),
      );
        navigation.navigate(ScreenRoutes.CLASS);
    }
  };
  return (
    <S.Container>
      <S.ViewTitle>SignIn</S.ViewTitle>
      <S.mgTop40></S.mgTop40>
      <S.InputBox>
        <S.Input
          placeholder="Username"
          autoCapitalize='none'
          onChangeText={a => setUserName(a)}
          value={userName}
        />
      </S.InputBox>
      <S.mgTop30></S.mgTop30>
      <S.InputBox>
        <S.Input
          placeholder="Password"
          autoCapitalize='none'
          onChangeText={a => setPassword(a)}
          value={password}
        />
      </S.InputBox>
      <S.fPasswordBox>
        <S.fPassword>Forgot Password ?</S.fPassword>
      </S.fPasswordBox>

      <S.submit onPress={_login}>
        <S.submitText>Sign In</S.submitText>
      </S.submit>
    </S.Container>
  );
};
export default LoginBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
