import axios from "axios"
import config from "../../../../../config"

export const getArticlePage = (data)=>{
  return{
    type: 'GET_ARTICLE_PAGE',
    payload: data
  }
}

export const getNextArticlePage = (data)=>{
  return{
    type: 'GET_NEXT_ARTICLE_PAGE',
    payload: data
  }
}

export const sentArticlePage = (route)=> async(dispatch)=>{
  try{
    const {data} = await axios.get(config.WS_BASE_URL + `/news-article/${route}`)
    console.log(route)
    dispatch(getArticlePage(data))
  }catch(err){
    console.log(err)
  }
}

export const sentNextArticlePage = (nextRoute)=> async(dispatch)=>{
  try{
    const {data} = await axios.get(config.WS_BASE_URL + `/news-article/${nextRoute}`)
    console.log(data);
    dispatch(getNextArticlePage(data))
  }catch(err){
    console.log(err)
  }
}