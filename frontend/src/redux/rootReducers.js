import {combineReducers} from 'redux';
import {articlesFiltReducer} from '../Component/Home/Main/Block-Wrap-Sec1/Grid-Box/redux/reducer';
import {featureTodayReducer} from '../Component/Home/Main/Feature-Today-Sec/redux/reducer'
import { articlePageReducer } from '../Component/PostPage/Article/Content/redux/reducer';

const rootReducer = combineReducers({
    articlesFilter: articlesFiltReducer,
    featureToday: featureTodayReducer,
    articlePage: articlePageReducer
});

export default rootReducer;
