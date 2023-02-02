import { combineReducers } from 'redux';
import { loginReducer } from '../components/Reducers/loginReducer/loginReducer';
import { customerReducer } from '../components/Reducers/customerReducer/customerReducer';

export const rootReducer = combineReducers({
  loginReducer,
  customerReducer,
});
