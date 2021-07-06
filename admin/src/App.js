import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/admin" component={Index}></Route>
                <Redirect from="/" to="/admin" />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;