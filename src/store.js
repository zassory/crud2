import {
    createStore ,
    applyMiddleware ,
    compose
} from 'redux';

import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    //El store cuenta con
    reducer,
    //Y se compone de
    compose(
        applyMiddleware(thunk),
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;