import React, {useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {RtcRemoteView, VideoRenderMode, RtcLocalView} from 'react-native-agora';
import {useSelector} from 'react-redux';
import {IRootState} from '../../store/reducers';

import * as S from './styled';

const ClassmateStream = () => {
  const classInfo = useSelector((state: IRootState) => state.classConfig);
  const classMates = useSelector<IRootState>(
    state => state.activeClass.classMates,
  ) as any;
  useEffect(() => {
    
  }, []);

  const _renderVideos = useMemo(() => {
    return classMates?.map(id => {
      return id.connectionId == 0 ? null : (
        <S.Video key={id.connectionId}>
          <RtcRemoteView.SurfaceView
            uid={id.connectionId}
            style={styles.video}
            channelId={classInfo.channelName}
            renderMode={VideoRenderMode.Hidden}
          />
        </S.Video>
      );
    });
  }, [classMates]);

  return <S.Container>{_renderVideos}</S.Container>;
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});

export default ClassmateStream;
