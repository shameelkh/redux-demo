import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import './index.css';
import AppReducer from './reducers'

let store = createStore(AppReducer)

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));