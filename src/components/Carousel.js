import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import planetPic from '../assets/images/planetPic.png';
import guruPic from '../assets/images/guruPic.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'Professor Planet',
                subTitle: 'An entertaining and educational resource for people interested in space and our solar system',
                imgSrc: planetPic,
                link: "https://bowdwin.github.io/Project-1/",
                selected: false
            },
            {
                id: 1,
                title: 'Food Guru',
                subTitle: 'A meal planning app that allows users to search for recipes and add them to their weekly calender.',
                imgSrc: guruPic,
                link: "https://arcane-coast-86770.herokuapp.com/",
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
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        );
    }

}

export default Carousel;