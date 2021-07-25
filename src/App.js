import React, { Component } from 'react';
import { Container } from "semantic-ui-react"; 
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Role from './components/pages/profile_pages/Role'
import ProfileSetup from './components/pages/profile_pages/ProfileSetup'
import Footer from './components/shared/Footer'

class App extends Component {
  render() {
    return (
      <div style = {{backgroundColor: '#2f2d91', width: '100%', height: '100%'}}>
        <Navbar/>
        
        <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/role' component={Role} />
              <Route exact path='/setup' component={ProfileSetup} />
              <Route component={NoMatch} />
            </Switch>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
