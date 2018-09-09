// import React stuff
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//import components
import Main from './components/Main/Main';
import Single from './components/Single/Single';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';

//import Routing methods and browserHistory
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history }  from 'react-redux';

const router = (
    <Provider store= {store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>           
        </Router>
    </Provider>
)
render(router, document.getElementById('root'));