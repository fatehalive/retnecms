// import {useHistory} from 'react-router-dom';
import React, { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

// COMPONENT
import GridSection from './GridSectionFood';
import GridSectionFashion from './GridSectionFashion';
import { sentFashionFilter, sentFoodFilter } from '../../../../../redux/action/actionUser';

const MainGridBox = ()=>{
    
        const dispatch = useDispatch();
        const getFashionArticle = useSelector(state => state.articlesFilter)

        const {fashionArticle,foodArticle, error} = getFashionArticle;

        // USEEFFECT
        useEffect (()=>{
            dispatch(sentFashionFilter())
            dispatch(sentFoodFilter())
          
        },[dispatch])
    

    return <div className="grid-box">
                <div className="row">   
                    {fashionArticle.map((article,index)=>{
                        let date= article.createdAt
                        // const {category_name, username} = article 
                        return <div>
                            <GridSection 
                            key= {article.uuid}
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

                        {foodArticle.map((article,index)=>{
                        let date= article.createdAt
                        // const {category_name, username} = article 
                        return <div>
                            <GridSectionFashion
                            key= {article.uuid}
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

export default MainGridBox;
