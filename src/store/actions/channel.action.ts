import {ADD_PEER, REMOVE_PEER} from './../../constants/actionTypes';

export const addPeer = uid => ({
  type: ADD_PEER,
  payload: {uid},
});

export const removePeer = uid => ({
  type: REMOVE_PEER,
  payload: {uid},
});
