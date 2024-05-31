import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './Form4.css'; // Import the custom CSS file

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessRequirements: '',
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    // Optionally, close the modal after form submission
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={5}>
          {/* Button to trigger modal */}
          <Button type="button" className=" button2" onClick={() => setShowModal(true)}>
            Get in Touch
          </Button>

          {/* Modal structure */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFullName">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className='form2'>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBusinessRequirements" className='form2'>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Business Requirements"
                    name="businessRequirements"
                    value={formData.businessRequirements}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button  type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
