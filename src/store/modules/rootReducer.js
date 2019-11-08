import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import turma from './turma/reducer';

export default combineReducers({
  auth,
  user,
  turma,
});
