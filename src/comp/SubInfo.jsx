import React from 'react';
import Row from 'react-bootstrap/Row';


export default function SubInfoBox(){
    return(
        <Row>
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
                    <td className="socialLink">
                        <ul>
                            <li>
                               <input type="image" src="src\comp\images\facebook icon.png" alt=""/>
                            </li>
                            <li></li>
                            <li></li>
                            <li>    </li>
                        </ul>
                    </td>
                </tr>
                <tr className='linkInfo'>
                    <td>Watches</td>
                    <td>OLX Blog</td>
                    <td>Sitemap</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='linkInfo'>
                    <td>Jobs</td>
                    <td>Books</td>
                    <td>Contact Us </td>
                    <td>Legal & Privacy information</td>
                    <td></td>
                </tr>
                <tr className='linkInfo'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        </Row>
    );

}