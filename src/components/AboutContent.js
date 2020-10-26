import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import {Col, Row, Card} from 'react-bootstrap';

import pdf from '../assets/resume/DevResume2020.pdf';


function AboutContent(props) {

    return(
        <Container className="pb-5" fluid={true}>
            <Card className="mx-auto" style={{maxWidth: "65rem", backgroundColor: "transparent", transition: "border-width 0.6s linear", boxShadow: "0 0 15px 1px #65f135"}}>
            <Row className="d-flex justify-content-center">
                <Col lg={4}>
                <img className="card-img" src="https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/profPic.png?raw=true" alt='' />
                </Col>
                <Col lg={8}>
                    <Card.Body>
                    {props.children}
                    </Card.Body>
                </Col>
            </Row>
            </Card>
            <Row className="mt-4 pt-5" fluid={true}>
                <Col className="d-flex justify-content-center">
                <a href="https://github.com/Michael-Veiga" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="grow fab fa-7x" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-veiga-473755142/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="grow fab fa-7x mx-5"/>
                    </a>
                    <a href={pdf} target="_blank" download="" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFile} className="grow far fa-7x ml-2" />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutContent;