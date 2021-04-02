import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from  'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from "../comp/images/Olx logo.png"
import { logDOM } from '@testing-library/dom';
function Header(){
    return(
        <Row className = "header">
            <Col className='imageBox col-1'>
                <img src={Logo}   alt="olxLogo" className="logo"/>
            </Col>
            
            <div className='search search1 col-2'>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                
                <input type="search" name="" id="" value={"Pakistan"}/>
                <button>
                    <FontAwesomeIcon icon={faChevronDown} size={"56px"}/>
                </button>
            </div>
            <div className='search search2  col-7'>
                <input type="search" name="" id="" placeholder={"Find Cars, Mobiles Phones and more..."}  />
    
                <button  className ='S2'>
                    <FontAwesomeIcon icon={faSearch} color={'white'} size={90} />
                </button>
             
            </div>
                   
            
            
            <Col className = 'loginBox col-1'>
                <a href="#login"><h5>Login</h5></a>
                <button className="Sell" >
                    <FontAwesomeIcon icon={faPlus}/>
                    <h6>SELL</h6>
                </button>

            </Col>
            
        </Row>

    );
}


export default Header;


// Font awesome pixel sizes relative to the multiplier. 
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px
