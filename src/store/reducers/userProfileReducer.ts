import {createSlice} from '@reduxjs/toolkit';
import api from '../../api/index';

interface UserInfo {
  avatar: string;
  displayName: string;
  userId: number;
}

const initialState = {
  userProfile: {
    authToken: "'",
    language: '',
    userInfo: {
      avatar: 'cat.png',
      displayName: 'Student',
      userId: 50,
    } as UserInfo,
    role: 'student',
  },
  isLoading: false,
  error: '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loginReducer: (state, action) => {
      console.log('login');
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    getUserProfile: (state, action) => {
      console.log('get user info');
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.userProfile.userInfo = action.payload.userInfo;
      state.userProfile.role = action.payload.role;
    },
  },
});

export default userProfileSlice.reducer;

export const {getUserProfile, loginReducer, startLoading, hasError, setUser} =
  userProfileSlice.actions;

const getUser = () => async dispatch => {
  dispatch(startLoading());
  try {
    await api.get('/user/getFollowUsers/1').then(res => {
      console.log('res', res.data);
      dispatch(getUserProfile(res.data));
    });
  } catch (e: any) {
    dispatch(hasError(e.message));
  }
};

const login = (phone, pushToken) => async dispatch => {
  dispatch(startLoading());
  try {
    const data = {
      phone: phone,
      push_tokens: pushToken,
    };
    await api.post('/login', data).then(res => {
      console.log('res', res.data);
      dispatch(loginReducer(res.data));
    });
  } catch (e: any) {
    dispatch(hasError(e.message));
  }
};
export {getUser, login};
