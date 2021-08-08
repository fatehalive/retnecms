import * as type from '../typeActions/type';
import axios from 'axios';


// export const fetchFoodArticles = (articles)=>{
//     return {
//         type: type.GET_FOOD_ARTICLE,
//         payload: articles
//     }
// }

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




// export const getArticleFilter = ()=> dispatch => {
//     return axios.post('http://localhost:5000/news-article/find',{pageSize: 1,
//         pageNumber:2,
//         filter: {
//             article_title:null,
//             username:null,
//             category_name:'Fashion',
//             status: null
//         }})
//         .then( res => {
//             const data = res.data.data.item;
//                 // dispatch(fetchFashionArticles(data))
//             if(res.data.data.item){
//                 dispatch({
//                     type: actionTypes.GET_FASHION_ARTICLE,
//                     payload: data
//                 })
//             }
//         })
//         .catch(err=>{
//             console.error(err)
//         })
// }



export const sentFeatureArticles = ()=> async(dispatch)=>{
    try{
        const {data} = await axios.get('http://localhost:5000/news-article')
        dispatch(getFeatureArticles(data.data.rows))
        
        }
    catch(error){
        console.error(error)
        }
    }

export const sentArticleFilter =()=> async(dispatch)=>{
    try {
        
    } catch (error) {
        console.error(error)
    }
}