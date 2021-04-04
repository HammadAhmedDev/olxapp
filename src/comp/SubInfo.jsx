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
                <tr className='tableHeading' >
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
                               <input type="image" src={facebookIcon} alt=""/>
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
                
                    <td><a href="#flatsForrent">Flats for rent</a></td>
                    <td><a href="#watches">Watches</a></td>
                    <td><a href="#OlxBlog">OLX Blog</a></td>
                    <td><a href="#Sitemap">Sitemap</a></td>
                    <td></td>
                </tr>
                <tr className='linkInfo'>
                    <td><a href="#Jobs">Jobs</a></td>
                    <td><a href="#Books">Books</a></td>
                    <td><a href="#Contact Us">Contact Us</a> </td>
                    <td><a href="#Legal & Privacy information">Legal & Privacy information</a></td>
                    <td rowSpan='2'></td>
                </tr>
                <tr className='linkInfo'>
                    <td><a href="#Mobile Phones">Mobile Phones</a></td>
                    <td><a href="#Dogs">Dogs</a></td>
                    <td><a href="#OLX for Businesses">OLX for Businesses</a></td>
                    <td></td>
                    <td>
                    <ul className="socialLink">
                            <li>
                               <input type="image" src={facebookIcon} alt=""/>
                            </li>
                            <li>
                               <input type="image" src={twitterIcon} alt=""/>
                            </li>
                        </ul>
                    </td>
                </tr>

            </table>
        </Row>
    );

}