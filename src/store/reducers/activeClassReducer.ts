import {createSlice} from '@reduxjs/toolkit';
import * as json from '../../json'
const initialState = {
  classId: 0,
  currentChild: {
    userId: 0,
    displayName: '',
    avatar: '',
    handRaised: false,
    connectionId: 0,
    frontCamera: true,
    audioEnabled: true,
    videoEnabled: true,
    localAudioDisabledByRemote: false,
    localVideoDisabledByRemote: false,
  },
  teacher: {
    userId: 0,
    displayName: '',
    connectionId: 0,
    audioEnabled: true,
    videoEnabled: true,
  },
  classMates: [
    {
      userId: 0,
      displayName: '',
      avatar: 'string',
      connectionId: 0,
      audioEnabled: true,
      videoEnabled: true,
      localAudioDisabledByRemote: false,
      localVideoDisabledByRemote: false,
    },
  ],
};

const activeClass = createSlice({
  name: 'activeClass',
  initialState,
  reducers: {
    setRemoteUser: (state, action) => {
      var currentUserRole = json.user.filter(value =>{
        return value.userId == action.payload.connectionId;
      }) as any;
      
      if (currentUserRole[0].role == 'teacher') {
        console.log('teacher11111111')
        state.teacher = {
          userId: action.payload.id,
          displayName: action.payload.userName,
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
        }
      } else {
        console.log('classMate')
        state.classMates.push({
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          avatar: action.payload.avatar,
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
          localAudioDisabledByRemote: false,
          localVideoDisabledByRemote: false,
        })
      }
    },
    setLocalUser: (state, action) => {
      if (action.payload.role == 'teacher') {
        
        state.teacher = {
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
        };
      } else {
        state.currentChild = {
          userId: action.payload.userId,
          displayName: action.payload.displayName,
          avatar: action.payload.avatar,
          handRaised: false,
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
          localAudioDisabledByRemote: false,
          localVideoDisabledByRemote: false,
          frontCamera: true,
        };
      }
      
    },
    removeUser: (state, action) => {
      if (action.payload.connectionId == state.teacher.connectionId) {
        state.teacher = {
          userId: 0,
          displayName: '',
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
        };
      } else if (
        action.payload.connectionId == state.currentChild.connectionId
      ) {
        state.currentChild = {
          userId: 0,
          displayName: action.payload.displayName,
          avatar: action.payload.avatar,
          handRaised: false,
          connectionId: action.payload.connectionId,
          audioEnabled: true,
          videoEnabled: true,
          localAudioDisabledByRemote: false,
          localVideoDisabledByRemote: false,
          frontCamera: true,
        };
      } else {
        for (let i = 0; i < state.classMates.length; i++) {
          if (
            state.classMates[i].connectionId === action.payload.connectionId
          ) {
            state.classMates.splice(i, 1);
            break;
          }
        }
      }
    },
    setCamera: (state, action) => {
      state.currentChild.frontCamera = action.payload.frontCamera;
    },
    toggleCamera: (state, action) => {
      state.currentChild.videoEnabled = action.payload.enableVideo;
    },
    toggleAudio: (state, action) => {
      state.currentChild.audioEnabled = action.payload.enableAudio;
    },
  },
});

export const {
  setRemoteUser,
  setLocalUser,
  removeUser,
  setCamera,
  toggleCamera,
  toggleAudio,
} = activeClass.actions;

export default activeClass.reducer;
