import React, { Component } from 'react';
import './App.css';


import { Link } from "react-router";

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="Bye">Bye World</Link></li>
                    <li><Link to="GoodMorning">Good Morning World</Link></li>
                    <li><Link to="GoodNight">Good Night World</Link></li>
                </ul>
            </div>
        );
    };
}

