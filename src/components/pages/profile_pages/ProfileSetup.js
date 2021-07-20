import React, {Component} from 'react';
import {Segment, Button, Form } from 'semantic-ui-react'

class ProfileSetup extends Component {
  state = { firstName: '', lastName: '',  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, jobTitle } = this.state;
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstName, lastName, jobTitle } = this.state;
    return (
      <div style={{
        width: '100%',
        margin: 'auto',
        marginBottom: '0px',
        
        height: '100vh',
        padding: '60px',
        backgroundColor: '#2f2d91',
       
      }}>
      <Segment basic>
      <h1 style={{color:'white', textAlign: 'center'}}>Tell us about yourself</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="First Name"
            required
            autoFocus
            name='firstName'
            value={firstName}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            required
            name='lastName'
            value={lastName}
            placeholder='Last Name'
            type='lastName'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Job Title"
            required
            name='jobTitle'
            value={jobTitle}
            placeholder='Job Title'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
      </div>
    )
  }
}

export default ProfileSetup;