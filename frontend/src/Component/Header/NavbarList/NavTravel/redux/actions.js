import axios from 'axios';
import * as type from './types';
import config from '../../../../../config';

export const fetchTravelArticles = (articles)=>{
    return {
        type: type.GET_NAV_TRAVEL_ARTICLES,
        payload: articles
    }    
}

export const sentTravelArticles = ()=> async(dispatch)=>{
    try {
        let params = {pageSize: 5,
            pageNumber:1,
            filter: {
                article_title:null,
                username:null,
                category_name:'Fashion',
                status: null
            }}
        return await axios.post(config.WS_BASE_URL + '/news-article/find', params)
        .then(response =>{
            const {items} = response.data.data
            dispatch(fetchTravelArticles(items))
        })
            
    }
    catch(error) {
        console.error(error)
    }
}