import {SET_LOADING} from '../../constants/actionTypes';

const initialState = {
  isLoading: false,
};

const common = (state = initialState, action: any) => {
  let nState = state;
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return nState;
  }
};

export default common;
