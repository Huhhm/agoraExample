import {ADD_PEER, REMOVE_PEER} from '../../constants/actionTypes';

export type ChannelState = {
  peers: number[];
  joined: boolean;
};

const INITIAL_STATE: ChannelState = {
  peers: [],
  joined: false,
};

const channel = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_PEER:
      let _peers = [...state.peers];
      console.log(_peers);
      if (!_peers.includes(action.payload.uid)) {
        _peers = [..._peers, action.payload.uid];
      }
      return {
        ...state,
        peers: _peers,
      };
    case REMOVE_PEER:
      return {
        ...state,
        peers: state.peers.filter(id => id !== action.payload.uid),
      };
    default:
      return state;
  }
};

export default channel;
