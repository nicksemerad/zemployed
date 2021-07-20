import React, {Component} from 'react';

class Profile extends Component {
  state = {user: 'user'}

  render() {
    const {name, profilePic, role, profession, etc} = this.state;
    return (
      <div>
        <h3>profilePic:</h3>
        <h3>Name:</h3>
        <h3>Role:</h3>
        <h3>Profession:</h3>
      </div>
    )
  }
}

export default Profile;