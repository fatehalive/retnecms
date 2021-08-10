import {useDispatch,useSelector} from 'react-redux'
import React, { useEffect} from 'react';
import {Link} from 'react-router-dom'
import Data from './data'
import img1 from '../../../../../Upload/news-posts/7.jpg'
import { sentLatestArticles } from '../redux/action';

const MasonryBox = ()=>{
    const dispatch =useDispatch()
    // useEffect 
    useEffect(()=>{
        dispatch(sentLatestArticles())
    },[dispatch])

    const getLatestArticle = useSelector(state => state.latestArticles)
    const {latestArticles, error} = getLatestArticle;
    console.log('data latest Article =>', latestArticles)


    return  <div className="masonry-box">
                    <div className="title-section">
                        <h1><span>Latest Articles</span></h1>
                    </div>
                
                     <div className="latest-articles iso-call">
                            
                    {/* <div className="news-post standard-post3 default-size">
                                    <div className="post-gallery">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div className="post-title">
                                        <a className="category-post tech" href="tech.html">tech</a>
                                        <h2><Link to="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </Link></h2>
                                        <ul className="post-tags">
                                            <li><i className="fa fa-clock-o"></i>27 may 2013</li>
                                            <li><i className="fa fa-user"></i>by <Link to="#">John Doe</Link></li>
                                            <li><Link to="#"><i className="fa fa-comments-o"></i><span>23</span></Link></li>
                                        </ul>
                                    </div>
                    </div> */}
                        
                        {latestArticles.map((data)=>{
                            // let category =[data.category.category_name]
                            return <div className="news-post standard-post3" key={data.uuid}>
                                        <div className="post-gallery">
                                            <img width={'370px'} height={'260px'} src={data.image1_url} alt="gambar"/>
                                        </div>
                                        <div className="post-title">
                                            <Link to="#" className={`category-post tech`}>{data.category.category_name}</Link>
                                            <h2><Link to="single-post.html">{data.article_title} </Link></h2>
                                            <ul className="post-tags">
                                                <li><i className="fa fa-clock-o"></i>{data.createdAt}</li>
                                                <li><i className="fa fa-user"></i>by <Link to="#">{data.user.username}</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments-o"></i><span>{data.comment}</span></Link></li>
                                            </ul>
                                        </div>
                                     </div>
                        })}

                            {/* {Data.map((data, index)=>{
                            // let category =[data.category.category_name]
                            return <div className="news-post standard-post3 default-size" key={index}>
                                        <div className="post-gallery">
                                            <img src={data.img} alt="gambar"/>
                                        </div>
                                        <div className="post-title">
                                            <Link to='#' className={data.categorPOst}>{data.category}</Link>
                                            <h2><Link to="single-post.html">{data.title} </Link></h2>
                                            <ul className="post-tags">
                                                <li><i className="fa fa-clock-o"></i>{data.date}</li>
                                                <li><i className="fa fa-user"></i>by <Link to="#">{data.user}</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments-o"></i><span>{data.comment}</span></Link></li>
                                            </ul>
                                        </div>
                                     </div>
                        })} */}
                           
                    </div>
            </div>
         
}

export default MasonryBox;