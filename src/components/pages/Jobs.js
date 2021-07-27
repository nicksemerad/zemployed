import React, {Component} from 'react';
import {Segment,  } from 'semantic-ui-react'

class Jobs extends Component {
  state = { firstName: '', lastName: '',  etc: ''};
  render() {
    return(
      <div style={{
        width: '100%',
        margin: 'auto',
        marginBottom: '0px',
          
        height: '100vh',
        padding: '60px',
        backgroundColor: '#2f2d91',}}>
      
      <h1 style={{color:'white', textAlign: 'center'}}>
        <em>Jobs.</em>
      </h1>



      
    </div>
    )
  }
}
export default Jobs;