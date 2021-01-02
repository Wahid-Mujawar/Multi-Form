import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import  {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
   continue = e => {
      e.preventDefault();
      //Process Form!
      this.props.nextStep()
   };
   render() {
      const { values, handleChange } = this.props;
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter The User Details"/>
            <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            />
            <br/>

            <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            />
            <br/>

            <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            />
            <br/>

            <RaisedButton
               label="Continue"
               primary={true}
               style={styles.button}
               onClick={this.continue}
               />
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

export default FormUserDetails
