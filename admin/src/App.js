import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;