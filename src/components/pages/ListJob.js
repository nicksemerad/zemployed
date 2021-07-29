import React, {Component} from 'react';
import {Segment, Button, Form, Label, Dropdown } from 'semantic-ui-react'
import StatesDropdown from '../shared/StatesDropdown'

const hours = [
  { key: '1', text: '0-9', value: '1' },
  { key: '2', text: '10-19', value: '2' },
  { key: '3', text: '20-29', value: '3' },
  { key: '4', text: '30-39', value: '4' },
  { key: '5', text: '40-49', value: '5' },
  { key: '6', text: '50+', value: '6' },
  { key: '0', text: 'Contract', value: '0' },
]
const wages = [
  { key: '0', text: 'Single Payment', value: '0' },
  { key: '1', text: 'Hourly', value: '1' },
  { key: '2', text: 'Salary', value: '2' },
  { key: '3', text: 'Other', value: '3' },
]
const TorC = [
  { key: '0', text: 'None', value: '0' },
  { key: '1', text: 'Tips', value: '1' },
  { key: '2', text: 'Commission', value: '2' },
  { key: '3', text: 'Tips and Commission', value: '3' },
]

class ListJob extends Component {
  state = { firstName: '', lastName: '',  tips: false, commission: false};

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
        
        height: '150vh',
        padding: '60px',
        backgroundColor: '#2f2d91',
       
      }}>
      <Segment basic>
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Create A New Listing</em>
      </h1>
        <Form onSubmit={this.handleSubmit}>
        <Label as='a' color='blue' ribbon>
            Job Title
        </Label>
          <Form.Input
            required
            autoFocus
            name='job_title'
            // value={firstName}
            placeholder='Title'
            onChange={this.handleChange}
          />
        <Label as='a' color='blue' ribbon>
            Job Field
        </Label>
          <Form.Input
            fluid
            required
            name='job_field'
            placeholder='Field'
            onChange={this.handleChange}
          />
        <Label as='a' color='blue' ribbon>
            Hours Per Week
        </Label>
          <Form.Select
            fluid
            required
            name='job_hours'
            placeholder='Hours/ Week'
            options={hours}
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Wage Details
          </Label>
        <Form.Group widths='equal'>
            <Form.Input
              fluid
              required
              name='job_wage'
              placeholder='Wage'
              onChange={this.handleChange}
            />
          <Dropdown
            placeholder='Type'
            fluid
            search
            selection
            options={wages}
            style={{width: '20em', marginRight:'.5em'}}
          />
          <Dropdown
            placeholder='Extras'
            fluid
            search
            selection
            options={TorC}
            style={{width: '20em', marginRight:'.5em'}}
          />
        </Form.Group>
        
          <Label as='a' color='blue' ribbon>
            City, State of Job
          </Label>
          <Form.Group widths='equal'>
            <Form.Input
              required
              name='jobCity'
              placeholder='City'
              onChange={this.handleChange}
            />
            <StatesDropdown />
          </Form.Group>

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
            Contact Email
          </Label>
          <Form.Input
            required
            name='job_email'
            // value={jobTitle}
            placeholder='Contact Email'
            type='jobEmail'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Contact Phone
          </Label>
          <Form.Input
            required
            name='job_phone'
            placeholder='Contact Phone'
            type='jobPhone'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Job Summary/ Responsibilites
          </Label>
          <Form.TextArea
            required
            name='job_summary'
            placeholder='Tell us more about this position...'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Reccomended Skills/ Experience
          </Label>
          <Form.TextArea
            required
            name='job_reccomends'
            placeholder='Tell us about what you look for in applicants...'
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

export default ListJob;