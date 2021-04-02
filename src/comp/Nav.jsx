import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    return(
        <Row className='Nav'>
            <Col className="catBox col-2">
                <button className="btn-AllCate">
                    <b>ALL CATEGORIES</b>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button>
            </Col>
            <Col className="ListBox col-10" >
                <ul className="list">
                <li><a href="http://">Mobile Phones</a></li>
                <li><a href="http://">Cars</a></li>
                <li><a href="http://">Motorcycles</a></li>
                <li><a href="http://">Houses</a></li>
                <li><a href="http://">TV-Video-Audio</a></li>
                <li><a href="http://">Tablets</a></li>
                <li><a href="http://">Land & Plots</a></li>
                </ul>
            </Col>
        </Row>     
    )
}
export default Nav;