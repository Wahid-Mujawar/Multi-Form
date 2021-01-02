import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Confirm extends Component {
   continue = e => {
      e.preventDefault();
      //Process Form!
      this.props.nextStep()
   };
   
   back = e => {
      e.preventDefault();
      this.props.previousStep()
   };

   render() {
      const { values: { firstName, lastName, email, 
         occupation, bio,  city} } = this.props;
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success"/>
            
          </React.Fragment>
       </MuiThemeProvider>
      )
   }
}

const styles ={
   button: {
      margin: 15
   }
}

export default Confirm;
