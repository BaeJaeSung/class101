import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App";
import Cart from "./cart/Cart";
import Headers from './Headers';
// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (

  <Router>
    <Headers/>
    <Route path="/cart/:cartItems" component={Cart} />
  </Router>
)
