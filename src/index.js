import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Chat from "./pages/Chat";
import { BrowserRouter, Route } from "react-router";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
