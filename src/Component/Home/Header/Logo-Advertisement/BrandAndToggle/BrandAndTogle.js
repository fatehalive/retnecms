// import ImageData from '../Images/ImageData'

const BrandAndToggle = ()=>{
  //PROPS
  
    // <!-- Brand and toggle get grouped for better mobile display -->
    return <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
	      	<a className="navbar-brand" href="index.html"><img src={process.env.PUBLIC_URL + '/Images/logo.png'} alt=""/></a>
        </div>

        <div classNameName="advertisement">
							<div className="desktop-advert">
								<span>Advertisement</span>
								<img src={process.env.PUBLIC_URL + '/Upload/addsense/728x90.jpg'} alt=""/>
							</div>
							<div className="tablet-advert">
								<span>Advertisement</span>
								<img src={process.env.PUBLIC_URL + '/Upload/addsense/468x60.jpg'} alt=""/>
							</div>
						</div>
      </div>
    
}

export default BrandAndToggle;