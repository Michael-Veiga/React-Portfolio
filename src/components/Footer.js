import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true} >
        <Row className="foot-effect p-3">
          <Col className="p-0 d-flex justify-content-end text-white">
            This site was made by Michael Veiga
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
