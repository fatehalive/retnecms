import {combineReducers} from 'redux';
import {articlesFiltReducer, featureTodayReducer} from './reducer/reducer'

const rootReducer = combineReducers({
    articlesFilter: articlesFiltReducer,
    featureToday: featureTodayReducer
});

export default rootReducer;
