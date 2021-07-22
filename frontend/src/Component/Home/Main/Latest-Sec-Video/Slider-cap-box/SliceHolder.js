let Data = [
    {link:"http://player.vimeo.com/video/156257423?title=0&amp;byline=0&amp;portrait=0"},
    {link:"http://player.vimeo.com/video/156856852?title=0&amp;byline=0&amp;portrait=0"},
    {link:"http://player.vimeo.com/video/156257423?title=0&amp;byline=0&amp;portrait=0"},
    {link:"http://player.vimeo.com/video/156856852?title=0&amp;byline=0&amp;portrait=0"},
]

const SliceHolder =()=>{
    return  <div className="slider-holder">
				<ul className="slider-call">
                    {Data.map((data, index)=>{
                        return<li key={index}>
                            <div className="news-post iframe-post">
									{/* <!-- Vimeo --> */}
									<iframe title='videoembed' className="videoembed" src={data.link} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
									{/* <!-- End Vimeo --> */}
								</div>
                        </li>
                    })}
                </ul>
        
    </div>
}

export default SliceHolder;