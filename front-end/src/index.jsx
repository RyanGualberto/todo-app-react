import React from "react";
import ReactDOM  from "react-dom";
import App from "./main/app";
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import { applyMiddleware ,createStore} from 'redux'
import { Provider } from 'react-redux'
import promise from "redux-promise";
import multi from 'redux-multi'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>
    , document.getElementById('app')
)