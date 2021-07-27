import React from 'react';
import { Link } from 'react-router-dom';
import {Button } from 'semantic-ui-react';

const NoMatch = () => (
  <div style={{
    width: '100%',
    margin: 'auto',
    marginBottom: '0px',
    
    height: '100vh',
    padding: '60px',
    backgroundColor: '#2f2d91',
   
  }}>
  <h1 style={{color: 'white'}}>404 Page not found</h1>
  <Button color= 'black'>
    <Link style={{color:'white'}}to='/'>
      Take Me Home!
    </Link>
  </Button>
  </div>
)

export default NoMatch;