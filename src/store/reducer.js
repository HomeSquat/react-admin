import { combineReducers } from 'redux-immutable';

import common from './modules/common';

const reducer = combineReducers({
  common
})

export default reducer;