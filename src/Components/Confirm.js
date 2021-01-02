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
      const { values: { firtsname, lastname, email, 
         occupation, bio,  city} } = this.props;
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm User Data"/>
            <List>
               <ListItem
               primaryText="First Name"
               secondaryText={ firstName }
               />

               <ListItem
               primaryText="Last Name"
               secondaryText={ lastName }
               />

               <ListItem
               primaryText="Occupation"
               secondaryText={ occupation }
               />

               <ListItem
               primaryText=" Bio "
               secondaryText={ bio }
               />

               <ListItem
               primaryText="City"
               secondaryText={ city }
               />
            </List>
            
            
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

export default Confirm;
