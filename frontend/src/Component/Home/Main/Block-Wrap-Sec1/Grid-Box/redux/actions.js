import axios from 'axios';
import * as type from './types';

export const fetchFoodArticles = (articles)=>{
    return {
        type: type.GET_FOOD_ARTICLE,
        payload: articles
    }
}

export const fetchFashionArticles = (data)=>{
    return {
        type: type.GET_FASHION_ARTICLE,
        payload: data
    }
}


export const sentFashionFilter =()=> async(dispatch)=>{
    try {
        let params = {pageSize: 1,
            pageNumber:2,
            filter: {
                article_title:null,
                username:null,
                category_name:'Fashion',
                status: null
            }}
        return axios.post('http://localhost:5000/news-article/find', params)
        .then(response =>{
            // const {data: {total_items, items} } = response.data
            // dispatch(fetchFashionArticles({total_items,items}))
            const {items} = response.data.data
            dispatch(fetchFashionArticles(items))
        })
    } catch (error) {
        console.error(error)
    }
}

export const sentFoodFilter =()=> async(dispatch)=>{
    try {
        let params = {pageSize: 1,
            pageNumber:2,
            filter: {
                article_title:null,
                username:null,
                category_name:'Food & Health',
                status: null
            }}
        return axios.post('http://localhost:5000/news-article/find', params)
        .then(response =>{
            // const {data: {total_items, items} } = response.data
            // dispatch(fetchFashionArticles({total_items,items}))
            const {items} = response.data.data
            dispatch(fetchFoodArticles(items))
        })
    } catch (error) {
        console.error(error)
    }
}
