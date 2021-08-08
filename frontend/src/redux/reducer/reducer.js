import * as type from '../typeActions/type'

const initialState = {
    fashionArticle:[],
    foodArticle:[],
    error:'error'
}

export const articlesFiltReducer = (state= initialState, action)=>{
    switch (action.type) {
        case type.GET_FASHION_ARTICLE:
            // const {data} = action
            return {
                ...state,
                fashionArticle: action.payload
            }
        case type.GET_FOOD_ARTICLE:
            return{
                ...state,
                foodArticle: action.payload
            }
        default:
            return state;
    }
}

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