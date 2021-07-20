import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Banner from '../../components/images/zemp_banner.png'

const Home = () => (
  <div style={{ width: '100%'}}>

  <div style={{
    width: '100%',
    margin: 'auto',
    marginBottom: '0px',
    
    height: '100vh',
    padding: '60px',
    backgroundColor: '#2f2d91',
   
  }}>
    <div style={{textAlign: 'center'}}>

    
    <img src={Banner} alt={'Zemployed'} style={{width: '100%'}}/>

    <div style={{marginTop: '50px'}}>
    <Button color='#FFFFFF'>
        <Link to="/register" style={{color:'#2f2d91'}}>
        Register</Link>
      </Button>
      <Button color='white'>
        <Link to="/login" style={{color:'#2f2d91'}}>
        Log In</Link>
      </Button>
      <Button color='white'>
        <Link to="/role" style={{color:'#2f2d91'}}>
        Role</Link>
      </Button>
      <Button color='white'>
        <Link to="/setup" style={{color:'#2f2d91'}}>
        Setup Profile</Link>
      </Button>
    </div>
  </div>
  </div>
  </div>
)


export default Home;

