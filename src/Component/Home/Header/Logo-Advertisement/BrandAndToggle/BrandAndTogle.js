import ImageData from '../Images/ImageData'

const BrandAndToggle = ()=>{
    // <!-- Brand and toggle get grouped for better mobile display -->
    return <div className="navbar-header">
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
        </button>
		<a className="navbar-brand" href="index.html"><img src={ImageData.logo} alt=""/></a>
    </div>
}