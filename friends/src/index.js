import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import friendsReducer from './reducers';
import logger from 'redux-logger';
const store = createStore(friendsReducer, applyMiddleware(thunk, logger))
  
ReactDOM.render(
        <Provider store ={store}>
            <App />
        </Provider>, 

document.getElementById('root'));
