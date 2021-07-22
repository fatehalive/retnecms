import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

// COMPONENT
import GridSection from './GridSectionFood';
import GridSectionFashion from './GridSectionFashion';

const MainGridBox = ()=>{

        // STATE:
        const [articles, setArticle] = useState([]);
        const [articles2, setArticle2] = useState([]);

        // console.log('article', articles)
        // console.log('article2', articles2)

        useEffect (()=>{
            dataArticle1();
            dataArticle2();
          
        },[])

        const dataArticle1 = ()=>{
            axios.post('http://localhost:5000/news-article/find',{pageSize: 1,
            pageNumber:1,
            filter: {
                article_title:null,
                username:null,
                category_name:'Fashion',
                status: null
              }})
            .then(response=>{
                const {items} = response.data.data;
                // console.log(items)
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
                            key= {index, article.category_name, article.username}
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

export default MainGridBox