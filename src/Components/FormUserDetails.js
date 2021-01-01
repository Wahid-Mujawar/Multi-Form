import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
   render() {
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter The User Details"/>
            <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firtName')}
            defaultValue={values.firstName}
            />
            <br/>

          </React.Fragment>
       </MuiThemeProvider>
      )
   }
}

export default FormUserDetails
