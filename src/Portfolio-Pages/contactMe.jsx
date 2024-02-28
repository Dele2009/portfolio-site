import React from 'react'
import contact from '../port-img/contact-logo.svg'
import { Button, Col, Form, Row } from 'react-bootstrap'
import webinfo from '../webvalues.json'

function ContactMe () {
  const States = webinfo.states
  return (
    <>
      <section
        className='d-flex align-items-center justify-content-center'
        id='hero-section'
      >
        <div className='container'>
            <div>
                <p className=" fs-1 code-style text-center">Contact Me</p>
            </div>
          <div className='row fullscreen d-flex align-items-center gap-5  justify-content-between'>
            <div className='col-lg'>
              <img className='img-fluid' src={contact} alt='contact-logo' />
            </div>
            <div className='p-3 p-lg-0 col-lg'>
              <div className=' mb-md-0 mb-5 main-nav text-light p-4 p-lg-5 rounded-5'>
                <Form>
                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridEmail'>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type='text' placeholder='John' />
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridPassword'>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type='text' placeholder='Doe' />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='johndoe225@example.com'
                    />
                  </Form.Group>

                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridCity'>
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridState'>
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue='Choose...'>
                        <option>Choose...</option>
                        {States.map((State, index) => {
                          return <option key={index}>{State}</option>
                        })}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridZip'>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress2'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      placeholder='......................'
                    />
                  </Form.Group>

                  <Button
                    className='btn bg-blue-grad border-0 text-uppercase text-light'
                    type='submit'
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ContactMe
