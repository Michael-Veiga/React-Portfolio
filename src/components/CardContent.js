import React from 'react';
import {Col, Row, Card} from 'react-bootstrap';

import '../index.css'


function CardContent(props) {

    return(
        <div>
        <Card className="my-5 mx-auto" style={{maxWidth: "1110px", backgroundColor: "transparent", transition: "border-width 0.6s linear", boxShadow: "0 0 15px 1px #65f135"}}>
        <Row className="no-gutters">
        <Col md={4}>
            <img className="card-img" src="https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/planetPic.png?raw=true" alt="" />
        </Col>
        <Col md={8}>
            <Card.Body className="py-0 text-center mt-2">
            <p className="g-card-title text-white">Professor Planet</p>
            <p className="g-card-sub-title text-white">An educational resource for people interested in space and our solar system</p>
            <a className="badge badge-success mx-2 mt-2" href="https://bowdwin.github.io/Project-1/" target="_blank" rel="noopener noreferrer">Professor Planet Link</a>
            <a className="badge badge-success" href="https://github.com/bowdwin/Project-1.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
            <div className="text-center mt-4">
            <i className="devicon-html5-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i className="devicon-css3-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-sass-original" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i className="devicon-javascript-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-jquery-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-github-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            </div>
            </Card.Body>    
            </Col>
        </Row>
        </Card>
        <Card className="my-5 mx-auto" style={{maxWidth: "1110px", backgroundColor: "transparent", transition: "border-width 0.6s linear", boxShadow: "0 0 15px 1px #65f135"}}>
        <Row className="no-gutters">
        <Col md={4}>
            <img className="card-img" src="https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/kickTout.JPG?raw=true" alt="" />
        </Col>
        <Col md={8}>
            <Card.Body className="py-0 text-center mt-2">
            <p className="g-card-title text-white">Kick-Tout</p>
            <p className="g-card-sub-title text-white">A forum that connects users who want to sell or trade shoes</p>
            <a className="badge badge-success mx-2 mt-2" href="https://kicktout.herokuapp.com/" target="_blank" rel="noopener noreferrer">Kick-Tout Link</a>
            <a className="badge badge-success" href="https://github.com/jbouchard13/project-3.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
            <div className="text-center mt-4">
            <i className="devicon-css3-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-mysql-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-express-original" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-react-original-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-nodejs-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i className="devicon-javascript-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-sequelize-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-bootstrap-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-heroku-original-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            </div>
            </Card.Body> 
            </Col>
        </Row>
        </Card>
        <Card className="my-5 mx-auto" style={{maxWidth: "1110px", backgroundColor: "transparent", transition: "border-width 0.6s linear", boxShadow: "0 0 15px 1px #65f135"}}>
        <Row className="no-gutters">
        <Col md={4}>
            <img className="card-img" src="https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/guruPic.png?raw=true" alt="" />
        </Col>
        <Col md={8}>
            <Card.Body className="py-0 mt-2 text-center">
            <p className="g-card-title text-white">Food Guru</p>
            <p className="g-card-sub-title text-white">A meal planning app that allows users to search for and save their favorite recipes</p>
            <a className="badge badge-success mx-2 mt-2" href="https://arcane-coast-86770.herokuapp.com/" target="_blank" rel="noopener noreferrer">Food Guru Link</a>
            <a className="badge badge-success" href="https://github.com/gavinspotter/project2" target="_blank" rel="noopener noreferrer">Github Repository</a>
            <div className="text-center mt-4">
            <i className="devicon-html5-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i className="devicon-css3-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-sass-original" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i className="devicon-javascript-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-jquery-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-mysql-plain" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-nodejs-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-bootstrap-plain-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            <i class="devicon-heroku-original-wordmark" style={{fontSize: "2.5rem", color: "white", padding: "1rem"}}></i>
            </div>
            </Card.Body> 
            </Col>
        </Row>
        </Card>
        </div>
    );
}

export default CardContent;