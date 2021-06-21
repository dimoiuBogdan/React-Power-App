import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./STORE/store";

const firebaseConfig = {
  apiKey: "AIzaSyCYZMV79GPhhpVZqEuVIM11ZNS55L1nEhA",
  authDomain: "react-power-app.firebaseapp.com",
  projectId: "react-power-app",
  storageBucket: "react-power-app.appspot.com",
  messagingSenderId: "19501697371",
  appId: "1:19501697371:web:42e4b72ed536d47fc5727e",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
