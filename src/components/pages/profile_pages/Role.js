import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class ProfileChoice extends Component {
  state = { activeItem: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { activeItem } = this.state;
    if (activeItem === 'employee'){
        // set user.type == employee
    }
    if (activeItem === 'employer'){
      // set user.type == employee
  }
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: !value });
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
        <h1 style={{color:'white', textAlign: 'center'}}>Which are you?</h1>
        <Form onSubmit={this.handleSubmit}>
          <Segment textAlign='center' basic>
            <Button color='white'
              name = 'employee'
              active={activeItem === 'employee'}
              onClick = {this.handleItemClick}
              style={{color:'#2f2d91'}}>
              Employee
            </Button>
            <Button color='white'
              name = 'employer'
              active={activeItem === 'employer'}
              onClick = {this.handleItemClick}
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