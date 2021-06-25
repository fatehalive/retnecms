import {Link} from 'react-router-dom'

const CarouselFeatureToday =(props)=>{
    const {category, date,
        imgSrc, title,
         user, comment} = props

    return <div className="item news-post standard-post">
        <div className="post-gallery">
            <img src={imgSrc} alt=""/>
            <Link className="category-post fashion" to="/fashion.html">{category}</Link>
        </div>
        <div className="post-content">
            <h2><Link to="/article">{title}</Link></h2>
			<ul className="post-tags">
				<li><i className="fa fa-clock-o"></i>{date}</li>
				<li><i className="fa fa-user"></i>by <Link to="#">{user}</Link></li>
				<li><Link to="#"><i className="fa fa-comments-o"></i><span>{comment}</span></Link></li>
			</ul>
        </div>
    </div>
}


export default CarouselFeatureToday;