import React, {useEffect, useState, useRef, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {RtcLocalView, VideoRenderMode, RtcRemoteView} from 'react-native-agora';
import {IRootState} from '../../store/reducers';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, Image} from 'react-native';

import * as S from './styled';
import customHookAgora from './customHookAgora';

const ClassVideos = () => {
  const teacher = useSelector((state: IRootState) => state.activeClass.teacher);
  const {
    classConfig,
    joined,
    handleSwitchCamera,
    handleToggleCamera,
    handleToggleAudio,
    frontCamera,
    enableVideo,
    userInfo,
  } = customHookAgora();
  useEffect(() => {
    
  }, []);

  const _renderVideos = useMemo(() => {
    return joined ? (
      <S.Video>
        <RtcLocalView.SurfaceView
          style={styles.video}
          channelId={classConfig.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
      </S.Video>
    ) : null;
  }, [joined]);

  return (
    <S.Container>
      <S.RightUser>
        {teacher.connectionId == 0 ? null : (
          <S.Teacher>
            <RtcRemoteView.SurfaceView
              key={teacher.connectionId}
              uid={teacher.connectionId}
              style={styles.video}
              channelId={classConfig.channelName}
              renderMode={VideoRenderMode.Hidden}
            />
          </S.Teacher>
        )}
      </S.RightUser>
      <S.RightRow2>
        <S.LocalUser>
          {_renderVideos}
        </S.LocalUser>
        <S.ButtonContainer>
          <S.Spacing05></S.Spacing05>
          <S.Button activeOpacity={0.8} onPress={handleSwitchCamera}>
          <S.Image
              disabled={!frontCamera}
              source={require('../../assets/images/camera.png')}
            />
          </S.Button>
          <S.Button activeOpacity={0.8} onPress={handleToggleCamera}>
          <S.Image
              disabled={!enableVideo}
              source={require('../../assets/images/eye.png')}
            />
          </S.Button>
          <S.Button activeOpacity={0.8} onPress={handleToggleAudio}>
            <S.Image
              disabled={!enableVideo}
              source={require('../../assets/images/volume.png')}
            />
          </S.Button>
          <View style={{flex: 0.5}}></View>
        </S.ButtonContainer>
      </S.RightRow2>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});

export default ClassVideos;
