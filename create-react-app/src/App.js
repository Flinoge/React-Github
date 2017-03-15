import React, { Component } from 'react';
import './App.css';

import Navbar from './navbar'
import Title from './Title'
import MyForm from './Form'

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Title></Title>
          <br/>
          <Navbar></Navbar>
          <div id="HelloWorld">Contact</div>
          <MyForm></MyForm>
      </div>
    );
  };
}


