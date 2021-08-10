import * as type from './types';
const navTravelReducer = (state = {travelArticles:[],error:'error'}, action) =>{
    switch (action.type) {
        case type.GET_NAV_TRAVEL_ARTICLES:
            return{
                ...state,
                travelArticles: action.payload
            }

        default:
            return state;
    }
}

export default navTravelReducer