import React from 'react';
import ClassVideos from '../../components/ClassVideos';
import ClassmateStream from '../../components/ClassmateStream';
import Header from '../../components/Header';
import {View,Text,ScrollView} from 'react-native';
import Whiteboard from '../../components/Whiteboard';

import * as S from './styled';

const ClassScreen = () => {
  return (
    <S.Container>
      <ScrollView>
      <Header />
            <View style={{borderBottomWidth: 1, borderColor: '#8c8c8c'}}>
              <Text
                style={{
                  color: '#000',
                  marginLeft: 20,
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
                Teacher Bradish
              </Text>
            </View>
      <S.Content>
        <S.WhiteboardLayout>
          <Whiteboard />
        </S.WhiteboardLayout>
        
        <S.HostVideoStreamLayout>
          <ClassVideos />
        </S.HostVideoStreamLayout>
      </S.Content>

      <ClassmateStream />
      </ScrollView>
    </S.Container>
  );
};

export default ClassScreen;
