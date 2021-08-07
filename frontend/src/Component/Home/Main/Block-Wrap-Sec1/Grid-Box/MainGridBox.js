import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';

// COMPONENT
import GridSection from './GridSectionFood';
import GridSectionFashion from './GridSectionFashion';
import { fetchFashionArticlesSaga, getArticleFilter } from '../../../../../redux/action/actionUser';

const MainGridBox = (props)=>{
        // const {articlesFashion, getArticlesFilter} = props
        // STATE:
        const [articles, setArticle] = useState([]);
        const [articles2, setArticle2] = useState([]);

        const dispatch = useDispatch();
        const getFashionArticle = useSelector(state => state.articlesFashion)

        // console.log('Fashion', articles)
        // console.log('article2', articles2)
        // console.log('Fashion in redux Saga=>', articlesFashion);
        // console.log('Fashion in redux Saga=>', getFashionArticle);


        useEffect (()=>{
            // dispatch(getArticleFilter())
            dataArticle1()
            dataArticle2()
          
        },[dispatch])
    
        const dataArticle1 = ()=>{
            axios.post('http://localhost:5000/news-article/find',{pageSize: 1,
            pageNumber:2,
            filter: {
                article_title:null,
                username:null,
                category_name:'Fashion',
                status: null
            }})
            .then(response=>{
                const {items} = response.data.data;
                // console.log(response.data)
                // console.log(response.data.data)
                // console.log('item=>', items)
                if(response.data.data) {
                    // console.table(items);
                    setArticle(items);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.warn(response);
                }
            }) 
            .catch(error => {
                // alert(`Check Your Server!`);
                console.error(error);
            })
        }
        
        const dataArticle2 = ()=>{
            axios.post('http://localhost:5000/news-article/find',{pageSize: 1,
            pageNumber:1,
            filter: {
                article_title:null,
                username:null,
                category_name:'Food & Health',
                status: null
            }})
            .then(response=>{
                const {items} = response.data.data;
                // console.log(items)
                if(response.data.data) {
                    // console.table(items);
                    setArticle2(items);
                } else {
                    alert(`Your Server is okay, check your DB`);
                    console.warn(response);
                }
            }) 
            .catch(error => {
                // alert(`Check Your Server!`);
                console.error(error);
            })
        }


    return <div className="grid-box">
                <div className="row">   
                    {articles.map((article,index)=>{
                        let date= article.createdAt
                        // const {category_name, username} = article 
                        return <div>
                            <GridSection 
                            key= {articles.uuid}
                            category = {article.category.category_name}
                            imgHm = {article.image1_url}
                            title= {article.article_title}
                            date= {date}
                            user={article.user.username}
                            // comment = {article.comment}
                            // view= {article.view}
                            imgSt={article.image2_url}
                            />
                        </div>
                    })}

                        {articles2.map((article,index)=>{
                        let date= article.createdAt
                        // const {category_name, username} = article 
                        return <div>
                            <GridSectionFashion
                            key= {articles.uuid}
                            category = {article.category.category_name}
                            imgHm = {article.image1_url}
                            title= {article.article_title}
                            date= {date}
                            user={article.user.username}
                            // comment = {article.comment}
                            // view= {article.view}
                            imgSt={article.image2_url}
                            />
                        </div>
                    })}
                </div>
            </div>
}

// const mapStateToProps = state =>{
//     return {
//         articlesFashion : state.articlesFashion
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return {
//         getArticlesFilter: ()=> dispatch(getArticleFilter())
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(MainGridBox);
export default MainGridBox;
