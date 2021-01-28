import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

import '../index.css';
import './borderSASS.scss';

import vectorCap from '../assets/images/vectorCap.JPG';
import planetPic from '../assets/images/planetPic.png';
import kickPic from '../assets/images/kickTout.JPG';
import guruPic from '../assets/images/guruPic.png';

function CardContent() {
  return (
    <div>
      <Card className="bb my-5 mx-auto">
        <Row className="no-gutters">
          <Col md={4}>
            <img className="card-img" src={vectorCap} alt="" />
          </Col>
          <Col md={8}>
            <Card.Body className="py-0 text-center mt-2">
              <p className="g-card-title text-white">
                Vector Electrical & Controls
              </p>
              <p className="g-card-sub-title text-white">
                The official website of the Vector Electrical and Controls
                Corporation
              </p>
              <a
                className="badge badge-success mx-2 mt-2 px-2"
                href="https://vectornh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vector Electrical Link
              </a>
              <a
                className="badge badge-success"
                href="https://github.com/Michael-Veiga/vector-electrical"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
              <div className="text-center mt-4">
                <i
                  class="devicon-react-original-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-css3-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-sass-original"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-javascript-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-nodejs-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-bootstrap-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-github-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="bb my-5 mx-auto">
        <Row className="no-gutters">
          <Col md={4}>
            <img className="card-img" src={planetPic} alt="" />
          </Col>
          <Col md={8}>
            <Card.Body className="py-0 text-center mt-2">
              <p className="g-card-title text-white">Professor Planet</p>
              <p className="g-card-sub-title text-white">
                An educational resource for people interested in space and our
                solar system
              </p>
              <a
                className="badge badge-success mx-2 mt-2 px-2"
                href="https://bowdwin.github.io/Project-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Professor Planet Link
              </a>
              <a
                className="badge badge-success"
                href="https://github.com/bowdwin/Project-1.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
              <div className="text-center mt-4">
                <i
                  className="devicon-html5-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-css3-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-sass-original"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-javascript-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-jquery-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-github-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="bb my-5 mx-auto">
        <Row className="no-gutters">
          <Col md={4}>
            <img className="card-img" src={kickPic} alt="" />
          </Col>
          <Col md={8}>
            <Card.Body className="py-0 text-center mt-2">
              <p className="g-card-title text-white">Kick-Tout</p>
              <p className="g-card-sub-title text-white">
                A forum that connects users who want to sell or trade shoes
              </p>
              <a
                className="badge badge-success mx-2 mt-2 px-2"
                href="https://kicktout.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kick-Tout Link
              </a>
              <a
                className="badge badge-success"
                href="https://github.com/jbouchard13/project-3.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
              <div className="text-center mt-4">
                <i
                  className="devicon-css3-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-mysql-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-express-original"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-react-original-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-nodejs-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-javascript-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-sequelize-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-bootstrap-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-heroku-original-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="bb my-5 mx-auto">
        <Row className="no-gutters">
          <Col md={4}>
            <img className="card-img" src={guruPic} alt="" />
          </Col>
          <Col md={8}>
            <Card.Body className="py-0 mt-2 text-center">
              <p className="g-card-title text-white">Food Guru</p>
              <p className="g-card-sub-title text-white">
                A meal planning app that allows users to search for and save
                their favorite recipes
              </p>
              <a
                className="badge badge-success mx-2 mt-2 px-2"
                href="https://arcane-coast-86770.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food Guru Link
              </a>
              <a
                className="badge badge-success"
                href="https://github.com/gavinspotter/project2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
              <div className="text-center mt-4">
                <i
                  className="devicon-html5-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-css3-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-sass-original"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  className="devicon-javascript-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-jquery-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-mysql-plain"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-nodejs-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-bootstrap-plain-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
                <i
                  class="devicon-heroku-original-wordmark"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    padding: '1rem',
                  }}
                ></i>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CardContent;
