import React, { Component } from 'react';
import { Grid, List, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return(
      <div style={{color: 'black'}}>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 5em' }}>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Join Us' />
            <List link inverted>
              <Link to='/'><List.Item as='a'>Home</List.Item></Link><br/>
              <Link to='/register'><List.Item as='a'>Register</List.Item></Link><br/>
              <Link to='/login'><List.Item as='a'>Log In</List.Item></Link><br/>
              <Link to='/profile'><List.Item as='a'>My Profile</List.Item></Link>

            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Jobs' />
            <List link inverted>
              <Link to='/jobs'><List.Item as='a'>All Jobs</List.Item></Link>
              <List.Item as='a'>List a Job</List.Item>
              <Link to='/profile'><List.Item as='a'>My Applications</List.Item></Link>
              <List.Item as='a'>Jobs Near Me</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Legal' />
            <List link inverted>
              <List.Item as='a'>Privacy Policy</List.Item>
              <List.Item as='a'>Terms of Use</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>About Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Zemployed' />
            <p>
              Copywrite © 2021 Zemployed L.L.C. All Rights Reserved.
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
      </div>
    )
  }
}

export default Footer;