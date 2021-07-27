import React, {Component} from 'react';
import {Segment, Button, Form, Label } from 'semantic-ui-react'
import StatesDropdown from '../../shared/StatesDropdown'

class EmployerSetup extends Component {
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
        
        height: '120vh',
        padding: '60px',
        backgroundColor: '#2f2d91',
       
      }}>
      <Segment basic>
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Get Ready to Hire!</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
        <Label as='a' color='blue' ribbon>
            Name
        </Label>
        <Form.Group widths='equal'>
          <Form.Input
            required
            autoFocus
            name='firstName'
            // value={firstName}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Form.Input
            required
            name='lastName'
            // value={lastName}
            placeholder='Last Name'
            type='lastName'
            onChange={this.handleChange}
          />
        </Form.Group>
          <Label as='a' color='blue' ribbon>
            City, State
          </Label>
        <Form.Group widths='equal'>
          <Form.Input
            required
            name='userCity'
            // value={firstName}
            placeholder='City'
            onChange={this.handleChange}
          />
          <StatesDropdown />
        </Form.Group>
          <Label as='a' color='blue' ribbon>
            Phone
          </Label>
          <Form.Input
            required
            name='userPhone'
            // value={jobTitle}
            placeholder='Phone Number'
            type='userPhone'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Save</Button>
          </Segment>
        </Form>

        {/* School Segment */}

      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Your Company</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            Company Name
          </Label>
          <Form.Input
            required
            name='org_name'
            placeholder='Zemployed'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Company Size
          </Label>
          <Form.Input
            required
            name='org_size'
            placeholder='50'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Industry
          </Label>
          <Form.Input
            required
            name='industry'
            placeholder='Technology'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            How Did You Hear About Us?
          </Label>
          <Form.TextArea
            required
            name='source'
            placeholder='Google, Friend, Ad, etc...'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Save</Button>
          </Segment>
        </Form>
      </Segment>
      </div>
    )
  }
}

export default EmployerSetup;