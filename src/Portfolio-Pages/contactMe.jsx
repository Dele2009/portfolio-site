import React from 'react'
import contact from '../port-img/contact-logo.svg'
import { Button, Col, Form, Row } from 'react-bootstrap'
import webinfo from '../webvalues.json'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactMe () {
  const States = webinfo.states
  const form = useRef()

  // const [userFname, setUserFname] = useState(null)
  // const [userFnameerror, setUserFnameerror] = useState('')

  // const [userlname, setUserlname] = useState('')
  // const [userlnameerror, setUserlnameerror] = useState(null)
  // let form = useRef(null)
  // console.log(form)

  // const valid = e => {
  //   valid_fname()
  //   valid_lname()
  // }

  // const valid_fname = () => {
  //   let fn_format = /^[a-zA-Z-' ]{5,}$/
  //   if (userFname === '') {
  //     setUserFnameerror('Firstname Required')
  //   } else if (!fn_format.test(userFname)) {
  //     setUserFnameerror('Field invalid')
  //   } else {
  //     setUserFnameerror('')
  //   }
  // }

  // const valid_lname = () => {
  //   const ln_format = /^[a-zA-Z-' ]{5,}$/
  //   if (userlname === '') {
  //     setUserlnameerror('Lastname Required')
  //   }
  //   else if (!ln_format.test(userlname)) {
  //     setUserlnameerror('Field invalid')
  //   } else {
  //     setUserlnameerror('')
  //   }
  // }
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

  const handle_submit = e => {
    e.preventDefault()
    const form_errors = {}
    const text_format = /^[a-zA-Z-' ]{5,}$/
    const email_format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const state_format = /\b(?!none)\w+\b/

    if (!uservalues.user_firstname.trim()) {
      form_errors.user_firstname = '* Field Required *'
    } else if (!text_format.test(uservalues.user_firstname)) {
      form_errors.user_firstname = 'Name too short'
    }

    if (!uservalues.user_lastname.trim()) {
      form_errors.user_lastname = '* Field Required *'
    } else if (!text_format.test(uservalues.user_lastname)) {
      form_errors.user_firstname = 'Name too short'
    }

    if (!uservalues.user_email.trim()) {
      form_errors.user_email = '* Field Required *'
    } else if (!email_format.test(uservalues.user_email)) {
      form_errors.user_email = 'Email invalid'
    }

    if (!state_format.test(uservalues.user_state)) {
      form_errors.user_state = '* Field Required *'
    }

    if (!uservalues.user_message.trim()) {
      form_errors.user_message = '* Field Required *'
    }

    setErrors(form_errors)
    if (Object.keys(form_errors).length === 0) {
      //alert('successful') 3c0b4bb2-6268-4e52-bc90-36337d0798cc
      const email_config = {
        SecureToken: '3c0b4bb2-6268-4e52-bc90-36337d0798cc',
        To: 'obedaminu303@gmail.com',
        From: uservalues.user_email,
        Subject: 'Contact from portfolio form',
        Body: `${uservalues.user_firstname} ${uservalues.user_lastname} from ${uservalues.user_state} ${uservalues.user_city||null} ${uservalues.user_zipcode||null} sent this message ${uservalues.user_message} `
      }

      if(window.Email){
        window.Email.send(email_config)
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
                <Form onSubmit={handle_submit} ref={form}>
                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridEmail'>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='user_firstname'
                        placeholder='John'
                        onChange={handle_change}
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
                    />
                    {errors.user_email && (
                      <i className='text-danger'>{errors.user_email}</i>
                    )}
                  </Form.Group>

                  <Row className='mb-3'>
                    <Form.Group lg as={Col} controlId='formGridstate'>
                      <Form.Label>State</Form.Label>
                      <Form.Select name='user_state' onChange={handle_change}>
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
                      <Form.Control type='text' name='user_city' />
                    </Form.Group>

                    <Form.Group lg as={Col} controlId='formGridZip'>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type='number' name='user_zipcode' min='1' />
                    </Form.Group>
                  </Row>

                  <Form.Group className='mb-3' controlId='formGridAddress2'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      name='user_message'
                      onChange={handle_change}
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
