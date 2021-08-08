import * as type from './types'

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