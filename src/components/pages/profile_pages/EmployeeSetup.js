import React, {Component} from 'react';
import {Segment, Button, Form, Label } from 'semantic-ui-react'
import StatesDropdown from '../../shared/StatesDropdown'

class EmployeeSetup extends Component {
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
        
        height: '270vh',
        padding: '60px',
        backgroundColor: '#2f2d91',
       
      }}>
      <Segment basic>
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Get Ready for the Jobs!</em>
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
        <em>How About School?</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            School Name
          </Label>
          <Form.Input
            required
            name='school_name'
            placeholder='University of New York'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Degree Name
          </Label>
          <Form.Input
            required
            name='degree_name'
            placeholder='Master of Arts'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Graduation Year
          </Label>
          <Form.Input
            required
            name='grad_year'
            placeholder='2021'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            GPA
          </Label>
          <Form.Input
            required
            name='gpa'
            placeholder='3.4'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Save</Button>
          </Segment>
        </Form>

        {/* Work Experience */}

        <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Work Experience? Almost There!</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            Company Name
          </Label>
          <Form.Input
            required
            name='company_name'
            placeholder='Zemployed'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Job Position
          </Label>
          <Form.Input
            required
            name='position'
            placeholder='Senior Web Developer'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Start/ End Dates
          </Label>
          <Form.Group widths='equal'>
            <Form.Input
              required
              name='start_year'
              placeholder='Begin Date'
              onChange={this.handleChange}
            />
            <Form.Input
              required
              name='end_year'
              placeholder='End Date'
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
          <StatesDropdown/>
        </Form.Group>
          <Label as='a' color='blue' ribbon>
            Job Summary
          </Label>
          <Form.TextArea
            required
            name='summary'
            placeholder='Tell us more about this position...'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Save</Button>
          </Segment>
        </Form>
{/* *********************************************************************** */}

      {/* Involvement selection */}
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Any Other Involvement We Should Know?</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            Organization Name
          </Label>
          <Form.Input
            required
            name='inv_name'
            placeholder='Food Bank'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Involvement Position
          </Label>
          <Form.Input
            required
            name='inv_position'
            placeholder='Fork Lift Driver'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Organization Type
          </Label>
          <Form.Input
            required
            name='inv_org_type'
            placeholder='Non-Profit'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Start/ End Dates
          </Label>
          <Form.Group widths='equal'>
            <Form.Input
              required
              name='start_year'
              placeholder='Begin Date'
              onChange={this.handleChange}
            />
            <Form.Input
              required
              name='end_year'
              placeholder='End Date'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Label as='a' color='blue' ribbon>
            City, State of Involvement
          </Label>
          <Form.Group widths='equal'>
            <Form.Input
              required
              name='inv_location'
              // value={firstName}
              placeholder='City'
              onChange={this.handleChange}
            />
            <StatesDropdown/>
          </Form.Group>
            <Label as='a' color='blue' ribbon>
              Involvement Summary
            </Label>
            <Form.TextArea
              required
              name='summary'
              placeholder='Tell us more about this position...'
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

export default EmployeeSetup;