import TopLine from './Top-Line/Top-LIne'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Header = ()=>{

    return (
        <div className="clearfix sixth-style">
			{/* <!-- Bootstrap navbar --> */}
            <div className="navbar navbar-default navbar-static-top" role="navigation">
                <Router>
                    <TopLine/>
                    <Switch>
                        <Route/>
                    </Switch>
                </Router>
            </div>
        </div>
    )

}

export default Header;