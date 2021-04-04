import React from 'react';
import Row from 'react-bootstrap/Row';
import facebookIcon from './images/facebook icon.png';
import twitterIcon from './images/twitter icon.png';
import instaIcon from './images/insta icon.png';
import playIcon from './images/playicon.png'
export default function SubInfoBox(){
    return(
        <Row className='SubInfoContainer'>
            <table className='SubInfoContainer'>
                <tr className='tableHeading'>
                    <th>POPULAR CATEGORIES</th>
                    <th>TRENDING SEARCHES</th>
                    <th>ABOUT US</th>
                    <th>OLX</th>
                    <th>FOLLOW US</th>
                </tr>
                <tr className='linkInfo'>
                    <td><a href="#Cars">Cars</a></td>
                    <td><a href="#Bikes">Bikes</a></td>
                    <td><a href="#AboutOlxGroups">About Olx Group</a></td>
                    <td><a href="Help">Help</a></td>
                    <td rowSpan="2">
                        <ul className="socialLink">
                            <li>
                               <input type="image" src={facebookIcon} width='1px' alt=""/>
                            </li>
                            <li>
                               <input type="image" src={twitterIcon} alt=""/>
                            </li>
                            <li>
                               <input type="image" src={playIcon} alt=""/>
                            </li>
                            <li>
                               <input type="image" src={instaIcon} alt=""/>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr className='linkInfo'>
                
                    <td>Flats for rent</td>
                    <td>Watches</td>
                    <td>OLX Blog</td>
                    <td>Sitemap</td>
                    <td></td>
                </tr>
                <tr className='linkInfo'>
                    <td>Jobs</td>
                    <td>Books</td>
                    <td>Contact Us </td>
                    <td>Legal & Privacy information</td>
                    <td rowSpan='2'></td>
                </tr>
                <tr className='linkInfo'>
                    <td>Mobile Phones</td>
                    <td>Dogs</td>
                    <td>OLX for Businesses</td>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        </Row>
    );

}