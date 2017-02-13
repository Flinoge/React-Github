import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
document.getElementById("ClickMe").style.display = 'none';
document.getElementById("HelloWorld").addEventListener("click", function(){
	alert("Hello World");
});
document.getElementById("HelloWorld").addEventListener("mouseover", function(){
	document.getElementById("ClickMe").style.display = 'block';
});
document.getElementById("HelloWorld").addEventListener("mouseout", function(){
	document.getElementById("ClickMe").style.display = 'none';
});