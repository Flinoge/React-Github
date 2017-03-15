import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar'
import Title from './Title'



export default class GoodNight extends Component {
    render() {
        return (
            <div className="App">
                <Title></Title>
                <br/>
                <Navbar></Navbar>
                <div id="HelloWorld">Good Night World</div>
            </div>
        );
    }
}

