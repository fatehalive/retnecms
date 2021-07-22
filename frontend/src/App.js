import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// component
import SinglePost from './pages/SinglePost/SinglePost8'
import HomePage from './pages/Homepages/Homepage6'
import Header from './Component/Header/MainHeader'
import Footer from './Component/Home/Footer/Footer'

function App() {

  return (
    <div>
      <Router>
        {/* HEADER */}
        <Header/>
        {/* MAIN */}
        <Switch>
          <Route path="/article">
            <SinglePost/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>

        {/* FOOTER */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
