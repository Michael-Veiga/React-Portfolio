import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profPic from '../assets/images/profPic.png';

function AboutContent(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={2}>
                <img className="p-pic-image pr-2" src={profPic} alt=''/>
                </Col>
                <Col md={5}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default AboutContent;