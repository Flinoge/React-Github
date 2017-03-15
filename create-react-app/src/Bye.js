import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar'
import Title from './Title'


export default class Bye extends Component {
    render() {
        return (
            <div className="App">
                <Title></Title>
                <br/>
                <Navbar></Navbar>
                <div id="HelloWorld">Bye World</div>
            </div>
        );
    }
}

