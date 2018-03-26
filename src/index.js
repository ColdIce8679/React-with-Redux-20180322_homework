import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import home from './components/home';
import result from './components/result';

const store = createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument()) // 解決異部問題
);

const history = syncHistoryWithStore(browserHistory, store); // 讓history store 互通cookie

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={home}></Route>
            <Route path='/home' component={home}></Route>
            <Route path='/result' component={result}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
