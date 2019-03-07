import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import friendsReducer from './reducers';

const store = createStore(friendsReducer, applyMiddleware(thunk))
  
ReactDOM.render(
        <Provider>
            <App />
        </Provider>, 

document.getElementById('root'));
