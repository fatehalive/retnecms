import * as type from '../typeActions/type'

const initialState = {
    articleFilter: [],
    mainFeature:[],
    error:'error'
}

export const articlesFiltReducer = (state= initialState, action)=>{
    switch (action.type) {
        case type.REQ_FASHION_ARTICLE:
            // const {data} = action
            return {
                ...state,
                articleFilter: action.payload
            }
        default:
            return state;
    }
}

export const featureTodayReducer =(state= initialState, action)=>{
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