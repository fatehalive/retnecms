import {Link} from 'react-router-dom'


const GridSection = (props)=>{
const {category, imgHm,
        title, date, 
    user,comment,
     view,imgSt} = props

    return  <div className="col-md-6">
            <div className="title-section">
				<h1><span className="world">{category}</span></h1>
			</div>

            <div className="news-post image-post2">
				<div className="post-gallery">
					<img src={imgHm} alt=""/>
					<div className="hover-box">
						<div className="inner-hover">
							<h2><Link to="single-post.html">{title}</Link></h2>
							<ul className="post-tags">
								<li><i className="fa fa-clock-o"></i>{date}</li>
								<li><i className="fa fa-user"></i>by <Link to="#">{user}</Link></li>
								<li><Link to="#"><i className="fa fa-comments-o"></i><span>{comment}</span></Link></li>
								<li><i className="fa fa-eye"></i>{view}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

            <div className="row">
				<div className="col-md-6">

					<div className="item news-post standard-post">
						<div className="post-gallery">
							<img src={imgSt} alt=""/>
						</div>
						<div className="post-content">
							<h2><Link to="single-post.html">{title} </Link></h2>
							<ul className="post-tags">
								<li><i className="fa fa-clock-o"></i>{date}</li>
								<li><i className="fa fa-user"></i>by <Link to="#">{user}</Link></li>
								<li><Link to="#"><i className="fa fa-comments-o"></i><span>{comment}</span></Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-6">

					<div className="item news-post standard-post">
						<div className="post-gallery">
							<img src={imgSt} alt=""/>
						</div>
						<div className="post-content">
							<h2><Link to="single-post.html">{title}ue felis.</Link></h2>
							<ul className="post-tags">
								<li><i className="fa fa-clock-o"></i>{date}</li>
								<li><i className="fa fa-user"></i>by <Link to="#">{user}</Link></li>
								<li><Link to="#"><i className="fa fa-comments-o"></i><span>{comment}</span></Link></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
    </div>

}

export default GridSection;