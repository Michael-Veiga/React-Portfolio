import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function Content(props) {

    return(
        <Container className="pb-5" fluid={true}>
        <Row className="my-3">
          <Col className="d-flex justify-content-center">
            <h4 className="text-white text-center" style={{transition: "border-width 0.6s linear", boxShadow: "0 11px 15px -8px #65f135", }}>Feel free to email me using the following form, or via the contact information below.</h4>
            </Col>
        </Row>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
          <Row className="my-3">
          <Col className="d-flex justify-content-center p-0 text-white">
          <h5 className="mb-0">Contact Information:</h5>
          <div className="mx-3">
          <FontAwesomeIcon icon={faPhone} className="fab mr-2" alt="" style={{height: "2rem", width: "2rem", margin: "-.3rem"}}/>
            603-305-2990
          </div>
          <div className="mx-3">
          <FontAwesomeIcon icon={faEnvelope} className="fab mr-2" alt="" style={{height: "2rem", width: "2rem", margin: "-.3rem"}}/>
          mvee333@gmail.com
          </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Content;