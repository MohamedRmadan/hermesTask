import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Footer extends Component {
    render(){
        return(
            <div className='App-footer'>
                <Col>
                    <Row className='App-footer-quicklinks'>
                        <Col>
                            <Row style={{marginBottom: '5px'}}>
                                <label>POPULAR SEARCHES</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Cameras</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Electronics</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>TVs</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Supermarket</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Appliances</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Watches</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Mobile Phones</label>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginBottom: '5px'}}>
                                <label>MY ACCOUNT</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Account Information</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>My Shopping Cart</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>My Orders</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>My Addresses</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>My Wish List</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Track shipment</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Loyalty Points</label>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginBottom: '5px'}}>
                                <label>BUYING ON vaLU</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>About Us</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>How to Buy</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Terms & Conditions</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Return Policy</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Advertise with us</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>FAQ</label>
                            </Row>
                            <Row style={{color: '#919191'}}>
                                <label>Contact Us</label>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="App-footer-copyright">
                        <p style={{margin: 'auto'}}>© All Rights Reserved by valU 2020</p>
                    </Row>
                </Col>
            </div>  
        ) 
    }
}