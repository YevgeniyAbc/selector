import * as constants from '../constants/constants';

const selectTrucks = (data) => { 
  return {
    type: constants.SELECT_TRUCKS, 
    data
  }
}

export default selectTrucks;