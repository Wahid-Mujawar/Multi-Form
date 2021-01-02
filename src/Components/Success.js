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
      
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success"/>
            <h2>ThankYou For Your Submission</h2>
            <p>For Futher Procees You will Be Notified With Email</p>
            
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
