import axios from "axios"

export const getArticlePage = (data)=>{
  return{
    type: 'GET_ARTICLE_PAGE',
    payload: data
  }
}

export const sentArticlePage = (route)=> async(dispatch)=>{
  try{
    const {data} = await axios.get(`http://localhost:5000/news-article/${route}`)
    dispatch(getArticlePage(data))
  }catch(err){
    console.log(err)
  }
}