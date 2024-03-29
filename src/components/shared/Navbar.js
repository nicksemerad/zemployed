import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/zemp_logo.png'


class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <div style={{
        width: '100%',
        padding: '10px',
      }}>
        <Menu ui pointing secondary>
          <Link to='/'>
            <img
              src={Logo} alt={'Home'} style={{width: '19%', }}/>
          </Link>
          <Menu.Menu position='right'>
            <Link to='/login'>
              <Menu.Item
                style={{ color: 'White'}}
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}/>
            </Link>
            <Link to='/register'>
              <Menu.Item
                style={{ color: 'White'}}
                name='register'
                active={activeItem === 'register'}
                onClick={this.handleItemClick}/>
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar;