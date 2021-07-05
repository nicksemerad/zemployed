import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div style={{
    width: '470px',
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
  }}>
  <h1>404 Page not found</h1>
  <Link to='/'>Return Home</Link>
  </div>
)

export default NoMatch;