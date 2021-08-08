import * as type from './types';

export const featureTodayReducer =(
    state= {mainFeature:[],error:'error'}, 
    action)=>{
        switch (action.type) {
            case type.GET_FEATURE_ARTICLE:
                return {
                    ...state,
                    mainFeature: action.payload
                }
            default:
                return state;
        }
}