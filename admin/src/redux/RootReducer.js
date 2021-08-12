import { combineReducers } from 'redux';

import { categoriesSlice } from '../views/Categories/_redux/categoriesSlice';
import { userProfileReducer } from '../views/UserProfile/_redux/userProfileReducer';
import { whoisReducer } from '../components/Header/_redux/whoisReducer';

const RootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  userProfile: userProfileReducer,
  whois: whoisReducer,
});

export default RootReducer;