import Data from './Data'

// import {useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';

// COMPONENT
import CarouselFeatureToday from './CarouselFeatureToday'
import { sentFeatureArticles } from '../../../../redux/action/actionUser';



const MainFeatureToday = ()=>{
// STATE
// const [articles, setFiturArticle] = useState([]);
// console.log('article =>', articles)
    
    const dispatch = useDispatch()
    const getMainFeature = useSelector(state=> state.featureToday);
    
    const {articleFilter, error, mainFeature} = getMainFeature;

    console.log('data=>', mainFeature);
    useEffect(() => {
        dispatch(sentFeatureArticles())
    }, [dispatch])


    return <section className="features-today second-style">
            
                <div className="container">

                    <div className="title-section">
                        <h1><span>Today's Featured</span></h1>
                    </div>

                          
                        <div className="features-today-box owl-wrapper">
					    <div className="owl-carousel" data-num="4">
                            {mainFeature.map((article,index)=>{
                                // let date= article.createdAt
                                // console.log(article.image1_url)
                                return <div>
                                    <CarouselFeatureToday  
                                        key={article.uuid}
                                        category={article.category.category_name}
                                        // date={date}
                                        imgSrc={article.image1_url}
                                        user={article.user.username}
                                        // comment={article.comment}
                                        title={article.article_title}
                                    />
                                </div>
                            })}


                             {/* {Data.map((article,index)=>{
                                // let date = article.createdAt
                                console.log(article.image1_url)
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
                                </div> 
                                })}*/}
                        </div>   
                    </div>
                </div>
            </section>
                
}

export default MainFeatureToday;