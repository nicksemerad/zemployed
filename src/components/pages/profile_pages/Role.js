import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class ProfileChoice extends Component {
  state = {isEmployer: false, isEmployee: true}

  handleSubmit = (e) => {
    e.preventDefault();
    const { isEmployee, isEmployer } = this.state;
    if ((isEmployee === true) && (isEmployer === false)){
        // set user.type == employee
    }
    if ((isEmployer === true) && (isEmployee === false)){
      // set user.type == employer
    }
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: !value });
  }
  
  render() {
    const {isEmployee, isEmployer} = this.state;
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
        <h1 style={{color:'white', textAlign: 'center'}}>Which are you?</h1>
        <Form onSubmit={this.handleSubmit}>
          <Segment textAlign='center' basic>
            <Button color='white'
              name = 'isEmployee'
              value = {isEmployee}
              type = 'isEmployee'
              onClick = {this.handleChange}
              style={{color:'#2f2d91'}}>
              Employee
            </Button>
            <Button color='white'
              name = 'isEmployer'
              value = {isEmployer}
              type = 'isEmployer'
              onClick = {this.handleChange}
              style={{color:'#2f2d91'}}>
              Employer
            </Button>
          </Segment>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
        
      </Segment>
      </div>
    )
  }
}

export default ProfileChoice;