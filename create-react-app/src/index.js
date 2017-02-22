import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from './App';
import Bye from './Bye';
import GoodMorning from './GoodMorning';
import GoodNight from './GoodNight';


const app = document.getElementById("root");

ReactDOM.render(
  <Router history={hashHistory}>
	  <Route path="/" component={App}></Route>
	  <Route path="Bye" component={Bye}></Route>
	  <Route path="GoodMorning" component={GoodMorning}></Route>
	  <Route path="GoodNight" component={GoodNight}></Route>
  </Router>,
	app
);

