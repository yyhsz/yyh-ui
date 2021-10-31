/*
 * @Author: your name
 * @Date: 2021-10-27 13:10:38
 * @LastEditTime: 2021-10-27 15:32:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-ui\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./my.scss";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Icon from "./icon/index";

ReactDOM.render(
  <React.StrictMode>
    <Icon name="baidu" className="123123" style={{ fill: "green" }} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
