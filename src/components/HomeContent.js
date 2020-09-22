import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

class HomeContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'Professor Planet',
                subTitle: 'An educational resource for people interested in space and our solar system',
                imgSrc: "https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/planetPic.png?raw=true",
                link: "https://bowdwin.github.io/Project-1/",
                repo: "https://github.com/bowdwin/Project-1.git",
                selected: false
            },
            {
                id: 1,
                title: 'Kick-Tout',
                subTitle: 'A forum that connects users who want to sell or trade shoes.',
                imgSrc: 'https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/kickTout.JPG?raw=true',
                link: "http://kicktout.herokuapp.com/",
                repo: "https://github.com/jbouchard13/project-3.git",
                selected: false 
            },
            {
                id: 2,
                title: 'Food Guru',
                subTitle: 'A meal planning app that allows users to search for and save their favorite recipes.',
                imgSrc: 'https://github.com/Michael-Veiga/react-portfolio/blob/master/src/assets/images/guruPic.png?raw=true',
                link: "https://arcane-coast-86770.herokuapp.com/",
                repo: "https://github.com/gavinspotter/project2",
                selected: false
            },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

   makeItems = (items) => {
       return items.map(item => {
           return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
       })
   }

    render() {
        return(
            <Container fluid={true}>
            <Row className="justify-content-center">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        );
    }

}

export default HomeContent;