import React, { Component } from 'react';
import { Container } from "semantic-ui-react"; 
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Register from './components/pages/Register'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
