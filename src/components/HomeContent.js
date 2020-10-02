import React from 'react';
import Container from 'react-bootstrap/Container';


import CardContent from './CardContent';

function HomeContent() {

        return(
        <Container className="justify-content-center pb-5" fluid={true}>
            <CardContent />
        </Container>
        );
    

}

export default HomeContent;