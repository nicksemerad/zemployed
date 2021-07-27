import React, {Component} from 'react';

class Profile extends Component {
  state = {user: 'user'}

  render() {
    return (
      <div style={{
        width: '100%',
        margin: 'auto',
        marginBottom: '0px',
          
        height: '100vh',
        padding: '60px',
        backgroundColor: '#2f2d91',}}>

      {/*  
         if (this.state.user.role === 'employer'){
           show all jobs listed
         }
         else {
           show all jobs applied to
         }
      */}

     
        <h3>profilePic:</h3>
        <h3>Name:</h3>
        <h3>Role:</h3>
        <h3>Profession:</h3>
      </div>
    )
  }
}

export default Profile;