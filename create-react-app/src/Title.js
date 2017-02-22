import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




export default class Title extends Component {
    render() {
        return (
            <div className="App-header">
                <div class="bottomNav">
                    To navigate to different worlds, select your world.
                </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>I am a cool spining logo, rawr.</h2><br/>
            </div>
        );
    }
}

