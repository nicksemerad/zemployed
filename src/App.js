import React, { Component } from 'react';
import { Container } from "semantic-ui-react"; 
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Role from './components/pages/profile_pages/Role'
import EmployeeSetup from './components/pages/profile_pages/EmployeeSetup'
import EmployerSetup from './components/pages/profile_pages/EmployerSetup'
import Footer from './components/shared/Footer'
import Assessments from './components/pages/Assessments';
import Assessment from './components/pages/Assessment';
import Jobs from './components/pages/Jobs';
import Job from './components/pages/Job';
import Profile from'./components/pages/profile_pages/Profile'

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
              <Route exact path='/setup_choice' component={Role} />
              <Route exact path='/employee_setup' component={EmployeeSetup} />
              <Route exact path='/employer_setup' component={EmployerSetup} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/assessments' component={Assessments} />
              <Route exact path='/assessment/:id' component={Assessment}/>
              <Route exact path='/jobs' component={Jobs}/>
              <Route exact path='/job/:id' component={Job}/>
              <Route component={NoMatch} />
            </Switch>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
