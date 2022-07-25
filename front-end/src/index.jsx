import React from "react";
import ReactDOM  from "react-dom";
import App from "./main/app";
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>
    , document.getElementById('app')
)