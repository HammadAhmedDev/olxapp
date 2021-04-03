import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/phone-app.webp';
import apple from './images/appstore_2x.webp';
import anroid from './images/playstore_2x.webp';
export default function Info(){
    return(
        <Row>
            <Col className="infoContainer">
                <img src={image} alt=""/>
                <div className="infotext">
                    <h2>TRY THE OLX APP</h2>
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div className="outer">
                <div className="AppBox">
                    <p>GET YOUR APP TODAY</p>
                    <div className="StoreBox">
                        <a href="#AppleStore"><img src={apple} alt=""/></a>
                        <a href="#GoogleStore"><img src={anroid} alt=""/></a>

                    </div>
                    </div>
                </div>
            </Col>
        </Row>
        
        
    );
}