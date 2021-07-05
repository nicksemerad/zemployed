import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const Home = () => (
  <div style={{ width: '100%'}}>

  <div style={{
    width: '100%',
    margin: 'auto',
    marginBottom: '0px',
    
    height: '1100px',
    padding: '60px',
    backgroundColor: '#FFFF',
   
  }}>
    <div style={{textAlign: 'center'}}>

    <h1 style={{color: '#221C35'}}>Welcome to Zemployed</h1>
    <h2 style={{color: '#2B7A78', marginTop: '50px'}}>About Us</h2>
    <h3 style={{color: '#221C35'}}>Yo wassup this is zemployed it doesn't work 
        totally right now but it will and when it does it will be very cool and you
        will want to register and then put your resume in here then jobs come out its
        pretty slick
    </h3>
    <h1 style={{color: '#221C35'}}>WE FINNA CHANGE TO NIGHT THEME</h1>
    <div style={{marginTop: '50px'}}>
      <Button color='black'>
        <Link to="/login" style={{color:'#FFF'}}>
        Log In</Link>
      </Button>
      <Button color='black'>
        <Link to="/register" style={{color:'#FFF'}}>
        Register</Link>
      </Button>
    </div>
  </div>
  </div>
  </div>
)


export default Home;

