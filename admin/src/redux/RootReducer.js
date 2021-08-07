import { combineReducers } from 'redux';
// import users from './users';
import { categoriesSlice } from '../views/Categories/_redux/categoriesSlice';
const RootReducer = combineReducers({
  // users: users,
  categories: categoriesSlice.reducer
});

export default RootReducer;