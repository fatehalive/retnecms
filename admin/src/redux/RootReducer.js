import { combineReducers } from 'redux';

import { categoriesSlice } from '../views/Categories/_redux/categoriesSlice';
import { profileReducer } from '../components/Header/_redux/profileReducer';

const RootReducer = combineReducers({
  profile: profileReducer,
  categories: categoriesSlice.reducer
});

export default RootReducer;