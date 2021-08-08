import * as type from '../typeActions/type';
import axios from 'axios';


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

export const  getFeatureArticles = (data)=>{
    return {
        type: type.GET_FEATURE_ARTICLE,
        payload: data
    }
}

// export const fetchFashionArticlesSaga = (articles)=>{
//     return {
//         type: actionTypes.SET_FASHION_ARTICLE,
//         payload: articles
//     }
// }

// export const fetchFoodArticlesSaga = (articles)=>{
//     return {
//         type: actionTypes.GET_FOOD_ARTICLE_SAGA,
//         payload: articles
//     }
// }



// DISPATCH DATA KE ACTION:
export const sentFeatureArticles = ()=> async(dispatch)=>{
    try{
        const {data} = await axios.get('http://localhost:5000/news-article')

        dispatch(getFeatureArticles(data.data.rows))
        }
    catch(error){
        console.error(error)
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
