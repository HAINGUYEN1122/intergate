import { combineReducers } from 'redux';
import dashboard from './modules/dashboard/reducer';

const RootReducer = combineReducers({
  dashboard,
});

export default RootReducer;
