import { Provider } from "react-redux";
import store from "./redux/store";
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
  <React.StrictMode>
//Just like below 👇
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);