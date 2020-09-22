import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Michael Veiga',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Never Stop Growing',
        subTitle: "Welcome to Michael's Portfolio",
        text: 'Click on my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'How to Reach Me',
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="nav-effect" expand="lg">
            <Navbar.Brand className="text-white">Michael Veiga</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-white item-grow" to="/">
                  Home
                </Link>
                <Link className="nav-link text-white item-grow" to="/about">
                  About
                </Link>
                <Link className="nav-link text-white item-grow" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
