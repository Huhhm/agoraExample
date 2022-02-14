import {useCallback, useEffect, useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import RtcEngine from 'react-native-agora';
import {requestCameraAndAudioPermission} from '../../extensions/permissions';
import {isAndroid} from '../../extensions/devices';
import {
  setLocalUser,
  setRemoteUser,
  removeUser,
  setCamera,
  toggleCamera,
  toggleAudio,
} from '../../store/reducers/activeClassReducer';
import {addPeer} from '../../store/actions/channel.action';
import {IRootState} from '../../store/reducers';

const customHookAgora = () => {
  const [joined, setJoined] = useState<boolean>(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: IRootState) => state.userProfileReducer.userProfile,
  );
  const currentChild = useSelector(
    (state: IRootState) => state.activeClass.currentChild,
  );
  const teacher = useSelector((state: IRootState) => state.activeClass.teacher);
  const classMates = useSelector(
    (state: IRootState) => state.activeClass.classMates,
  );
  const classConfig = useSelector((state: IRootState) => state.classConfig);

  const frontCamera = useSelector(
    (state: IRootState) => state.activeClass.currentChild.frontCamera,
  );
  const enableVideo = useSelector(
    (state: IRootState) => state.activeClass.currentChild.videoEnabled,
  );
  const enableAudio = useSelector(
    (state: IRootState) => state.activeClass.currentChild.audioEnabled,
  );

  const _engine = useRef<RtcEngine>();

  useEffect(() => {
    const requestPermissionsAndConfig = async () => {
      if (isAndroid) {
        await requestCameraAndAudioPermission();
      }
      _engine.current = await RtcEngine.create(classConfig.appId);

      await _engine.current.enableVideo();

      if (!frontCamera) {
        _engine.current?.switchCamera();
      }
      if (!enableVideo) {
        _engine.current?.muteLocalVideoStream(enableVideo);
      }
      if (!enableAudio) {
        _engine.current?.muteLocalAudioStream(enableAudio);
      }

      _engine.current.addListener('UserJoined', (uid,elapse) => {
        console.log('User joined: ', uid , elapse);
        dispatch(
          setRemoteUser({
            connectionId: uid,
          }),
        );
      });

      _engine.current.addListener('LeaveChannel', uid => {
        console.log('User Leave Channel: ', uid);
        dispatch(removeUser(uid));
      });

      _engine.current.addListener(
        'JoinChannelSuccess',
        (channel, uid, elapsed) => {
          console.log('JoinChannelSuccess', channel, uid, elapsed);
          if (userInfo.role == 'student') {
            dispatch(
              setLocalUser({
                ...currentChild,
                connectionId: uid,
                userId: userInfo.userInfo.userId,
                avatar: userInfo.userInfo.avatar,
                displayName: userInfo.userInfo.displayName,
                role: userInfo.role,
              }),
            );
          } else {
            dispatch(
              setLocalUser({
                ...teacher,
                connectionId: uid,
                userId: userInfo.userInfo.userId,
                avatar: userInfo.userInfo.avatar,
                displayName: userInfo.userInfo.displayName,
                role: userInfo.role,
              }),
            );
          }
         
          setJoined(true);
        },
      );
      
      
      await _engine.current?.joinChannel(
        classConfig.token,
        classConfig.channelName,
        null,
        userInfo.userInfo.userId,
      );
      
    };
    requestPermissionsAndConfig();
  }, []);
  // const end = async () => {
  //   await _engine.current?.leaveChannel();
  //   setJoined(false);
  // };

  const handleSwitchCamera = () => {
    if (_engine.current) {
      _engine.current?.switchCamera();
    }
    dispatch(setCamera(!frontCamera));
  };

  const handleToggleCamera = () => {
    if (_engine.current) {
      _engine.current?.muteLocalVideoStream(!enableVideo);
    }
    dispatch(toggleCamera(!enableVideo));
  };

  const handleToggleAudio = () => {
    if (_engine.current) {
      _engine.current?.muteLocalAudioStream(!enableAudio);
    }
    dispatch(toggleAudio(!enableAudio));
  };
  return {
    userInfo,
    joined,
    handleSwitchCamera,
    handleToggleCamera,
    handleToggleAudio,
    frontCamera,
    enableVideo,
    _engine,
    dispatch,
    classConfig,
    setJoined,
  };
};

export default customHookAgora;
