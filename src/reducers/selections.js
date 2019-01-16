import * as constants from '../constants/constants';

const defaultState = {
  singleMode: true,
  multiMode: false,
  selectedTrucks: []
};

export default (state = defaultState, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.SET_SINGLE_MODE:  
      return {
        ...state,
        singleMode: true,
        multiMode: false,
        selectedTrucks: []
      };

    case constants.SET_MULTI_MODE:  
      return {
        ...state,
        singleMode: false,
        multiMode: true,
        selectedTrucks: []
      };

    case constants.SELECT_TRUCKS: 
      return {
        ...state,
        selectedTrucks: data
      };

    default:
      return state;
  }
};