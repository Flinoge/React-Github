import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Title from './Title'



export default class GoodMorning extends Component {
    render() {
        return (
            <div className="App">
                <Title></Title>
                <br/>
                <Navbar></Navbar>
                <div id="HelloWorld">Good Morning World</div>
            </div>
        );
    }
}

