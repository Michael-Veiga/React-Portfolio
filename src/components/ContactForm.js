import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_ES_SVC,
        process.env.REACT_APP_ES_TEMP,
        e.target,
        process.env.REACT_APP_ES_USER
      )
      .then(
        result => {
          console.log(result.text);
          toast.success('Message Sent');
        },
        error => {
          console.log(error.text);
          toast.error('Message Not Sent');
        }
      );
    e.target.reset();
  }

  return (
    <>
      <ToastContainer />
      <div className="contactCont py-3">
        <Form
          id="contact-form"
          onSubmit={sendEmail}
          style={{ margin: '0 auto', width: '80%' }}
        >
          <Form.Group>
            <Form.Label className="text-white">Full Name</Form.Label>
            <Form.Control name="name" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control name="email" type="email" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white">Subject</Form.Label>
            <Form.Control name="subject" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-white">Message</Form.Label>
            <Form.Control name="message" type="textarea" row="3" />
          </Form.Group>

          <Button
            className="btn-success d-inline-block"
            variant="primary"
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ContactForm;
