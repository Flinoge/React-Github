import React, { Component } from 'react';
import './App.css';
import {Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Title from './Title';
import Footer from './Footer';

export default class BiS extends Component {
    render() {
        return (
            <div className="BiS">
                <Title></Title>
                <Navbar></Navbar>
                <Row>
                    <Col xs={12} md={12}>
                        
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    };
}