import { combineReducers } from 'redux'
import home from './home';
import { routerReducer } from 'react-router-redux';

const root_reducer = combineReducers({
    data: home,
    routing: routerReducer
})

export default root_reducer;