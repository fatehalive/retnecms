import {combineReducers} from 'redux';
import {articlesFiltReducer} from '../Component/Home/Main/Block-Wrap-Sec1/Grid-Box/redux/reducer';
import {featureTodayReducer} from '../Component/Home/Main/Feature-Today-Sec/redux/reducer'

const rootReducer = combineReducers({
    articlesFilter: articlesFiltReducer,
    featureToday: featureTodayReducer
});

export default rootReducer;
