import React, {Component} from 'react';
import {Segment, Button, Form, Label } from 'semantic-ui-react'

class ProfileSetup extends Component {
  state = { firstName: '', lastName: '',  etc: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    // set the user attributes to the resulting text
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value });
  }

  render() {
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
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Tell us about yourself</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            First Name
          </Label>
          <Form.Input
            required
            autoFocus
            name='firstName'
            // value={firstName}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Last Name
          </Label>
          <Form.Input
            required
            name='lastName'
            // value={lastName}
            placeholder='Last Name'
            type='lastName'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Job Title
          </Label>
          <Form.Input
            required
            name='jobTitle'
            // value={jobTitle}
            placeholder='Job Title'
            type='password'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            State
          </Label>
          <Form.Input
            required
            autoFocus
            name='userState'
            // value={firstName}
            placeholder='New York'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            City
          </Label>
          <Form.Input
            required
            autoFocus
            name='userCity'
            // value={firstName}
            placeholder='New York'
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