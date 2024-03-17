import React from 'react'
import contact from '../port-img/contact-logo.svg'
import { Button, Col, Form, Row } from 'react-bootstrap'
import webinfo from '../webvalues.json'
import { useState} from 'react'
import { sendEmail } from '../api'


function ContactMe () {
  const States = webinfo.states;
  const [uservalues, setUservalues] = useState({
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_state: '',
    user_city: '',
    user_zipcode: '',
    user_message: ''
  })
  const [errors, setErrors] = useState({})

  const handle_change = e => {
    const { name, value } = e.target
    setUservalues({
      ...uservalues,
      [name]: value
    })
  }
  const Validate_form = () => {
    const form_errors = {}
    const text_format = /^[a-zA-Z-' ]{5,}$/
    const email_format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const state_format = /\b(?!none)\w+\b/
    let valid_form = true

    if (!uservalues.user_firstname.trim()) {
      form_errors.user_firstname = '* Field Required *'
      valid_form = false
    } else if (!text_format.test(uservalues.user_firstname)) {
      form_errors.user_firstname = 'Name too short'
      valid_form = false
    }

    if (!uservalues.user_lastname.trim()) {
      form_errors.user_lastname = '* Field Required *'
      valid_form = false
    } else if (!text_format.test(uservalues.user_lastname)) {
      form_errors.user_lastname = 'Name too short'
      valid_form = false
    }

    if (!uservalues.user_email.trim()) {
      form_errors.user_email = '* Field Required *'
      valid_form = false
    } else if (!email_format.test(uservalues.user_email)) {
      form_errors.user_email = 'Email invalid'
      valid_form = false
    }

    if (!state_format.test(uservalues.user_state)) {
      form_errors.user_state = '* Field Required *'
      valid_form = false
    }

    if (!uservalues.user_message.trim()) {
      form_errors.user_message = '* Field Required *'
      valid_form = false
    }

    setErrors(form_errors)
    return valid_form
  }

  const handle_submit = async e => {
    e.preventDefault()
    let is_valid = Validate_form()

    if (is_valid) {
      try {
        const response = await sendEmail(uservalues)

        if (response.success) {
          alert(response.message)
          setUservalues({
            user_firstname: '',
            user_lastname: '',
            user_email: '',
            user_state: 'none',
            user_city: '',
            user_zipcode: '',
            user_message: ''
          })
        } else {
          throw new Error(response.message)
        }
      } catch (error) {
        console.error('Error sending email:', error)
        alert('Failed to send email.')
      }

     
    }
  }

 

  return (
    <>
      <section
        className='d-flex align-items-center justify-content-center'
        id='hero-section'
      >
        <div className='container'>
          <div>
            <p className=' fs-1 code-style text-center'>Contact Me</p>
          </div>
          <div className='row fullscreen d-flex align-items-center gap-5  justify-content-between'>
            <div className='col-lg'>
              <img className='img-fluid' src={contact} alt='contact-logo' />
            </div>
            <div className='p-3 p-lg-0 col-lg'>
              <div className=' mb-md-0 mb-5 main-nav text-light p-4 p-lg-5 rounded-5'>
                <Form onSubmit={handle_submit}>
                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridEmail'>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='user_firstname'
                        placeholder='John'
                        onChange={handle_change}
                        value={uservalues.user_firstname}
                      />
                      {errors.user_firstname && (
                        <i className='text-danger'>{errors.user_firstname}</i>
                      )}
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridPassword'>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='user_lastname'
                        placeholder='Doe'
                        onChange={handle_change}
                        value={uservalues.user_lastname}
                      />
                      {errors.user_lastname && (
                        <i className='text-danger'>{errors.user_lastname}</i>
                      )}
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='text'
                      name='user_email'
                      placeholder='johndoe225@example.com'
                      onChange={handle_change}
                      value={uservalues.user_email}
                    />
                    {errors.user_email && (
                      <i className='text-danger'>{errors.user_email}</i>
                    )}
                  </Form.Group>

                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridstate'>
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        name='user_state'
                        onChange={handle_change}
                        value={uservalues.user_state}
                      >
                        <option value='none'>...CHOOSE...</option>
                        {States.map((State, index) => {
                          return (
                            <option key={index} value={State}>
                              {State}
                            </option>
                          )
                        })}
                      </Form.Select>
                      {errors.user_state && (
                        <i className='text-danger'>{errors.user_state}</i>
                      )}
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridcity'>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type='text'
                        name='user_city'
                        onChange={handle_change}
                        value={uservalues.user_city}
                      />
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridZip'>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type='number'
                        name='user_zipcode'
                        min='1'
                        onChange={handle_change}
                        value={uservalues.user_zip}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress2'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      name='user_message'
                      onChange={handle_change}
                      value={uservalues.user_message}
                    />
                    {errors.user_message && (
                      <i className='text-danger'>{errors.user_message}</i>
                    )}
                  </Form.Group>

                  <Button
                    className='btn bg-blue-grad border-0 text-uppercase text-light w-100 fs-5 mt-3'
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
