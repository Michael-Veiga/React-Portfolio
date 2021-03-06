import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import ContactForm from '../components/ContactForm';




class ContactPage extends React.Component {

    render() {
    return (
    <div>
      <Hero title={this.props.title} />
      <Content>
        <ContactForm/>
      </Content>

    </div>
    );
  }
}

export default ContactPage;
