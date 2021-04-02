import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'

function SlideImage(){
    return(
        <Row className="SlidImg">
            <Image src="Slide Image Laptop Size.jpg" fluid />
            
        </Row>
    )
}

export default SlideImage;