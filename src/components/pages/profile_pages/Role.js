import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';

class ProfileChoice extends Component {
  state = { activeItem: '' }

  employeeLink = () => { return (<Redirect to='/employee_setup'/>)}
  employerLink = () => { return (<Redirect to='/employer_setup'/>)}

  handleSubmit = (e) => {
    e.preventDefault();
    const { activeItem } = this.state;
    if (activeItem === 'employee'){
      this.employeeLink()
    }
    if (activeItem === 'employer'){
      this.employerLink()
    }  
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const {activeItem} = this.state;
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
      <h1 style={{color:'white', textAlign: 'center'}}>{this.activeItem}</h1>
        <h1 style={{color:'white', textAlign: 'center'}}>
          <em>Which are you?</em>
          </h1>
        <Form onSubmit={this.handleSubmit}>
          <Segment textAlign='center' basic>
            <Link to='/employee_setup'>
              <Button color='white'
                name = 'employee'
                value = 'employee'
                active={activeItem === 'employee'}
                onClick = {this.employeeLink}
                style={{color:'#2f2d91'}}>
                Employee
              </Button>
            </Link>
            <Link to='/employer_setup'>
              <Button color='white'
                name = 'employer'
                value = 'employee'
                active={activeItem === 'employer'}
                onClick = {this.employerLink}
                style={{color:'#2f2d91'}}>
                Employer
              </Button>
            </Link>
          </Segment>
        </Form>
      </Segment>
      </div>
    )
  }
}

export default ProfileChoice;