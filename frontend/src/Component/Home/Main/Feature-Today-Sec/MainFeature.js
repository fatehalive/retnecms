import Data from './Data'

import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

// COMPONENT
import CarouselFeatureToday from './CarouselFeatureToday'


const MainFeatureToday = ()=>{
// STATE
const [articles, setFiturArticle] = useState([]);
    console.log(articles)

    useEffect(() => {
        dataFitur()
    }, [])

    // FUNCTION 
    const dataFitur = () =>{
        axios.get('http://localhost:5000/news-article')
        .then(response => {
            const {data} = response.data;
            
            if(response.data) {
                setFiturArticle(data.rows)
            } else {
                alert('Check your server')
                console.error(response)
            }
        }) 
        .catch(error =>{
            console.error(error)
        })
    }


    return <section className="features-today second-style">
            
                <div className="container">

                    <div className="title-section">
                        <h1><span>Today's Featured</span></h1>
                    </div>

                          
                        <div className="features-today-box owl-wrapper">
					    <div className="owl-carousel" data-num="4">
                            {articles.length > 0 && articles.map((article,index)=>{
                                let date= article.createdAt
                                // console.log(article.image1_url)
                                return <div>
                                    <CarouselFeatureToday  
                                        key={article.uuid}
                                        category={article.category.category_name}
                                        date={date}
                                        imgSrc={article.image1_url}
                                        user={article.user.username}
                                        // comment={article.comment}
                                        title={article.article_title}
                                    />
                                </div>
                            })}

                            {/* {Data.map((article,index)=>{
                                // let date = article.createdAt
                                // console.log(article.image1_url)
                                return <div>
                                    <CarouselFeatureToday  
                                        key={index}
                                        category={article.category}
                                        date={article.date}
                                        imgSrc={article.img}
                                        user={article.user}
                                        // comment={article.comment}
                                        title={article.title}
                                    />
                                </div>  })} */}                     
                        </div>   
                    </div>
                </div>
            </section>
                
}

export default MainFeatureToday;