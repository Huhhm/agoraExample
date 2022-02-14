import {combineReducers} from 'redux';
import {LOGOUT} from '../../constants/actionTypes';
import activeClass from './activeClassReducer';
import userProfileReducer from './userProfileReducer';
import classConfig from './classConfigReducer';
import channel from './channel.reducer';

const appReducer = combineReducers({
  userProfileReducer,
  activeClass,
  channel,
  classConfig,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
