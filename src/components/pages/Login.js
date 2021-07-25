import React, {Component} from 'react';
import { Button, Form, Segment, Label } from 'semantic-ui-react';

class Login extends Component {
  state = { email: '', password: '' }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  render() {
    const { email, password, } = this.state;
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
          <em>Login</em>
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Label as='a' color='blue' ribbon>
            Email
          </Label>
          <Form.Input
            autoFocus
            required         
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Label as='a' color='blue' ribbon>
            Password
          </Label>
          <Form.Input
            required
            name='password'
            value={password}
            placeholder='Password'
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

export default Login;

