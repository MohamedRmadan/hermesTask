import React, { Component } from 'react'
import {GoLocation} from 'react-icons/go'
import {BsArrowCounterclockwise } from 'react-icons/bs'
import {ImCancelCircle } from 'react-icons/im'
import { Col, Row } from 'reactstrap'

export default class Header extends Component {
    render(){
        return(
            <div className='App-header'>
                <Col >
                    <Row className='App-header-mainbar'>
                        <p style={{marginLeft: '80px', marginTop:'5px'}}>
                            <GoLocation/> &nbsp; Track Your Orders &nbsp;&nbsp;&nbsp;

                            <BsArrowCounterclockwise/> &nbsp; Free & Easy Returns &nbsp;&nbsp;&nbsp;

                            <ImCancelCircle/> &nbsp; Online Cancellations
                        </p>
                    </Row>
                    <Row className = 'App-header-logo'>
                        <img style={{marginLeft: '80px'}} src='/logo.png' alt='logo' height='80px' width='200px'/>
                    </Row>
                </Col>
            </div>  
        ) 
    }
}