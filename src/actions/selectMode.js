import * as constants from '../constants/constants';

export const selectSingleMode = () => { 
  return {
    type: constants.SET_SINGLE_MODE
  }
}

export const selectMultiMode = () => { 
  return {
    type: constants.SET_MULTI_MODE
  }
}