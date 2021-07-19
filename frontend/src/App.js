import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SinglePost from './pages/SinglePost/SinglePost8'
import HomePage from './pages/Homepages/Homepage6'

function App() {

  return (
    <div>
      <Router>
        {/* tambahin */}
        <Switch>
          <Route path="/article">
            <SinglePost/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
