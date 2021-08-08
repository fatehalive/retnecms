import * as type from './types';
import axios from 'axios';

export const  getFeatureArticles = (data)=>{
    return {
        type: type.GET_FEATURE_ARTICLE,
        payload: data
    }
}


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